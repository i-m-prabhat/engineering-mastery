"use strict";
const { findTargetPair, maxWindowSum } = require("./algorithms");

function runPatternDemo() {
  const sorted = [1, 2, 4, 6, 8];
  console.log("Task 4 - pair indices for 10:", findTargetPair(sorted, 10));
  console.log("Pair from duplicates:", findTargetPair([2, 2], 4));
  console.log("Missing pair:", findTargetPair(sorted, 99));
  console.log("Empty pair:", findTargetPair([], 1));
  console.log("Task 5 - max window, k=3:", maxWindowSum([2, 1, 5, 1, 3, 2], 3));
  console.log("All-negative max window:", maxWindowSum([-4, -2, -7, -1], 2));
  console.log("Whole array window:", maxWindowSum([1, 2, 3], 3));
  for (const k of [0, 4, 1.5]) {
    try { maxWindowSum([1, 2, 3], k); }
    catch (error) { console.log("Invalid k:", k, "|", error.name); }
  }
  console.log("Task 6 - complexity comparison: see notes.md.");
}
module.exports = { runPatternDemo };
if (require.main === module) runPatternDemo();
