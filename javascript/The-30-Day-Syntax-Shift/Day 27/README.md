# Day 27: Project 4 - Task Manager

**Status:** Task manager and learning notes added.

## Goal

Combine DOM events, arrays, objects, and storage in a complete CRUD practice project.

## Environment

Node.js 22 or newer for the static server and a modern browser with local storage. No packages or internet connection are required.

## Tasks / Activities

1. Plan an HTML task form and task list with title, optional description, and status.
2. Add tasks with stable IDs; reject blank titles.
3. Edit and delete tasks without changing unrelated entries.
4. Toggle completion and filter all, active, and completed tasks.
5. Save tasks in local storage and restore them on reload.
6. Display empty states and remaining-task counts; support keyboard form submission.

## Feature Requests

- [x] Task creation and editing.
- [x] Completion filters and deletion.
- [x] Persistent task list.
- [x] Accessible controls and responsive layout.

## Check Your Work

Create, edit, complete, filter, and delete tasks; reload to confirm persistence. Include an empty list and malformed saved data.

## Solution Files

- [index.html](index.html): task form, filters, list, counts, and recovery action.
- [task-model.mjs](task-model.mjs): validated immutable task operations and versioned JSON.
- [solutions.mjs](solutions.mjs): editing state, persistence, rendering, and keyboard interactions.
- [styles.css](styles.css): responsive layout and visible focus states.
- [server.cjs](server.cjs): dependency-free local static server.
- [notes.md](notes.md): architecture, persistence, errors, and review questions.

## Run the App

Use Node.js 22 or newer and a modern browser. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 27/server.cjs"
```

Open http://127.0.0.1:8127. Ctrl+C stops the server.

Try these flows:

1. Add two tasks, including an optional description; try a blank title.
2. Edit one task and verify the other task is unchanged.
3. Complete a task and switch among All, Active, and Completed.
4. Reload and confirm the records and completion state remain.
5. Delete a task, then inspect remaining counts and empty states.
6. Cancel an edit and confirm the saved record remains unchanged.

Expected highlights:

- Each record keeps a stable ID across editing and filtering.
- Completion state survives editing and reload.
- Counts show global active/total tasks.
- Invalid startup data is preserved and editing is blocked until explicit reset.
- Reset removes only the task manager's key.
- Failed storage writes do not silently commit an unsaved change.

Storage key: syntax-shift-day27:tasks. It holds { version: 1, tasks: [...] }.
The app does not synchronize or merge concurrent edits across tabs.
No additional .gitignore is needed because this day generates no dependencies or build files.

[Back to the 30-day roadmap](../README.md)
