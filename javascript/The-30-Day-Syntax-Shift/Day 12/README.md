# Day 12: Error Handling

**Status:** Solutions and learning notes added.

## Goal

Handle synchronous, validation, promise, and network errors. HTTP error statuses require an explicit `response.ok` check.

## Environment

Node.js 22 or newer with built-in fetch and Response. No packages or internet connection are required.

## Tasks / Activities

1. Throw an intentional error and catch it.
2. Throw and handle an error when dividing by zero.
3. Log execution through `try`, `catch`, and `finally`.
4. Extend `Error` with a custom error class; throw and catch it.
5. Validate nonempty user input and throw a custom validation error.
6. Handle a randomly resolving or rejecting promise with `.catch()`; also provide deterministic success/failure cases.
7. Handle the same promise using async/await and `try/catch`.
8. Fetch from an invalid URL and handle failure with `.catch()`.
9. Handle the invalid fetch using async/await and `try/catch`.

## Feature Requests

- [x] Try/catch/finally script.
- [x] Custom error script.
- [x] Promise error handling script.
- [x] Fetch error handling script.

## Check Your Work

Trigger each error path deliberately and confirm cleanup and the rest of the demo still run.

## Solution Files

- [solutions.js](solutions.js): runs all nine numbered tasks.
- [try-catch-finally.js](try-catch-finally.js): intentional errors, guarded division, and cleanup traces.
- [custom-errors.js](custom-errors.js): ValidationError and nonblank-name validation.
- [promise-errors.js](promise-errors.js): catch and async/await with deterministic and random modes.
- [fetch-errors.js](fetch-errors.js): invalid URL handling plus explicit HTTP/JSON response fixtures.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 12/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 12/try-catch-finally.js"
node "javascript/The-30-Day-Syntax-Shift/Day 12/custom-errors.js"
node "javascript/The-30-Day-Syntax-Shift/Day 12/promise-errors.js"
node "javascript/The-30-Day-Syntax-Shift/Day 12/fetch-errors.js"
```

Expected highlights:

- The intentional Error is caught; valid division returns 5 and zero division throws a caught RangeError.
- Both flow traces end with finally: cleanup.
- The custom error is named ValidationError and is also an Error.
- A padded practice name is trimmed; blank/whitespace/nonstring names are rejected.
- Both promise styles demonstrate deterministic success and failure. Random-mode output can vary on each call.
- The malformed URL produces a caught TypeError in both fetch styles.
- Explicit Response fixtures produce caught HTTP 404 and JSON SyntaxError results.
- All nine task demonstrations finish, with no unhandled expected rejection.

The malformed URL does not make an external request. The HTTP and parsing fixtures are injected responses, clearly separate from live network calls.
Unexpected entry-point failures set a nonzero exit code.

[Back to the 30-day roadmap](../README.md)
