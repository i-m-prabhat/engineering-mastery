"use strict";
const { binarySearch, countOccurrences } = require("./recursion-utils");
function runSearchDemo() {
  const sorted = [1, 3, 5, 7, 9];
  for (const target of [1, 7, 9, 4]) {
    console.log("Task 7 - target:", target, "| index:", binarySearch(sorted, target));
  }
  console.log("Empty search:", binarySearch([], 7));
  console.log("Task 8 - occurrences of 2:", countOccurrences([2, 1, 2, 3, 2], 2));
  console.log("Missing target count:", countOccurrences([1, 3], 2));
  console.log("Empty count:", countOccurrences([], 2));
}
module.exports = { runSearchDemo };
if (require.main === module) runSearchDemo();
