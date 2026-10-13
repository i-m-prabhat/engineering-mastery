"use strict";

function validateSearch(values, target) {
  if (!Array.isArray(values) || !Number.isFinite(target)) {
    throw new TypeError("expected a numeric array and a finite target");
  }
  // Numeric contents and ascending order (where required) are caller contracts.
}
function validateNumbers(values) {
  if (!Array.isArray(values)) throw new TypeError("expected an array");
  for (const value of values) {
    if (!Number.isFinite(value)) throw new TypeError("expected finite numbers in a dense array");
  }
}

// Task 1: linear search returns the first matching index or -1.
function linearSearch(values, target) {
  validateSearch(values, target);
  for (let index = 0; index < values.length; index++) {
    if (values[index] === target) return index;
  }
  return -1;
}

// Ascending sorted numeric input is required; any matching index is valid.
function binarySearch(values, target) {
  validateSearch(values, target);
  let low = 0;
  let high = values.length - 1;
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

// Task 2: sort a copy; stop early if a complete pass performs no swaps.
function bubbleSort(values) {
  validateNumbers(values);
  const sorted = [...values];
  for (let end = sorted.length - 1; end > 0; end--) {
    let swapped = false;
    for (let index = 0; index < end; index++) {
      if (sorted[index] > sorted[index + 1]) {
        [sorted[index], sorted[index + 1]] = [sorted[index + 1], sorted[index]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return sorted;
}

// Task 3: recursively split, then merge with independent read indices.
function mergeSort(values) {
  validateNumbers(values);
  function sort(items) {
    if (items.length <= 1) return [...items];
    const middle = Math.floor(items.length / 2);
    const left = sort(items.slice(0, middle));
    const right = sort(items.slice(middle));
    const merged = [];
    let first = 0;
    let second = 0;
    while (first < left.length && second < right.length) {
      // Choosing the left equal entry preserves stable ordering.
      if (left[first] <= right[second]) merged.push(left[first++]);
      else merged.push(right[second++]);
    }
    while (first < left.length) merged.push(left[first++]);
    while (second < right.length) merged.push(right[second++]);
    return merged;
  }
  return sort(values);
}

// Task 4: sorted ascending input; return two distinct indices or null.
function findTargetPair(values, target) {
  validateSearch(values, target);
  let left = 0;
  let right = values.length - 1;
  while (left < right) {
    const total = values[left] + values[right];
    if (total === target) return [left, right];
    if (total < target) left++;
    else right--;
  }
  return null;
}

// Task 5: fixed-size sliding window. Nonempty window must fit the array.
function maxWindowSum(values, k) {
  validateNumbers(values);
  if (!Number.isInteger(k) || k < 1 || k > values.length) {
    throw new RangeError("k must be an integer from 1 through the array length");
  }
  let current = 0;
  for (let index = 0; index < k; index++) current += values[index];
  let best = current; // Do not start at zero: all windows may be negative.
  for (let index = k; index < values.length; index++) {
    current = current - values[index - k] + values[index];
    best = Math.max(best, current);
  }
  return best;
}

module.exports = { linearSearch, binarySearch, bubbleSort, mergeSort, findTargetPair, maxWindowSum };
