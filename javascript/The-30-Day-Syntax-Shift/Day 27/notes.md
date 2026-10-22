# Day 27 Notes: Task Manager

## 1. Separate state from presentation

task-model.mjs contains data validation and immutable operations. solutions.mjs owns the current task array, editing state, selected filter, persistence, and DOM rendering.

The model can be checked without a browser. The UI derives the visible list from state rather than treating DOM text as the database.

## 2. Stable IDs

A new task receives crypto.randomUUID(). Edit, toggle, and delete locate that ID, not the array index or title.

Titles can repeat, and filtering changes visible positions. Stable IDs keep actions attached to the intended record.

The local server runs on loopback, where modern browsers provide the secure-context crypto API.

## 3. Immutable operations

Adding returns a new array. Editing/toggling replaces only the matching record. Deletion filters out the matching ID.

Editing changes title and description while preserving completion and ID. Cancelling an edit changes only form state; no task data is saved.

Title is trimmed and must contain 1–100 characters. Description is optional, trimmed, and bounded to 600 characters. Loaded records also require valid IDs and boolean completion status.

## 4. Filters and counts

All shows every task; Active selects incomplete tasks; Completed selects complete tasks.

The remaining count is global, not just the visible filter count. An empty list and an empty filtered result have different messages.

Toggling completion may remove a task from the current filter. Focus moves to the filter control if the checkbox no longer exists.

## 5. Persist a versioned document

One prefixed localStorage key contains JSON with version:1 and a tasks array. Parsing checks the version, record shapes, and ID uniqueness.

Reload restores the saved array. Local storage belongs to the browser and origin, so changing host/port or browser changes the storage area.

There is no server database or account synchronization. Another tab's edits are not merged automatically; this simple application uses last successful write behavior.

## 6. Save failures

The UI saves the proposed next state before committing it to memory. A quota or permission failure leaves the earlier list intact and displays Change not saved.

A failed checkbox change rerenders the earlier state. Unsaved form edits remain available for retry.

This is local single-document persistence, not a multi-tab transaction system.

## 7. Invalid saved data

Malformed JSON, unsupported versions, invalid records, or duplicate IDs block editing and expose an explicit reset action.

The existing saved string is preserved until reset is chosen. Reset removes only this task manager's key, not all local storage.

Storage permissions can also cause startup failure. If reset fails because storage is blocked, the page reports that failure instead of claiming the data was repaired.

## 8. Accessible DOM interactions

Native forms support keyboard submission. Checkboxes have descriptive names, and edit/delete buttons identify their task. The status region reports results.

All task text uses textContent. HTML-like titles remain plain text. Description formatting preserves line breaks, and long strings wrap.

Responsive layout stacks the editor and list on smaller screens. Reduced-motion preferences disable transitions.

## 9. Costs

Rendering and filtering are O(n); lookup/update/delete are O(n) in the array. JSON serialization also rewrites the O(n) document per saved change.

These tradeoffs are reasonable for a small practice list. Large datasets would need a different storage and rendering strategy.

## Quick review

1. Why should a task ID survive editing and filtering?
2. What stays unchanged when a completed task is edited?
3. How do list-empty and filter-empty states differ?
4. Why save before changing the in-memory array?
5. Why preserve invalid saved data until explicit reset?
6. Does reset remove other applications' local data?
7. What happens if two tabs edit independently?

Create, edit, complete, filter, reload, and delete a small practice list.
