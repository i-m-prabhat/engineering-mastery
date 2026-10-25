# Day 10: Event Handling

**Status:** Solutions and learning notes added.

## Goal

Handle mouse, keyboard, form, and delegated events.

## Environment

A browser with developer tools. Open index.html directly; no packages are required.

## Tasks / Activities

1. Change paragraph text on a button click.
2. Toggle an image's visibility on double-click; keep an accessible way to restore it.
3. Change a background on mouseover.
4. Reset the background on mouseout.
5. Log the pressed key on input `keydown`.
6. Display the input value in a paragraph on `keyup`.
7. Prevent a form's default submission and log its data.
8. Display the selected dropdown value on `change`.
9. Delegate list clicks to a parent and log the clicked item's text.
10. Use parent event delegation for dynamically added children.

## Feature Requests

- [x] Click event script.
- [x] Mouse events script.
- [x] Keyboard events script.
- [x] Form events script.
- [x] Dynamic event delegation script.

## Check Your Work

Exercise every event, including a list item added after the parent's listener was registered.

## Solution Files

- [index.html](index.html): interactive targets for all ten tasks.
- [solutions.js](solutions.js): commented solutions grouped into the five requested features.
- [styles.css](styles.css): responsive layout, interaction states, and keyboard focus.
- [landscape.svg](landscape.svg): local image for the double-click exercise.
- [notes.md](notes.md): event explanations, common mistakes, and review questions.

## Run the Solutions

Open index.html in a browser. No packages, build step, or network connection are required.
Do not run solutions.js directly in Node.js; it requires the browser DOM.

Open developer tools and keep the Console visible. Reload the page to reset.

Expected highlights:

- The click button increments the paragraph's update count.
- Double-clicking the image hides it; Show image restores it. The toggle button also works with the keyboard.
- The mouse target changes background on hover or focus and resets once both leave.
- Typing logs each keydown and updates the paragraph on keyup; input also supports paste.
- Submitting a valid practice name logs form data and updates the page without navigation.
- Empty/whitespace-only practice names are rejected.
- Changing the dropdown displays the option value.
- Clicking an initial list item displays and logs its text.
- A dynamically added item's nested span is handled by the same parent listener.

## Feature Coverage

solutions.js groups click events (1–2), mouse events (3–4), keyboard events (5–6),
form/change events (7–8), and event delegation (9–10). No data is sent or saved.

[Back to the 30-day roadmap](../README.md)
