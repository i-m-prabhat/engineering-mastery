"use strict";

// defer ensures the elements exist before this script registers listeners.
const status = document.getElementById("status");
function report(message) {
  status.textContent = message;
}

// Task 1 / click feature.
let clickCount = 0;
document.getElementById("click-button").addEventListener("click", () => {
  clickCount++;
  document.getElementById("click-text").textContent = `Paragraph updated ${clickCount} time(s).`;
  report("Task 1: click handled.");
});

// Task 2: the separate native button remains available when the image is hidden.
const image = document.getElementById("demo-image");
const imageToggle = document.getElementById("toggle-image");
function toggleImage() {
  image.hidden = !image.hidden;
  imageToggle.textContent = image.hidden ? "Show image" : "Hide image";
  imageToggle.setAttribute("aria-expanded", String(!image.hidden));
  report(image.hidden ? "Task 2: image hidden." : "Task 2: image restored.");
}
image.addEventListener("dblclick", toggleImage);
imageToggle.addEventListener("click", toggleImage);

// Tasks 3–4 / mouse feature: background resets on mouseout.
// Also support keyboard focus, keeping active state while either remains.
const mouseTarget = document.getElementById("mouse-target");
let hovered = false;
let focused = false;
function renderMouseState() {
  mouseTarget.style.backgroundColor = hovered || focused ? "#8b3c00" : "";
  document.getElementById("mouse-state").textContent =
    `Pointer ${hovered ? "inside" : "outside"}; keyboard focus ${focused ? "inside" : "outside"}.`;
}
mouseTarget.addEventListener("mouseover", () => { hovered = true; renderMouseState(); });
mouseTarget.addEventListener("mouseout", () => { hovered = false; renderMouseState(); });
mouseTarget.addEventListener("focus", () => { focused = true; renderMouseState(); });
mouseTarget.addEventListener("blur", () => { focused = false; renderMouseState(); });

// Tasks 5–6 / keyboard feature.
const keyboardInput = document.getElementById("keyboard-input");
keyboardInput.addEventListener("keydown", event => {
  console.log("Key pressed:", event.key);
  document.getElementById("key-output").textContent = `Last key: ${event.key}`;
});
function renderInputValue() {
  document.getElementById("value-output").textContent =
    `Current value: ${keyboardInput.value || "(empty)"}`;
}
keyboardInput.addEventListener("keyup", renderInputValue);
// Pasting and other input changes do not always produce a useful keyup.
keyboardInput.addEventListener("input", renderInputValue);

// Task 7 / form feature: prevent navigation before reading form data.
const form = document.getElementById("practice-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const learnerName = String(data.get("learnerName") || "").trim();
  if (!learnerName) {
    document.getElementById("form-output").textContent = "Enter a nonblank practice name.";
    return;
  }
  console.log("Submitted form data:", { learnerName });
  document.getElementById("form-output").textContent = `Submitted practice name: ${learnerName}`;
  report("Task 7: form handled without navigation.");
});

// Task 8: change exposes the selected option's value.
document.getElementById("topic-select").addEventListener("change", event => {
  document.getElementById("selection-output").textContent =
    `Selected value: ${event.currentTarget.value || "(none)"}`;
});

// Tasks 9–10 / delegation feature: register once on the parent list.
const list = document.getElementById("topic-list");
list.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;
  const item = event.target.closest("li");
  if (!item || item.parentElement !== list) return;
  const text = item.textContent.trim();
  console.log("Clicked list item:", text);
  document.getElementById("delegation-output").textContent = `Selected item: ${text}`;
  report("Tasks 9–10: the parent list handled the click.");
});

let dynamicCount = 0;
document.getElementById("add-topic").addEventListener("click", () => {
  dynamicCount++;
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  const label = document.createElement("span");
  label.textContent = `Dynamic topic ${dynamicCount}`;
  button.appendChild(label);
  item.appendChild(button);
  list.appendChild(item);
  report(`Task 10: added Dynamic topic ${dynamicCount}; no new list listener needed.`);
});
