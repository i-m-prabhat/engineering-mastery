# Day 18 Notes: Algorithms

## 1. Start with a contract

All helpers work with dense arrays of finite Numbers. Searches and the two-pointer helper require a finite numeric target. Binary search and target-pair search additionally require ascending sorted input.

The search helpers check the outer array and target but trust the contents and ordering. Validating every entry or sortedness on every binary search would add O(n) work and hide its core O(log n) search cost.

Sorting and window helpers validate numeric contents. None of these helpers mutates the input array.

## 2. Linear search

Visit entries from left to right and return the first equal target index. Return -1 if none matches.

Linear search works on unsorted data and is simple for small arrays or a single search. Its worst case examines every element; its best case matches the first.

## 3. Binary search

On sorted data, compare the middle element with the target. Discard the half that cannot contain the answer.

The inclusive search interval begins at low=0 and high=length-1. If low passes high, the target is absent. Moving to middle+1 or middle-1 ensures progress.

Duplicate targets can produce any matching index. This helper does not promise the first occurrence. An empty array returns -1 immediately.

Sorting an unsorted array just to search once adds sorting cost. Consider the whole workflow, especially whether original indices must be preserved.

## 4. Bubble sort

Compare adjacent values and swap them when out of order. After a pass, the largest remaining value is at the end of the unsorted portion.

The implementation shrinks that portion and exits early when a pass has no swaps. Sorted input therefore needs only one linear pass. Reverse-sorted input still needs quadratic work.

The helper copies the input before swapping. It is not an in-place sorting API, even though the swapping core uses constant extra state.

## 5. Native numeric sort

Array.prototype.sort mutates its array and, without a comparator, sorts by string representations. Thus [10, 2, 1].sort() gives [1, 10, 2].

Use [...values].sort((a, b) => a - b) for ascending numeric order without editing the original array.

Do not claim a universal time/space complexity for native sort: its implementation is engine-dependent.

## 6. Merge sort

Arrays of length zero or one are the base case. Split larger arrays, sort both halves, then merge them with two read indices.

Do not use shift repeatedly during merging; indexed reads avoid repeated front removal. Choosing the left item when equal preserves stable ordering.

This implementation allocates slices and output arrays. Its peak extra space is O(n), with O(log n) recursive depth. It is a teaching implementation, not an allocation-minimized sorter.

## 7. Two pointers

Start at the smallest and largest values of a sorted array. If their sum is too small, advance the left pointer. If too large, move the right pointer left.

The sorted order makes those eliminations safe. Stop when the pointers meet so one entry cannot be used twice.

Return the two indices, or null if no pair exists. Duplicates such as [2, 2] can form a valid pair because they are different positions.

## 8. Fixed-size sliding window

First sum k values. For each new position, subtract the departing value and add the incoming value.

This reuses the previous sum instead of resumming all k entries for every window. Only consecutive windows of exactly k values are considered.

Initialize the best result with the first actual window, not zero. Otherwise an all-negative input incorrectly produces zero. For [-4, -2, -7, -1] with k=2, the maximum is -6.

k must be an integer from 1 through the array length. Empty arrays have no valid nonempty window, so the helper throws RangeError for them.

## 9. Time and extra space

| Algorithm | Time | Extra space in this implementation |
| --- | --- | --- |
| Linear search | O(n) worst, O(1) best | O(1) |
| Binary search | O(log n) worst | O(1) |
| Bubble sort | O(n²) worst, O(n) sorted best | O(n), because input is copied |
| Merge sort | O(n log n) | O(n) plus O(log n) recursion |
| Native numeric sort | Engine-dependent | Engine-dependent plus O(n) input copy |
| Sorted target-pair search | O(n) worst | O(1) |
| Fixed-size maximum window | O(n), including validation | O(1) |

Search/pair costs assume their documented numeric/sorted preconditions. The returned pair uses constant-size output. Sorting outputs consume O(n) space.

## 10. Number limits

These exercises use ordinary Number arithmetic. Very large magnitudes can overflow or lose integer precision, and decimal arithmetic may round.

Two-pointer exact sum comparison is best practiced with modest integers. The window algorithm may accumulate rounding differences for fractions. A production numeric API would need a more explicit arithmetic policy.

## Common mistakes

- Using binary search or two pointers on unsorted input.
- Failing to move past the middle index.
- Expecting binary search to return the first duplicate.
- Forgetting native sort mutates its input.
- Omitting the numeric sort comparator.
- Recomputing every window instead of updating its sum.
- Starting the best window sum at zero.
- Allowing a pair to use the same index twice.
- Ignoring input copying when describing space cost.

## Quick review

1. When is linear search useful despite its worst-case cost?
2. Why does binary search discard half the range?
3. Why can bubble sort stop after a pass with no swaps?
4. What is merge sort's base case?
5. Why does two-pointer movement require sorted order?
6. Which values leave and enter a sliding window?
7. Why is zero a bad initial maximum for negative-only windows?
8. What does the helper do when k exceeds the array length?

Run the demos and explain both the result and the discarded work at each step.
