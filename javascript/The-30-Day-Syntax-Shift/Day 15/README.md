# Day 15: Closures

**Status:** Solutions and learning notes added.

## Goal

Capture lexical scope, retain private state, and cache computations.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Return an inner function that accesses an outer variable.
2. Create a private counter with increment and get methods.
3. Create an ID generator that remembers the last generated ID.
4. Capture a username in a returned greeting function.
5. Create an array of functions in a loop; each must log its own index.
6. Use closures for an item manager with add, remove, and list methods.
7. Build a memoizing wrapper that stores earlier computation results.
8. Memoize a factorial function and demonstrate cache reuse.

## Feature Requests

- [x] Basic closure script.
- [x] Private counter script.
- [x] Unique ID generator.
- [x] Loop closure script.
- [x] Memoization and factorial script.

## Check Your Work

Create two independent counters, call loop callbacks after the loop ends, and count underlying computations to confirm memoization.

## Solution Files

- [solutions.js](solutions.js): runs all eight numbered tasks.
- [closure-utils.js](closure-utils.js): reusable closure factories, unary memoization, and factorial.
- [basic-closure.js](basic-closure.js): retained outer values and username greetings.
- [private-counter.js](private-counter.js): independent private counters.
- [unique-id-generator.js](unique-id-generator.js): remembered IDs and safe-integer exhaustion.
- [loop-closures.js](loop-closures.js): callbacks invoked after their loop has finished.
- [item-manager.js](item-manager.js): private collection with add/remove/list.
- [memoization-factorial.js](memoization-factorial.js): cached results and computation counts.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 15/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 15/basic-closure.js"
node "javascript/The-30-Day-Syntax-Shift/Day 15/private-counter.js"
node "javascript/The-30-Day-Syntax-Shift/Day 15/unique-id-generator.js"
node "javascript/The-30-Day-Syntax-Shift/Day 15/loop-closures.js"
node "javascript/The-30-Day-Syntax-Shift/Day 15/item-manager.js"
node "javascript/The-30-Day-Syntax-Shift/Day 15/memoization-factorial.js"
```

Expected highlights:

- The reader retains its outer message; separate greeters return Hello, Prabhat! and Hello, Sam!
- The first counter reaches 2 while the second remains at 0, then independently reaches 1.
- An ID generator starting at 100 returns 101, 102, and 103; a separate generator starts independently at 101.
- Saved loop callbacks return/log 0, 1, 2; reverse invocation logs 2, 1, 0.
- The item manager deduplicates names, removes an item, and protects its collection from snapshot edits.
- Repeating 5! returns 120 twice but performs one underlying computation.
- Repeating 0! returns 1 twice and raises the total successful computation count to 2.
- Invalid factorial input and ID exhaustion throw caught RangeErrors.

The cache is deliberately single-argument, synchronous, and intended for pure functions.
Factorial accepts 0–18; IDs are unique only within one generator.

[Back to the 30-day roadmap](../README.md)
