# Day 16 Notes: Recursion

## 1. Solve a smaller version of the same problem

A recursive function calls itself, directly or through another helper.

Every recursive path needs a base case that stops and a step that makes progress toward it. Without either, calls can continue until the call stack overflows.

For factorial, n <= 1 returns 1. Otherwise n * factorial(n - 1) waits for the smaller factorial, then multiplies as calls return.

## 2. The call stack remembers unfinished work

For factorial(3), the pending work is 3 times factorial(2), then 2 times factorial(1). The base case returns 1; unwinding produces 2 and then 6.

Recursion does not remove the need for state. The runtime stores pending calls on the stack. Long arrays, strings, or deep trees can exceed the stack limit. These implementations are for small practice inputs, not arbitrarily large datasets.

## 3. Factorial and Fibonacci

Factorial accepts integers 0–18 to keep Number results within the safe-integer range. Zero factorial is 1.

Fibonacci uses zero-based indexing: F(0)=0, F(1)=1, then F(n)=F(n-1)+F(n-2). F(7)=13 and F(10)=55.

Naive Fibonacci repeatedly computes the same subproblems. The recursive helper uses a Map cache within one call, reducing work to O(n). The cache is recreated on each public call. Inputs 0–78 keep the Fibonacci result safely representable as an integer Number.

## 4. Array recursion

sumArray advances an index until it equals the array length, where it returns 0.

maxArray returns undefined for an empty array. For a nonempty array, the last element is the base case. Each earlier value is compared with the maximum of its suffix.

Starting a maximum at zero would be wrong for all-negative arrays. For [-8, -3, -10], the maximum is -3.

Numeric helpers reject nonfinite values and sparse holes. They do not mutate the input. Index-based recursion avoids copying the remaining array on every call.

## 5. Strings and matching rules

reverseString converts text into Unicode code points with Array.from, recurses to the end, then appends characters while unwinding.

isPalindrome compares the two ends and moves inward. It returns true when the indices meet or cross. Empty and single-character strings are palindromes under this rule.

Comparison is exact and case-sensitive. Spaces and punctuation count. Thus level is true and Level is false.

Code points keep a single emoji such as 😀 intact, but combining marks and multi-code-point emoji sequences are not treated as full grapheme clusters. These helpers do not normalize text.

## 6. Recursive binary search

Binary search assumes a dense finite numeric array already sorted in ascending order.

At each step, compare the middle value with the target and recurse into only one half. If low exceeds high, return -1.

The helper does not validate sortedness with an O(n) scan, so the sorted input is a documented caller responsibility. Duplicate targets may return any matching index, not necessarily the first.

## 7. Counting occurrences

Each step contributes 1 if the current value strictly equals the target, otherwise 0, then recurses to the next index. The empty suffix returns 0.

Strict equality distinguishes 2 from "2" and compares objects by reference. NaN does not equal itself under this rule.

## 8. Binary trees

A node contains value, left, and right. Missing children may be null or undefined. The input must be an acyclic finite tree.

In-order traversal visits left subtree, node, then right subtree. This produces sorted values for a binary search tree, not necessarily for an arbitrary binary tree.

treeDepth counts nodes on the longest root-to-leaf path: empty tree 0, leaf 1, sample tree 3. Some definitions count edges; state which convention you use.

## 9. Cost of the examples

| Operation | Time | Extra space |
| --- | --- | --- |
| Factorial | O(n) | O(n) stack |
| Memoized Fibonacci | O(n) | O(n) cache and stack |
| Array sum/maximum/count | O(n) | O(n) stack |
| String reverse/palindrome | O(n) worst case | O(n) conversion/stack/output |
| Binary search | O(log n) | O(log n) stack |
| Tree in-order | O(n) | O(h) stack plus O(n) output |
| Tree depth | O(n) | O(h) stack |

Here h is tree height. The palindrome helper may stop early, but converting the input to code points still takes linear time.

## Common mistakes

- Forgetting a base case.
- Recursing without shrinking the remaining problem.
- Forgetting to return a recursive result.
- Initializing a maximum to zero for negative-only input.
- Applying binary search to unsorted data.
- Assuming in-order traversal sorts any tree.
- Confusing node depth with edge depth.
- Assuming recursion works for unlimited input sizes.

## Quick review

1. What stops factorial recursion?
2. Why is Fibonacci cached within a call?
3. What does maxArray return for an empty array?
4. Is Level a palindrome under these rules?
5. What does binary search return for a missing target?
6. Why must the tree be acyclic?
7. What is the depth of a leaf?
8. When might iteration be preferable to recursion?

Run the demos and explain the base case and progress step for every helper.
