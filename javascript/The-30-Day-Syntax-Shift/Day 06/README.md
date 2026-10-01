# Day 06: Arrays

**Status:** Solutions and learning notes added.

## Goal

Create, mutate, transform, aggregate, and traverse arrays.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Create and log an array containing 1–5.
2. Log its first and last elements.
3. Add an element using `push`.
4. Remove the last element using `pop`.
5. Remove the first element using `shift`.
6. Add an element at the beginning using `unshift`.
7. Double values into a new array with `map`.
8. Select even values with `filter`.
9. Sum values with `reduce`.
10. Log each element using a `for` loop.
11. Log each element using `forEach`.
12. Create and log a two-dimensional array.
13. Access and log a specific matrix element.

## Feature Requests

- [x] Array manipulation script.
- [x] Array transformation and aggregation script.
- [x] Iteration comparison script.
- [x] Two-dimensional array script.

## Check Your Work

For [1, 2, 3, 4, 5], verify doubled values, evens [2, 4], and sum 15. Include an empty array with a reduce initial value.

## Solution Files

- [solutions.js](solutions.js): all thirteen numbered tasks with comments.
- [array-manipulation.js](array-manipulation.js): push/pop/shift/unshift, method return values, and an outer-array copy.
- [array-transformation.js](array-transformation.js): map, filter, and reduce with empty and signed inputs.
- [array-iteration.js](array-iteration.js): indexed for, forEach, and an early-exit example.
- [two-dimensional-array.js](two-dimensional-array.js): matrix access, updates, traversal, and independent grid rows.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 06/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 06/array-manipulation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 06/array-transformation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 06/array-iteration.js"
node "javascript/The-30-Day-Syntax-Shift/Day 06/two-dimensional-array.js"
```

Expected highlights:

- The first and last values of [1, 2, 3, 4, 5] are 1 and 5.
- push returns length 6; pop removes 6; shift removes 1; unshift restores length 5.
- Doubling gives [2, 4, 6, 8, 10], filtering evens gives [2, 4], and the sum is 15.
- Empty-array map/filter return empty arrays; reduce with initial value 0 returns 0.
- Both iteration methods visit [1, 2, 3, 4, 5] in order; the early-exit example prints 1–3.
- Matrix row 2, column 3 initially contains 6; its update changes that cell to 60.
- Updating grid[0][0] leaves the separately created second row unchanged.

[Back to the 30-day roadmap](../README.md)
