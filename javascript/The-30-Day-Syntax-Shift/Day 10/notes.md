# Day 10 Notes: Event Handling

## 1. Register a callback

addEventListener connects an event type with a function. Registration does not immediately run that function; the browser invokes it when the event occurs.

The page uses an external script with defer so the HTML exists before listeners are registered. Run this lesson in a browser, not directly in Node.js.

## 2. Click and double-click

Native buttons support pointer clicks and keyboard activation. Task 1 counts clicks and updates a paragraph.

The image handles dblclick to toggle its hidden property. A separate button stays available to restore the image after it disappears and gives keyboard users the same action. Its aria-expanded state stays synchronized with visibility.

A double-click normally also generates click events. Avoid attaching conflicting single-click and double-click actions to the same element without a deliberate interaction design.

## 3. Mouse events and focus

mouseover runs when the pointer enters the element or one of its descendants; mouseout runs when it leaves. These events bubble. mouseenter/mouseleave have different bubbling behavior.

The example target contains plain text, keeping the exercise simple. Its background also responds to focus/blur. Separate hover and focus flags keep the active background while either condition remains, then remove the inline override when both are false.

Color is accompanied by a text description of the pointer and focus states.

## 4. keydown, keyup, and input

| Event | Use in this lesson |
| --- | --- |
| keydown | Read and log event.key |
| keyup | Display the field's latest value |
| input | Keep the display current after paste or other input changes |

keydown generally occurs before a character is inserted. Reading the value only there can show the previous value. Holding a key may repeat keydown events.

event.key describes the interpreted key, such as A, Enter, or Backspace. event.code instead describes a physical-key position; it is not needed here.

Not every value change is caused by a normal key press. The extra input listener complements the required keyup example.

## 5. Handle form submission

Listen for submit on the form rather than only click on its submit button. This also handles keyboard submission.

Call event.preventDefault() to stop the form's normal navigation. Then new FormData(form) reads successful named controls. This form's name attribute is learnerName.

The required attribute rejects an empty field through browser validation. The handler additionally trims text and rejects whitespace-only names. It logs a small practice data object and displays it using textContent. No request is sent and no storage is written.

Use fictional practice text because this exercise deliberately logs form data to the console.

## 6. Change events

The select's change listener reads event.currentTarget.value. Option values are machine-friendly identifiers such as delegation; displayed labels can be longer.

Selecting the placeholder returns an empty string, which the page displays as (none).

## 7. target versus currentTarget

event.target is where the event originated. event.currentTarget is the element whose listener is currently executing.

When a nested span inside a list button is clicked, target may be that span, while currentTarget is the parent ul where the delegated listener lives.

## 8. Delegation and bubbling

The list uses one click listener on its parent ul. Click events bubble from children to ancestors, allowing that listener to handle both initial and dynamically added items.

The handler checks that target is an Element, uses closest("li") to locate the containing item, then checks item.parentElement === list. Clicking whitespace outside an item is ignored.

Task 10 creates an li, button, and span with DOM methods and appends them after the listener was registered. No listener is added to the new child. Native child buttons also make the delegated action keyboard accessible.

preventDefault stops a default browser action; it does not stop propagation. stopPropagation stops an event from continuing along its propagation path; it is unnecessary here and could prevent the parent handler from receiving an event.

## 9. Reset and inspect

Reload to reset counters, image state, form output, and dynamic items. Use the Elements inspector for the DOM and the Console for key/form/list logs. The status region reports button actions without taking keyboard focus.

All five feature requests are implemented in the numbered groups inside solutions.js.

## Common mistakes

- Calling a function while registering instead of passing a callback.
- Listening only for a submit-button click and missing Enter submission.
- Reading typed text on keydown alone.
- Hiding the only control that could restore an image.
- Confusing target with currentTarget.
- Adding separate listeners unnecessarily to every new list item.
- Calling stopPropagation and breaking delegation.
- Assuming preventDefault also stops bubbling.

## Quick review

1. Why does submit belong on the form?
2. What does preventDefault change?
3. How can keyboard users restore the image?
4. Why does the keyboard example also listen for input?
5. Which element is currentTarget in the delegated listener?
6. Why does a newly added item work without its own listener?
7. How do preventDefault and stopPropagation differ?

Try every interaction, inspect its DOM changes, and compare the console logs.
