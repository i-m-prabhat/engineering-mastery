"use strict";

// Preconditions: ascending sorted arrays of signed 32-bit integers.
// Do not scan/sort the inputs: retain logarithmic partition-search work.
function findMedianSortedArrays(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) throw new TypeError("expected two arrays");
  if (first.length + second.length === 0) throw new RangeError("at least one array must be nonempty");
  let a = first;
  let b = second;
  if (a.length > b.length) [a, b] = [b, a];
  const half = Math.floor((a.length + b.length + 1) / 2);
  let low = 0;
  let high = a.length;
  while (low <= high) {
    const cutA = low + Math.floor((high - low) / 2);
    const cutB = half - cutA;
    const leftA = cutA === 0 ? -Infinity : a[cutA - 1];
    const rightA = cutA === a.length ? Infinity : a[cutA];
    const leftB = cutB === 0 ? -Infinity : b[cutB - 1];
    const rightB = cutB === b.length ? Infinity : b[cutB];
    if (leftA <= rightB && leftB <= rightA) {
      const left = Math.max(leftA, leftB);
      if ((a.length + b.length) % 2 === 1) return left;
      const right = Math.min(rightA, rightB);
      return left + (right - left) / 2;
    }
    if (leftA > rightB) high = cutA - 1;
    else low = cutA + 1;
  }
  throw new RangeError("no valid partition; check sorted numeric input");
}
function runMedianDemo() {
  for (const [a, b] of [[[1, 3], [2]], [[1, 2], [3, 4]], [[], [1]], [[0, 0], [0, 0]], [[-5, -3], [-4, -2]]]) {
    console.log("Median:", a, b, "| result:", findMedianSortedArrays(a, b));
  }
  try { findMedianSortedArrays([], []); }
  catch (error) { console.log("Both empty:", error.name); }
}
module.exports = { findMedianSortedArrays, runMedianDemo };
if (require.main === module) runMedianDemo();
