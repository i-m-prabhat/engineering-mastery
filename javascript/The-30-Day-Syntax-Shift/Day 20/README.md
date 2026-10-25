# Day 20: LocalStorage and SessionStorage

**Status:** Solutions and learning notes added.

## Goal

Serialize values and compare persistence across reloads and tab sessions. Use a dedicated practice origin because `clear()` removes all storage for that origin.

## Environment

A browser with developer tools and Node.js 22 or newer for the supplied dedicated static server. No packages are required.

## Tasks / Activities

1. Save and retrieve a string in `localStorage`.
2. Serialize an object to JSON, save it locally, retrieve it, and parse it.
3. Save name/email form input in local storage and restore it on page load.
4. Remove a local storage item; log before and after.
5. Save and retrieve a string in `sessionStorage`.
6. Save, retrieve, and parse an object in session storage.
7. Save form input in session storage and restore it on page load.
8. Remove a session storage item; log before and after.
9. Write a key/value to both stores, then retrieve and compare.
10. In an isolated practice origin, clear both stores and verify they are empty.

## Feature Requests

- [x] Local storage form demo.
- [x] Session storage form demo.
- [x] Storage comparison script.
- [x] Clear storage demo.

## Check Your Work

Compare reload behavior and a fresh tab session; verify JSON round trips and removal of missing keys.

## Solution Files

- [index.html](index.html): controls and forms for all ten tasks.
- [solutions.js](solutions.js): local/session storage, JSON, restore, removal, comparison, and clearing.
- [styles.css](styles.css): responsive layout and keyboard focus.
- [server.cjs](server.cjs): dependency-free static server on a dedicated practice origin.
- [notes.md](notes.md): persistence rules, error handling, mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer and a browser. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 20/server.cjs"
```

Open http://127.0.0.1:8120. Keep this exact host and port for the exercise.
Use fictional names and emails such as learner@example.test. Ctrl+C stops the server.

Try each task, save both profiles, then reload and open a new independent tab at the same URL.
Inspect developer tools under Application → Storage and the Console.

Expected highlights:

- String save buttons write and retrieve Hello from localStorage/sessionStorage.
- Object save buttons round-trip { topic: Browser storage, day: 20 } through JSON.
- Each profile restores its name/email after reload in the same tab.
- Removing a string logs its previous value and then null; other keys remain.
- Comparison writes identical strings to both storage areas.
- A fresh independent tab shares local data but starts with its own session data.
- Clear both stores shows entry counts 0 and 0 and resets the current forms.

Clear removes all entries for this dedicated origin, including unrelated keys if you add them.
Other tabs have separate session areas, and their rendered text is not automatically refreshed.
Storage permission/quota and malformed-data errors are caught and reported.

[Back to the 30-day roadmap](../README.md)
