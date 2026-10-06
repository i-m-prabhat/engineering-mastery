# Day 11: Promises and Async/Await

**Status:** Solutions and learning notes added.

## Goal

Handle async results sequentially and concurrently. Check `response.ok` before parsing HTTP responses.

## Environment

Node.js 22 or newer with built-in fetch. Public API mode requires internet; --offline uses a temporary local HTTP server. No packages are required.

## Tasks / Activities

1. Resolve a promise with a message after two seconds and log it.
2. Reject a promise after two seconds and handle it with `.catch()`.
3. Chain simulated server requests and log results in order.
4. Await a resolved promise inside an async function.
5. Handle a rejected awaited promise with `try/catch`.
6. Fetch public API data using promise handlers and log the parsed response.
7. Repeat the fetch using async/await.
8. Use `Promise.all` to collect multiple results.
9. Use `Promise.race` and observe the first settled promise, including a rejection case.

## Feature Requests

- [x] Promise creation and rejection script.
- [x] Sequential promise chain script.
- [x] Async/await script with error handling.
- [x] API fetch script in both styles.
- [x] Concurrent promises script.

## Check Your Work

Exercise successful and rejected promises, an HTTP failure, and differing timer delays. Explain that race settles on rejection too.

## Solution Files

- [solutions.js](solutions.js): runs all nine tasks in order.
- [promise-creation.js](promise-creation.js): two-second fulfillment and handled rejection.
- [promise-chain.js](promise-chain.js): ordered simulated requests.
- [async-await.js](async-await.js): awaited success and caught failure.
- [api-fetch.js](api-fetch.js): fetch in both styles, status checks, timeout, and offline HTTP fixtures.
- [concurrent-promises.js](concurrent-promises.js): all/race fulfillment and rejection.
- [async-helpers.js](async-helpers.js): shared timer-backed promise helpers.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages are required.
From the repository root, run all tasks with internet access:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 11/solutions.js"
```

For a fully local run, including real HTTP fetch and 404 handling:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 11/solutions.js" --offline
```

Run individual features:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 11/promise-creation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 11/promise-chain.js"
node "javascript/The-30-Day-Syntax-Shift/Day 11/async-await.js"
node "javascript/The-30-Day-Syntax-Shift/Day 11/api-fetch.js"
node "javascript/The-30-Day-Syntax-Shift/Day 11/api-fetch.js" --offline
node "javascript/The-30-Day-Syntax-Shift/Day 11/concurrent-promises.js"
```

Expected highlights:

- Two timers start together, resolving/rejecting after approximately two seconds.
- The chain logs User loaded, Posts loaded, then Comments loaded.
- The awaited rejection is caught and execution continues.
- Both fetch styles parse the same post. Public mode uses JSONPlaceholder; offline mode returns Local practice post.
- Offline mode logs HTTP 404 for each fetching style's missing-route request.
- Promise.all returns slow first input before fast second input in its result array, preserving input order.
- Promise.race produces fast result for fulfillment and catches early failure for rejection.
- The all rejection demo catches one input failed.
- The combined runner reaches its final completion message when every demo succeeds.

Requests have a five-second timeout. Unexpected failures set a nonzero exit code.
The offline server closes after the demo; losing concurrent operations are not cancelled.

## API Reference

The public GET endpoint is documented in the [JSONPlaceholder guide](https://jsonplaceholder.typicode.com/).

[Back to the 30-day roadmap](../README.md)
