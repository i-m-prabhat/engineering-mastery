# Day 18: Algorithms

**Status:** Solutions and learning notes added.

## Goal

Choose search and sorting strategies and recognize patterns needed in later coding challenges.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Implement linear search and binary search; document the sorted-input requirement.
2. Implement bubble sort and compare with numeric `Array.prototype.sort`.
3. Implement merge sort with a clear base case.
4. Use two pointers to find a target pair in a sorted array.
5. Use a sliding window to find the maximum sum of k consecutive elements.
6. Record time and space complexity for each approach.

## Feature Requests

- [x] Search comparison script.
- [x] Sorting comparison script.
- [x] Two-pointer and sliding-window practice.

## Check Your Work

Try empty arrays, duplicates, absent targets, sorted/reverse-sorted inputs, and invalid window sizes.

## Solution Files

- [solutions.js](solutions.js): runs the task demonstrations.
- [algorithms.js](algorithms.js): search, sorting, two-pointer, and sliding-window implementations.
- [search-comparison.js](search-comparison.js): linear versus binary search.
- [sorting-comparison.js](sorting-comparison.js): bubble, merge, and numeric native sorting.
- [pointer-window-practice.js](pointer-window-practice.js): pair indices and fixed-size window sums.
- [notes.md](notes.md): Task 6 complexity comparison, contracts, mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 18/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 18/search-comparison.js"
node "javascript/The-30-Day-Syntax-Shift/Day 18/sorting-comparison.js"
node "javascript/The-30-Day-Syntax-Shift/Day 18/pointer-window-practice.js"
```

Expected highlights:

- Both searches find 7 at index 3 in [1, 3, 5, 7, 9]; a missing target returns -1.
- Linear search returns the first duplicate; binary search may return any matching duplicate.
- All numeric sorting approaches produce [-3, 1, 2, 2, 10] without changing the input.
- Default native sort on [10, 2, 1] produces [1, 10, 2].
- Pair indices for target 10 in [1, 2, 4, 6, 8] are [1, 4].
- [2, 2] produces distinct pair indices [0, 1]; missing pairs return null.
- Maximum sum for k=3 in [2, 1, 5, 1, 3, 2] is 9.
- Negative-only windows return a negative result: -6 for [-4, -2, -7, -1] with k=2.
- Invalid window sizes throw caught RangeErrors.

Binary search and two-pointer search require ascending sorted numeric input.
Window sizes must be nonempty and fit the array. Read notes.md for complexity and Number arithmetic limits.

[Back to the 30-day roadmap](../README.md)
