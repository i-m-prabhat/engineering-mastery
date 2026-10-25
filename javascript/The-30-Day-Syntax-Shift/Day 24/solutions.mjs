import { loadWeather } from "./weather-api.mjs";

const form = document.getElementById("search-form");
const input = document.getElementById("city");
const mode = document.getElementById("mode");
const status = document.getElementById("status");
const results = document.getElementById("results");
let active;
let requestId = 0;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

// Tasks 4/8/9: render text and local emoji icons without HTML injection.
function render(weather) {
  document.getElementById("data-label").textContent =
    weather.sample ? "Fictional sample · fixed dates · not live" : "Live API weather";
  document.getElementById("city-name").textContent = weather.city;
  document.getElementById("observed").textContent = `Weather time: ${weather.time} (${weather.timezone})`;
  document.getElementById("current-icon").textContent = weather.icon;
  document.getElementById("temperature").textContent = `${weather.temperature.toFixed(1)} °C`;
  document.getElementById("condition").textContent = weather.label;
  document.getElementById("forecast-zone").textContent = `Dates in ${weather.timezone}. Daily high / low in °C.`;
  const forecast = document.getElementById("forecast");
  forecast.replaceChildren();
  for (const day of weather.forecast) {
    const card = element("article", undefined, "day-card");
    const date = element("time", day.date);
    date.dateTime = day.date;
    const icon = element("span", day.icon, "day-icon");
    icon.setAttribute("aria-hidden", "true");
    card.append(date, icon, element("p", day.label), element("p", `${day.high.toFixed(0)}° / ${day.low.toFixed(0)}°`));
    forecast.appendChild(card);
  }
  results.hidden = false;
}

// Tasks 5/6: keyboard submission, validation, loading/errors, latest-request wins.
form.addEventListener("submit", async event => {
  event.preventDefault();
  active?.abort();
  const id = ++requestId;
  const controller = new AbortController();
  active = controller;
  results.hidden = true; // Do not display stale results beneath a failed query.
  if (input.value.trim().length < 2) {
    results.setAttribute("aria-busy", "false");
    status.textContent = "Enter a city name with at least two characters.";
    return;
  }
  results.setAttribute("aria-busy", "true");
  status.textContent = "Loading city and five-day forecast…";
  try {
    const weather = await loadWeather(input.value, mode.value, controller.signal);
    if (id !== requestId) return;
    render(weather);
    status.textContent = weather.sample ? "Sample forecast loaded. These values are not live." : "Weather loaded.";
  } catch (error) {
    if (id !== requestId) return;
    console.error("Weather search:", error);
    status.textContent = error.name === "TimeoutError"
      ? "The request timed out. Try again or use sample mode."
      : `${error.message} Try again or choose another data mode.`;
  } finally {
    if (id === requestId) results.setAttribute("aria-busy", "false");
  }
});

// Changing mode cancels any pending request and removes the old mode's results.
mode.addEventListener("change", () => {
  active?.abort();
  requestId++;
  results.hidden = true;
  results.setAttribute("aria-busy", "false");
  status.textContent = "Data mode changed. Search to load its forecast.";
});
