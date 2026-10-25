# Day 01: Variables and Data Types

**Status:** Solutions and learning notes added.

## Goal

Declare variables, inspect types, and explain reassignment. `const` prevents rebinding; object contents can still change. Arrays report `object` with `typeof`.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Declare a number with `var` and log it.
2. Declare a string with `let` and log it.
3. Declare a boolean with `const` and log it.
4. Create number, string, boolean, object, and array variables; log each value and its `typeof` result.
5. Reassign a `let` variable and log both values.
6. Attempt to reassign a `const` variable and observe the error in an isolated example.

## Feature Requests

- [x] Variable types console log: display each value and type.
- [x] Reassignment demo: compare `let` and `const`.

## Check Your Work

Confirm `typeof []` is `object`; catch or isolate the expected const-reassignment error so other examples still run.

## Solution Files

- [solutions.js](solutions.js): all six numbered tasks with explanations in comments.
- [variable-types.js](variable-types.js): value/type logging, including the seven primitive types, objects, and arrays.
- [reassignment-demo.js](reassignment-demo.js): let reassignment, the expected const error, and object/array mutation.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 01/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 01/variable-types.js"
node "javascript/The-30-Day-Syntax-Shift/Day 01/reassignment-demo.js"
```

Expected highlights:

- Task 5 prints 10 before reassignment and 25 afterward.
- Task 6 prints `TypeError`, keeps the goal at 6, and reaches the final completion message.
- Arrays report `object`; `Array.isArray` returns `true` for the sample array.
- Null reports `object`; the explicit null check returns `true`.
- The reassignment demo changes the let value from 0 to 6 and keeps the const string as `Day 01`.
- Mutating the const object and array succeeds.

Object and array formatting can vary by runtime; compare values and types rather than spacing.

[Back to the 30-day roadmap](../README.md)
