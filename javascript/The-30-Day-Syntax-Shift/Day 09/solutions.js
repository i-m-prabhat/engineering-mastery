"use strict";

// Loaded with defer: the HTML has been parsed before these queries run.
const status = document.getElementById("status");
function report(message) {
  status.textContent = message;
}

// Task 1 / feature: select by ID and update text safely.
document.getElementById("change-text").addEventListener("click", () => {
  document.getElementById("intro").textContent = "Updated with getElementById and textContent.";
  report("Task 1 complete: paragraph text updated.");
});

// Task 2: querySelector finds the first element matching this class.
document.getElementById("change-background").addEventListener("click", () => {
  document.querySelector(".color-target").style.backgroundColor = "#d9f5e6";
  report("Task 2 complete: background changed.");
});

// Task 3 / feature: append a new div directly to the body.
let createdDivs = 0;
document.getElementById("create-div").addEventListener("click", () => {
  const div = document.createElement("div");
  createdDivs++;
  div.textContent = `Created div ${createdDivs}: appended directly to the body.`;
  div.classList.add("created-note");
  document.body.appendChild(div);
  report(`Task 3 complete: created div ${createdDivs} after the footer.`);
});

// Task 4: append a new child to an existing list.
let addedItems = 0;
document.getElementById("add-item").addEventListener("click", () => {
  const item = document.createElement("li");
  addedItems++;
  item.textContent = `DOM practice ${addedItems}`;
  document.getElementById("reading-list").appendChild(item);
  report("Task 4 complete: list item appended.");
});

// Task 5 / feature: query again so repeated clicks are safe.
const removeButton = document.getElementById("remove-element");
removeButton.addEventListener("click", () => {
  const element = document.getElementById("removable");
  if (!element) return;
  element.remove();
  removeButton.disabled = true;
  report("Task 5 complete: paragraph removed. Reload to restore it.");
});

// Task 6: use lastElementChild to avoid removing indentation text nodes.
const removeLastButton = document.getElementById("remove-last");
removeLastButton.addEventListener("click", () => {
  const list = document.getElementById("removal-list");
  const child = list.lastElementChild;
  if (!child) return;
  child.remove();
  removeLastButton.disabled = list.lastElementChild === null;
  report(`Task 6 complete: ${list.children.length} list items remain.`);
});

// Task 7 / feature: update src and its matching accessible description.
document.getElementById("change-image").addEventListener("click", () => {
  const image = document.getElementById("scene");
  image.setAttribute("src", "night.svg");
  image.setAttribute("alt", "Moon above a nighttime landscape");
  report("Task 7 complete: image source and alternative text updated.");
});

// Task 8: classList changes only the specified class.
const classTarget = document.getElementById("class-target");
document.getElementById("add-class").addEventListener("click", () => {
  classTarget.classList.add("highlight");
  report("Task 8: highlight class added.");
});
document.getElementById("remove-class").addEventListener("click", () => {
  classTarget.classList.remove("highlight");
  report("Task 8: highlight class removed.");
});

// Task 9 / feature: respond to a button click.
let clicks = 0;
document.getElementById("event-button").addEventListener("click", () => {
  clicks++;
  document.getElementById("event-text").textContent = `Button clicked ${clicks} time(s).`;
  report("Task 9 complete: click listener updated the paragraph.");
});

// Task 10: mouseover changes the border; focus also supports keyboard users.
// Keep it active while either hover or focus remains.
const hoverTarget = document.getElementById("hover-target");
let hovered = false;
let focused = false;
function updateBorder() {
  hoverTarget.style.borderColor = hovered || focused ? "#a33b00" : "";
}
hoverTarget.addEventListener("mouseover", () => { hovered = true; updateBorder(); });
hoverTarget.addEventListener("mouseout", () => { hovered = false; updateBorder(); });
hoverTarget.addEventListener("focus", () => { focused = true; updateBorder(); });
hoverTarget.addEventListener("blur", () => { focused = false; updateBorder(); });
