# Day 16: Recursion

**Status:** Solutions and learning notes added.

## Goal

Define base cases, make progress toward them, and apply recursion to collections and trees.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Calculate factorial recursively and log several cases.
2. Calculate the nth Fibonacci number recursively; state the indexing convention.
3. Recursively sum an array.
4. Recursively find an array's maximum; define behavior for an empty array.
5. Reverse a string recursively.
6. Check a palindrome recursively; state case and punctuation rules.
7. Implement recursive binary search on a sorted array.
8. Recursively count occurrences of a target in an array.
9. Optional: traverse a binary tree in-order.
10. Optional: calculate binary tree depth.

## Feature Requests

- [x] Factorial and Fibonacci script.
- [x] Array recursion script.
- [x] String recursion script.
- [x] Recursive search script.
- [x] Optional tree traversal script.

## Check Your Work

Check 0! = 1, an empty string, an absent search target, and an empty tree. Explain every recursive base case.

## Solution Files

- [solutions.js](solutions.js): all ten tasks, including optional tree tasks.
- [recursion-utils.js](recursion-utils.js): recursive implementations and input contracts.
- [factorial-fibonacci.js](factorial-fibonacci.js): recursive number sequences.
- [array-recursion.js](array-recursion.js): sum and maximum, including empty arrays.
- [string-recursion.js](string-recursion.js): reversal and exact palindrome checks.
- [recursive-search.js](recursive-search.js): sorted binary search and occurrence counting.
- [tree-traversal.js](tree-traversal.js): in-order traversal and depth.
- [notes.md](notes.md): explanations, complexity, mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 16/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 16/factorial-fibonacci.js"
node "javascript/The-30-Day-Syntax-Shift/Day 16/array-recursion.js"
node "javascript/The-30-Day-Syntax-Shift/Day 16/string-recursion.js"
node "javascript/The-30-Day-Syntax-Shift/Day 16/recursive-search.js"
node "javascript/The-30-Day-Syntax-Shift/Day 16/tree-traversal.js"
```

Expected highlights:

- 0! = 1, 5! = 120; Fibonacci uses F(0)=0 and F(1)=1, with F(10)=55.
- [1, 2, 3, 4, 5] has sum 15 and maximum 5; empty input has sum 0 and maximum undefined.
- Negative-only arrays retain a negative maximum.
- Empty text reverses to empty text and is a palindrome; level is true and Level is false.
- Binary search finds 7 at index 3 in [1, 3, 5, 7, 9]; missing targets return -1.
- Counting 2 in [2, 1, 2, 3, 2] returns 3.
- Sample in-order traversal returns [1, 2, 3, 4, 5, 6, 7] and depth is 3 nodes.
- Empty tree traversal returns [] and depth 0.

Factorial accepts 0–18; Fibonacci accepts 0–78. Use small arrays/strings and shallow acyclic trees because recursive calls consume stack space.
Binary search requires sorted finite numeric input; palindrome matching preserves case, spaces, and punctuation.

[Back to the 30-day roadmap](../README.md)
