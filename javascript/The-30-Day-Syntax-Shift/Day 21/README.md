# Day 21: LeetCode Easy

**Status:** Solutions and learning notes added.

## Goal

Apply basic lookup, integer, linked-list, and stack techniques.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Two Sum: return indices of two distinct array entries that add to a target; log several cases.
2. Reverse Integer: reverse digits, handling negative numbers, trailing zeros, and signed 32-bit overflow.
3. Palindrome Number: return whether an integer reads identically forward and backward; include negatives.
4. Merge Two Sorted Lists: merge sorted linked lists and log the resulting values.
5. Valid Parentheses: check matching and correctly nested `()`, `[]`, and `{}` brackets.

## Feature Requests

- [x] Two Sum script.
- [x] Reverse Integer script.
- [x] Palindrome Number script.
- [x] Merge Two Sorted Lists script.
- [x] Valid Parentheses script.

## Check Your Work

Examples: Two Sum [2, 7, 11, 15], target 9 -> [0, 1]; reverse -120 -> -21; palindrome -121 -> false; brackets `([)]` -> false.

## Solution Files

- [solutions.js](solutions.js): runs all five task demos.
- [two-sum.js](two-sum.js): complement lookup with distinct indices.
- [reverse-integer.js](reverse-integer.js): digit reversal with signed 32-bit overflow checks.
- [palindrome-number.js](palindrome-number.js): half-reversal palindrome check.
- [merge-sorted-lists.js](merge-sorted-lists.js): merges into new output nodes.
- [list-utils.js](list-utils.js): ListNode and array conversion helpers.
- [valid-parentheses.js](valid-parentheses.js): stack-based nesting validation.
- [notes.md](notes.md): approaches, contracts, complexity, mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 21/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 21/two-sum.js"
node "javascript/The-30-Day-Syntax-Shift/Day 21/reverse-integer.js"
node "javascript/The-30-Day-Syntax-Shift/Day 21/palindrome-number.js"
node "javascript/The-30-Day-Syntax-Shift/Day 21/merge-sorted-lists.js"
node "javascript/The-30-Day-Syntax-Shift/Day 21/valid-parentheses.js"
```

Expected highlights:

- Two Sum [2, 7, 11, 15], target 9 returns [0, 1]; [3, 3], target 6 also returns [0, 1].
- Reverse -120 returns -21; reverse 1534236469 returns 0 for overflow.
- Palindrome 121 and 0 return true; -121 and 10 return false.
- Merging [1, 2, 4] and [1, 3, 4] gives [1, 1, 2, 3, 4, 4] without changing either input.
- Empty lists merge to an empty list.
- Brackets {[]} are valid; ([)] and unmatched brackets are invalid.
- Empty bracket text returns true; non-bracket characters return false.

Integer inputs follow the signed 32-bit contract. Two Sum returns [] when no pair exists.
List inputs must already be sorted and acyclic. Read notes.md for complexity and edge cases.

[Back to the 30-day roadmap](../README.md)
