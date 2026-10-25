# Day 09 Notes: DOM Manipulation

## 1. The DOM is a tree

The browser parses HTML into a Document Object Model: objects representing elements, text, and other nodes. JavaScript can read and change that tree. DOM changes update the current page, not the saved HTML file. Reloading restores this lesson's initial markup.

This code runs in a browser, where document exists. Running solutions.js directly with Node.js fails because Node does not provide a browser DOM.

## 2. Wait for the HTML

The page loads solutions.js with the defer attribute. For this external classic script, defer runs it after HTML parsing and before DOMContentLoaded. The elements therefore exist before the script queries them.

A selector that finds nothing returns null. Check optional elements before changing them. This lesson's removal handlers query again and handle the absent-element case.

## 3. Select an element

| API | Result |
| --- | --- |
| document.getElementById("intro") | The element with that ID, or null |
| document.querySelector(".color-target") | First CSS-selector match, or null |
| document.createElement("div") | A new detached element |

IDs should be unique. querySelector returns only the first match. Use querySelectorAll when a later exercise needs every matching element.

## 4. Change text and styles

Assigning textContent changes an element's text. It treats input as text rather than HTML markup. Assigning it to a container also replaces that container's existing child content.

Task 2 changes style.backgroundColor. JavaScript style property names use camelCase for names such as background-color. For reusable visual states, classList is often easier to maintain than multiple inline styles.

## 5. Create, then append

Task 3 creates a div, assigns text, adds a class, then appends it directly to document.body. A detached element is not visible until inserted. The new div appears after the footer because appendChild inserts at the end.

Task 4 follows the same steps for an li inside the existing ul. Each click creates a fresh element. Appending an already-connected node would move that node instead of copying it.

## 6. Remove the intended node

element.remove() detaches the selected element. The paragraph removal button disables itself afterward.

Task 6 uses lastElementChild instead of lastChild. HTML indentation can create text nodes, so lastChild might be whitespace rather than the last list item. After the final item is removed, the control disables itself.

The guard still handles an empty list safely. Reload to restore removed elements.

## 7. Attributes and alternative text

setAttribute changes an HTML attribute. The image demo changes src from day.svg to night.svg and updates alt to describe the new image. Both files are local, so the lesson has no external image dependency.

Keep alternative text consistent with meaningful image changes. A changed src without a matching description can give visual and screen-reader users different information.

## 8. Classes

classList.add("highlight") adds a class; classList.remove("highlight") removes it. Other classes remain intact. Adding an existing class or removing an absent class is safe.

The highlight rule belongs in styles.css. JavaScript decides when the state applies; CSS describes its appearance.

## 9. Event listeners

addEventListener registers a function for a later event. Pass a callback instead of calling it during registration.

The click listener increments a counter and updates a paragraph. Native buttons support mouse activation and keyboard activation with Enter or Space.

The border example listens for mouseover/mouseout and focus/blur. Separate flags keep the border active while either pointer hover or keyboard focus remains. Returning to the initial border removes the inline override.

mouseover can bubble from descendants, unlike mouseenter. The target here is a button containing plain text, which keeps this exercise simple.

## 10. Inspect and reset

Use the browser's Elements inspector to watch text nodes, list children, src/alt attributes, classes, and inline styles change. Use the Console to check for errors.

The status region announces completed button actions. Every example resets on reload; nothing is saved to storage or sent to a service.

## Common mistakes

- Running browser-only code directly in Node.js.
- Querying elements before the HTML exists.
- Forgetting that querySelector returns one match.
- Creating an element without inserting it.
- Removing a whitespace node instead of a list item.
- Changing an image without updating its alternative text.
- Overwriting all classes when only one class should change.
- Calling a listener immediately instead of passing a callback.
- Assuming DOM edits modify the saved HTML file.

## Quick review

1. Why does this page use defer?
2. What happens when a selector has no match?
3. Why does createElement alone not show anything?
4. How do lastChild and lastElementChild differ?
5. Why update alt when src changes?
6. What happens when you reload after deleting a paragraph?

Try all ten tasks and inspect the related DOM nodes.
