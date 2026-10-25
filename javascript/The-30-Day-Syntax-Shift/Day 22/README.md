# Day 22: LeetCode Medium

**Status:** Solutions and learning notes added.

## Goal

Apply carries, sliding windows, two pointers, and grouping; explain complexity and edge cases.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Add Two Numbers: add two reversed-digit linked lists and return the sum as a linked list.
2. Longest Substring Without Repeating Characters: return the maximum substring length.
3. Container With Most Water: return the maximum area formed by two heights and their index distance.
4. 3Sum: return unique triplets whose sum is zero.
5. Group Anagrams: group strings containing the same character counts.

## Feature Requests

- [x] Add Two Numbers script.
- [x] Longest substring script.
- [x] Container area script.
- [x] 3Sum script.
- [x] Anagram grouping script.

## Check Your Work

Examples: reversed digits [2,4,3] + [5,6,4] -> [7,0,8]; `abcabcbb` -> 3; 3Sum [-1,0,1,2,-1,-4] -> [-1,-1,2] and [-1,0,1].

## Solution Files

- [solutions.js](solutions.js): runs all five challenge demos.
- [add-two-numbers.js](add-two-numbers.js): reversed-digit list addition with carry.
- [list-utils.js](list-utils.js): ListNode and array conversion helpers.
- [longest-substring.js](longest-substring.js): last-seen sliding window.
- [container-area.js](container-area.js): two-pointer maximum area.
- [three-sum.js](three-sum.js): unique zero-sum triplets without input mutation.
- [group-anagrams.js](group-anagrams.js): lowercase ASCII count signatures.
- [notes.md](notes.md): approaches, contracts, complexity, mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 22/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 22/add-two-numbers.js"
node "javascript/The-30-Day-Syntax-Shift/Day 22/longest-substring.js"
node "javascript/The-30-Day-Syntax-Shift/Day 22/container-area.js"
node "javascript/The-30-Day-Syntax-Shift/Day 22/three-sum.js"
node "javascript/The-30-Day-Syntax-Shift/Day 22/group-anagrams.js"
```

Expected highlights:

- [2, 4, 3] + [5, 6, 4] returns [7, 0, 8]; [9, 9, 9] + [1] returns [0, 0, 0, 1].
- abcabcbb returns length 3; abba returns 2; empty text returns 0.
- Heights [1, 8, 6, 2, 5, 4, 8, 3, 7] yield area 49.
- 3Sum [-1, 0, 1, 2, -1, -4] returns [-1, -1, 2] and [-1, 0, 1].
- Repeated zeros produce just one [0, 0, 0] triplet.
- Anagrams group eat/tea/ate, tan/nat, and bat separately.
- Empty strings and duplicate words remain in their groups.

Digit lists must be nonempty and acyclic. Substring lengths count Unicode code points.
Anagram inputs use lowercase ASCII; 3Sum uses signed 32-bit integers.
Read notes.md for mutation guarantees, complexity, and edge cases.

[Back to the 30-day roadmap](../README.md)
