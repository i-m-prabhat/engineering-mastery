"use strict";

// Task 1: 0! = 1; bound Number results to the safe-integer range.
function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) throw new RangeError("n must be an integer from 0 through 18");
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Task 2: zero-based indexing, F(0)=0 and F(1)=1.
// Memoization avoids recomputing overlapping subproblems.
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0 || n > 78) throw new RangeError("n must be an integer from 0 through 78");
  const cache = new Map([[0, 0], [1, 1]]);
  function visit(index) {
    if (cache.has(index)) return cache.get(index);
    const result = visit(index - 1) + visit(index - 2);
    cache.set(index, result);
    return result;
  }
  return visit(n);
}

function validateNumbers(values) {
  if (!Array.isArray(values)) throw new TypeError("expected an array");
  for (const value of values) {
    if (!Number.isFinite(value)) throw new TypeError("expected finite numbers in a dense array");
  }
}

// Task 3: advance an index rather than copying the remaining array each time.
function sumArray(values) {
  validateNumbers(values);
  function visit(index) {
    if (index === values.length) return 0;
    return values[index] + visit(index + 1);
  }
  return visit(0);
}

// Task 4: an empty array has no maximum, represented here by undefined.
function maxArray(values) {
  validateNumbers(values);
  if (values.length === 0) return undefined;
  function visit(index) {
    if (index === values.length - 1) return values[index];
    return Math.max(values[index], visit(index + 1));
  }
  return visit(0);
}

function characters(text) {
  if (typeof text !== "string") throw new TypeError("expected a string");
  return Array.from(text); // Unicode code points, not full grapheme clusters.
}

// Task 5: recurse through code points and collect them on the way back.
function reverseString(text) {
  const chars = characters(text);
  const result = [];
  function visit(index) {
    if (index === chars.length) return;
    visit(index + 1);
    result.push(chars[index]);
  }
  visit(0);
  return result.join("");
}

// Task 6: exact case-sensitive comparison; spaces/punctuation are significant.
function isPalindrome(text) {
  const chars = characters(text);
  function visit(left, right) {
    if (left >= right) return true;
    return chars[left] === chars[right] && visit(left + 1, right - 1);
  }
  return visit(0, chars.length - 1);
}

// Task 7: input must already be sorted ascending; return any matching index.
// Sortedness is a caller precondition, not scanned on each search.
function binarySearch(values, target) {
  if (!Array.isArray(values) || !Number.isFinite(target)) throw new TypeError("expected a sorted numeric array and finite target");
  function visit(low, high) {
    if (low > high) return -1;
    const middle = low + Math.floor((high - low) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] > target) return visit(low, middle - 1);
    return visit(middle + 1, high);
  }
  return visit(0, values.length - 1);
}

// Task 8: strict equality; input is a dense array.
function countOccurrences(values, target) {
  if (!Array.isArray(values)) throw new TypeError("expected an array");
  function visit(index) {
    if (index === values.length) return 0;
    return (values[index] === target ? 1 : 0) + visit(index + 1);
  }
  return visit(0);
}

// Tasks 9–10: nodes have value/left/right; missing children are null.
// Input must be a finite acyclic tree, not a graph with cycles.
function inOrder(root) {
  const result = [];
  function visit(node) {
    if (node == null) return;
    visit(node.left);
    result.push(node.value);
    visit(node.right);
  }
  visit(root);
  return result;
}

function treeDepth(root) {
  if (root == null) return 0;
  return 1 + Math.max(treeDepth(root.left), treeDepth(root.right));
}

module.exports = { factorial, fibonacci, sumArray, maxArray, reverseString,
  isPalindrome, binarySearch, countOccurrences, inOrder, treeDepth };
