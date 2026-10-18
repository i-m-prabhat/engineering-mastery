# Day 23: LeetCode Hard

**Status:** Solutions and learning notes added.

## Goal

Practice efficient search, merging, backtracking, and shortest-path reasoning.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Median of Two Sorted Arrays: return the median for two sorted integer arrays; at least one must be nonempty.
2. Merge k Sorted Lists: merge an array of sorted linked lists into one sorted list.
3. Trapping Rain Water: calculate trapped water for nonnegative bar heights of width 1.
4. N-Queens: return all distinct placements of n queens with no shared row, column, or diagonal.
5. Word Ladder: return the length of a shortest valid one-letter-at-a-time transformation using a supplied word list; return 0 if unreachable.

## Feature Requests

- [x] Median script.
- [x] Merge k lists script.
- [x] Trapped water script.
- [x] N-Queens script.
- [x] Word Ladder script.

## Check Your Work

Examples: median [1,3] and [2] -> 2; rain heights [4,2,0,3,2,5] -> 9; N-Queens n=4 -> 2 solutions. Include empty list collections and an unreachable word ladder.

## Solution Files

- [solutions.js](solutions.js): runs all five demos.
- [median-sorted-arrays.js](median-sorted-arrays.js): binary partition median.
- [merge-k-lists.js](merge-k-lists.js): heap-based merge into new nodes.
- [list-utils.js](list-utils.js): linked-list construction and display helpers.
- [trapping-rain-water.js](trapping-rain-water.js): two-pointer boundary maxima.
- [n-queens.js](n-queens.js): column/diagonal backtracking.
- [word-ladder.js](word-ladder.js): shortest sequence through BFS.
- [notes.md](notes.md): invariants, contracts, complexity, mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 23/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 23/median-sorted-arrays.js"
node "javascript/The-30-Day-Syntax-Shift/Day 23/merge-k-lists.js"
node "javascript/The-30-Day-Syntax-Shift/Day 23/trapping-rain-water.js"
node "javascript/The-30-Day-Syntax-Shift/Day 23/n-queens.js"
node "javascript/The-30-Day-Syntax-Shift/Day 23/word-ladder.js"
```

Expected highlights:

- Median [1, 3] and [2] is 2; [1, 2] and [3, 4] is 2.5.
- Merging [1, 4, 5], [1, 3, 4], and [2, 6] yields [1, 1, 2, 3, 4, 4, 5, 6].
- Empty list collections yield an empty list; inputs remain unchanged.
- Rain heights [4, 2, 0, 3, 2, 5] trap 9 units.
- N-Queens n=4 returns two boards; n=2 and n=3 return none.
- Word Ladder hit → cog through the example dictionary has length 5.
- Missing/unreachable end words return 0; identical start/end returns 1.

Median arrays and lists must already be sorted. Lists must be finite, acyclic, and null-terminated.
N-Queens accepts 1–10. Ladder words use equal-length lowercase ASCII strings.
Read notes.md for numeric contracts, complexity, and output-space limits.

[Back to the 30-day roadmap](../README.md)
