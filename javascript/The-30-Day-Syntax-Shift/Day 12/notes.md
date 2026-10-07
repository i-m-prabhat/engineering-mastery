# Day 12 Notes: Error Handling

## 1. Throw an Error

throw interrupts the current path and looks for a matching catch. Use Error objects so failures carry a message, a name, and usually a stack trace.

```js
try {
  throw new Error("Practice failure");
} catch (error) {
  console.log(error.message);
}
```

Once a statement throws, later statements in that try block are skipped. After the catch finishes normally, execution continues after the try/catch.

## 2. Define the function's error policy

JavaScript Number division by zero normally produces Infinity or NaN. The divide function deliberately throws RangeError for a zero divisor because that is this exercise's contract.

It first rejects nonfinite or nonnumber operands with TypeError. Valid operands can still overflow, so finite-input checks do not guarantee every result is finite.

Use specific errors to make invalid inputs easier to diagnose.

## 3. finally is for cleanup

The flow demo records two paths:

- Success: try, success, finally: cleanup.
- Failure: try, catch: Flow failed, finally: cleanup.

finally runs as control leaves the try/catch in normal JavaScript execution, including when there is a return or a throw. It cannot guarantee cleanup after process termination or a machine crash.

Avoid returning or throwing from finally unless intended: doing so can replace an earlier result or hide an earlier error. The demo only records cleanup.

## 4. Custom error classes

ValidationError extends Error, calls super(message), and sets its name.

An instance is both a ValidationError and an Error. instanceof can distinguish expected validation failures from unexpected programming bugs. The custom demo rethrows errors that are not ValidationError.

validateName accepts a nonblank string and returns its trimmed form. Empty strings, whitespace-only strings, and other types fail. It does not silently convert numbers into names.

## 5. catch does not automatically preserve rejection

A promise's catch handler returns a new promise. If it logs an error and finishes normally, that new promise fulfills with the handler's return value, commonly undefined.

Throw the error again when the caller should still see a failure. Logging and swallowing every unexpected error can make broken operations look successful.

The demonstrations intentionally consume expected failures so later examples can run.

## 6. Await async work inside try

```js
try {
  const result = await maybeResolve("failure");
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

This belongs inside an async function. Without await, the function call returns a promise immediately and a later rejection is not caught by that surrounding synchronous try/catch.

You can instead attach catch to the returned promise, as Task 6 does.

## 7. Random behavior needs deterministic checks

maybeResolve supports success, failure, and random modes. Each random call makes a separate decision, so the catch-style and await-style random demonstrations may produce different outcomes.

Do not depend on randomness to demonstrate failure reliably. Deterministic success/failure calls guarantee both branches are exercised. Invalid mode names return a rejected promise.

The timer schedules an asynchronous settlement; it does not block the event loop.

## 8. Fetch failures happen at different stages

| Stage | Example | How it is handled |
| --- | --- | --- |
| Request setup | Malformed URL | Fetch promise rejects |
| Network/timeout | Connection failure or abort | Fetch promise rejects |
| HTTP status | 404 response | Check response.ok and throw |
| Body parsing | Malformed JSON | Await/return response.json and catch its rejection |

The malformed URL in this lesson is rejected before an external request is made. Its exact error message may vary, so the demo prints the error name.

The 404 and malformed-JSON examples inject explicit Response fixtures. They are simulated responses, not requests to fixture.invalid. All demonstrations run without internet access.

## 9. Propagate parsing errors

Both fetch helpers return or await response.json(). That keeps parsing failures connected to the promise returned to the caller.

The helpers use a three-second timeout signal for actual requests. The injected fixtures are useful for repeatable checks; they do not simulate every timing behavior of real networks.

## 10. Top-level error boundaries

Each asynchronous entry point ends with catch, prints unexpected failures, and sets process.exitCode to 1. Expected demonstrations are handled within their own sections.

Importing the modules does not run their demos because direct execution is guarded by require.main === module. This also makes the functions available for focused checks.

## Common mistakes

- Throwing strings instead of Error objects.
- Assuming Number division by zero throws automatically.
- Placing a promise call in try without awaiting or handling it.
- Catching every error and hiding unexpected failures.
- Returning from finally and overriding an earlier result.
- Expecting fetch to reject automatically for HTTP 404.
- Forgetting to return or await JSON parsing.
- Relying only on random failure to verify error handling.

## Quick review

1. Which statements run after a throw inside try?
2. Why does divide explicitly check a zero denominator?
3. Does finally run on both successful and failing paths?
4. Why is ValidationError also an Error?
5. What happens when a catch handler only logs and returns normally?
6. Why is await needed in the rejection-handling try block?
7. How do HTTP errors differ from request failures?
8. Why provide deterministic modes alongside random behavior?

Run every feature and confirm the final completion messages still appear.
