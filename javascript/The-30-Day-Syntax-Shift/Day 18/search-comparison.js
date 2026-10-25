"use strict";
const { linearSearch, binarySearch } = require("./algorithms");

function runSearchDemo() {
  const values = [1, 3, 5, 7, 9];
  for (const target of [1, 7, 9, 4]) {
    console.log("Task 1 - target:", target,
      "| linear:", linearSearch(values, target),
      "| binary:", binarySearch(values, target));
  }
  console.log("Empty linear/binary:", linearSearch([], 1), binarySearch([], 1));
  console.log("Unsorted linear search:", linearSearch([9, 1, 7], 7));
  const duplicates = [1, 2, 2, 2, 3];
  console.log("First duplicate from linear:", linearSearch(duplicates, 2));
  console.log("Any duplicate from binary:", binarySearch(duplicates, 2));
}
module.exports = { runSearchDemo };
if (require.main === module) runSearchDemo();
