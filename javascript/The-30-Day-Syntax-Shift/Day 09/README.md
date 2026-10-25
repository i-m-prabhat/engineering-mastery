# Day 09: DOM Manipulation

**Status:** Solutions and learning notes added.

## Goal

Select, create, remove, and update DOM elements.

## Environment

A browser with developer tools. Open index.html directly; no packages are required.

## Tasks / Activities

1. Select an element by ID and change its text.
2. Select an element by class and change its background.
3. Create a `div` with text and append it to the body.
4. Append a new `li` to an existing `ul`.
5. Remove a selected element.
6. Remove a parent's last child.
7. Change an attribute such as an image's `src`.
8. Add and remove a CSS class.
9. Handle a button click to change paragraph text.
10. Handle mouseover to change an element's border color.

## Feature Requests

- [x] Text manipulation script.
- [x] Element creation script.
- [x] Element removal script.
- [x] Attribute modification script.
- [x] Interactive event script.

## Check Your Work

Inspect the DOM after each change and ensure removal and insertion target the intended elements.

## Solution Files

- [index.html](index.html): interactive page containing all ten task targets and controls.
- [solutions.js](solutions.js): commented solutions covering all five feature requests.
- [styles.css](styles.css): layout, highlights, and visible keyboard focus.
- [day.svg](day.svg) and [night.svg](night.svg): local images for the attribute exercise.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

Open index.html in a browser. No packages, build step, or network connection are required.
This is a browser lesson: do not run solutions.js directly with Node.js.

Try the controls in task order. Inspect the Elements panel to see the DOM changes.
Reload the page to reset all examples.

Expected highlights:

- Task 1 changes the introductory text; Task 2 changes the class-selected paragraph's background.
- Task 3 appends numbered divs directly to body, after the footer.
- Task 4 appends numbered items to the reading list.
- Task 5 removes its paragraph and disables its button.
- Task 6 removes one list element per click, then disables its button when the list is empty.
- Task 7 changes the local image to night.svg and updates its alternative text.
- Task 8 adds/removes the highlight class.
- Task 9 increments the click count displayed in its paragraph.
- Task 10 changes the border on hover or keyboard focus, restoring it when neither remains active.

## Feature Coverage

All five requested features are grouped in solutions.js beside their numbered task comments:
text updates (1), creation (3–4), removal (5–6), attributes (7), and events (9–10).

[Back to the 30-day roadmap](../README.md)
