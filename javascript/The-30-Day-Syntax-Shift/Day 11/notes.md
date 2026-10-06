# Day 11 Notes: Promises and Async/Await

## 1. A promise represents a future result

A promise begins pending and settles once: fulfilled with a value or rejected with a reason. Resolving with another promise adopts its eventual outcome.

The Promise executor runs immediately. A timer schedules later work; it does not block the main thread. A two-second timer is a minimum scheduling delay, not a guarantee of exact timing.

The helper delay resolves with a value. rejectAfter rejects with an Error. The first demo starts both two-second operations together and attaches rejection handling immediately.

## 2. Handle fulfillment and rejection

then receives a fulfilled value; catch handles a rejection. Each returns a new promise.

A catch handler that logs and returns normally turns its resulting promise into a fulfilled promise, usually with undefined. To propagate the failure, throw the error again instead.

Attach error handling promptly. Intentionally rejected promises in this lesson are handled rather than left as unhandled rejections.

## 3. Return work from a chain

A then callback must return the next promise if the chain should wait for it:

```js
delay("User loaded")
  .then(() => delay("Posts loaded"))
  .then(message => console.log(message));
```

If you start another operation without returning it, the outer chain may continue before that operation finishes. The chain demo waits for user, posts, then comments in order.

## 4. async and await

An async function always returns a promise. Returning a normal value fulfills that promise; throwing rejects it.

await pauses that async function until the promise settles. It does not block unrelated event-loop work. A rejection at await acts like a thrown error, so wrap it in try/catch when it is expected.

```js
try {
  const result = await somePromise;
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

This excerpt belongs inside an async function. The demos use CommonJS files and call async functions instead of relying on top-level await.

## 5. Fetch has more than one failure stage

fetch returns a promise for a Response. HTTP errors such as 404 normally fulfill that promise, so check response.ok explicitly before parsing.

response.json() is asynchronous too. It can reject for malformed JSON or a body-reading failure. Network failures and timeouts can reject fetch itself.

Both fetching styles in api-fetch.js check status, parse the body, and propagate failures to the caller. The awaited parser remains within the returned async operation.

The request timeout is five seconds. AbortSignal.timeout controls a request signal; it is different from Promise.race, which does not itself abort losing operations.

## 6. Public API and offline mode

By default the API demo reads a fake post from JSONPlaceholder. It makes GET requests only and needs internet access.

The --offline option starts a temporary loopback HTTP server, fetches local JSON with the real fetch API, deliberately requests a missing route in both styles, and closes the server in finally. It does not silently replace a failed public request.

Use offline mode to repeat the core lesson without internet access. A public request may fail independently because of connectivity or service availability.

## 7. Promise.all

Pass promises that have already been started. Promise.all fulfills when all inputs fulfill, preserving the original input order even if later inputs finish first.

If any input rejects, the combined promise rejects. Other operations continue unless you separately cancel them. An empty input array fulfills with an empty array.

Awaiting each operation before passing its result to all would make that work sequential and lose the intended overlap.

## 8. Promise.race

Race adopts the first settled input: fulfillment OR rejection.

The demo first shows a fast fulfillment winning, then an early rejection winning over a slower success. The slower input is not cancelled and can still finish.

Promise.race([]) stays pending. Avoid awaiting it expecting an empty result.

## 9. Sequential versus concurrent

| Pattern | Behavior |
| --- | --- |
| await first(); await second(); | Start second after first finishes |
| Promise.all([first(), second()]) | Start both while evaluating the array; collect results |
| second started inside a returned then | Chain dependent work |
| Promise.race([first(), second()]) | Observe the first settlement |

These are concurrency patterns for asynchronous work, not a claim that ordinary JavaScript statements run on multiple CPU threads.

## 10. Error boundaries and cleanup

Each directly runnable file ends with a catch that prints unexpected failures and sets a nonzero process exit code. Expected rejection demos catch their own errors and continue.

The API server is closed in finally, including when fetching or parsing fails. Importing the demo files does not start them because execution is guarded by require.main === module.

## Common mistakes

- Forgetting to return a promise from then.
- Assuming async functions return plain values.
- Forgetting to await response.json().
- Expecting fetch to reject automatically for every HTTP error.
- Leaving expected rejections unhandled.
- Assuming Promise.all returns completion order.
- Thinking race means first fulfillment only.
- Expecting all or race to cancel other work.

## Quick review

1. Does the Promise executor run immediately?
2. Why must a chain return its next promise?
3. What does an async function return?
4. Why check response.ok?
5. What happens if JSON parsing fails?
6. Which order does Promise.all preserve?
7. Can rejection win Promise.race?
8. Does a losing race operation stop automatically?

Run both success and failure demonstrations and explain their output order.
