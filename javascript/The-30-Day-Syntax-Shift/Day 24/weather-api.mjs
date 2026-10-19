// Task 3/7: fetch, check status, parse JSON, and validate before rendering.
export async function fetchJson(url, signal) {
  const response = await fetch(url, {
    signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(10000)]) : AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error(`Weather request failed (HTTP ${response.status}).`);
  const data = await response.json();
  if (data.error) throw new Error(data.reason || "The weather service returned an error.");
  return data;
}

export function condition(code) {
  if (code === 0) return { label: "Clear sky", icon: "☀️" };
  if ([1, 2].includes(code)) return { label: "Partly cloudy", icon: "🌤️" };
  if (code === 3) return { label: "Overcast", icon: "☁️" };
  if ([45, 48].includes(code)) return { label: "Fog", icon: "🌫️" };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "Drizzle", icon: "🌦️" };
  if ([61, 63, 65, 66, 67].includes(code)) return { label: "Rain", icon: "🌧️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "Snow", icon: "🌨️" };
  if ([80, 81, 82].includes(code)) return { label: "Rain showers", icon: "🌦️" };
  if ([95, 96, 99].includes(code)) return { label: "Thunderstorm", icon: "⛈️" };
  return { label: "Unknown condition", icon: "🌡️" };
}

export function normalizeWeather(location, data, sample = false) {
  const current = data.current;
  const daily = data.daily;
  if (!current || !Number.isFinite(current.temperature_2m) ||
      !Number.isInteger(current.weather_code) || typeof current.time !== "string" ||
      typeof data.timezone !== "string" || !daily ||
      !["time", "weather_code", "temperature_2m_max", "temperature_2m_min"].every(key =>
        Array.isArray(daily[key]) && daily[key].length >= 5)) {
    throw new Error("The service returned incomplete weather data.");
  }
  const forecast = daily.time.slice(0, 5).map((date, index) => {
    const high = daily.temperature_2m_max[index];
    const low = daily.temperature_2m_min[index];
    const code = daily.weather_code[index];
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/u.test(date) ||
        !Number.isFinite(high) || !Number.isFinite(low) || !Number.isInteger(code)) {
      throw new Error("The service returned incomplete forecast data.");
    }
    return { date, high, low, ...condition(code) };
  });
  return {
    city: [location.name, location.admin1, location.country].filter(Boolean).join(", "),
    temperature: current.temperature_2m,
    time: current.time,
    timezone: data.timezone,
    sample,
    ...condition(current.weather_code),
    forecast,
  };
}

export async function loadWeather(query, mode = "live", signal) {
  const city = query.trim();
  if (city.length < 2) throw new Error("Enter a city name with at least two characters.");
  if (!["live", "sample", "failure"].includes(mode)) throw new Error("Unknown data mode.");
  if (mode === "failure") {
    await fetchJson("/missing-weather-demo.json", signal);
    throw new Error("Expected a failed request.");
  }
  if (mode === "sample") {
    const fixtures = await fetchJson("./demo-weather.json", signal);
    const entry = fixtures.cities.find(item => item.location.name.toLowerCase() === city.toLowerCase());
    if (!entry) throw new Error("Sample city not found. Try Delhi, London, or Berlin.");
    return normalizeWeather(entry.location, entry.weather, true);
  }
  const geocoding = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geocoding.search = new URLSearchParams({ name: city, count: "1", language: "en", format: "json" });
  const places = await fetchJson(geocoding, signal);
  const location = places.results?.[0];
  if (!location) throw new Error("City not found. Try a city and country, such as Paris, France.");
  if (!Number.isFinite(location.latitude) || !Number.isFinite(location.longitude)) {
    throw new Error("The location service returned invalid coordinates.");
  }
  const forecast = new URL("https://api.open-meteo.com/v1/forecast");
  forecast.search = new URLSearchParams({
    latitude: String(location.latitude), longitude: String(location.longitude),
    current: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    temperature_unit: "celsius", timezone: "auto", forecast_days: "5",
  });
  return normalizeWeather(location, await fetchJson(forecast, signal));
}
