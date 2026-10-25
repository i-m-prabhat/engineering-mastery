"use strict";
const { bubbleSort, mergeSort } = require("./algorithms");

function runSortDemo() {
  for (const values of [[10, 2, 1, 2, -3], [], [7], [1, 2, 3], [3, 2, 1]]) {
    console.log("Input:", values);
    console.log("Task 2 - bubble:", bubbleSort(values));
    console.log("Numeric native sort:", [...values].sort((a, b) => a - b));
    console.log("Task 3 - merge:", mergeSort(values));
    console.log("Input unchanged:", values);
  }
  console.log("Default sort compares strings:", [10, 2, 1].sort());
}
module.exports = { runSortDemo };
if (require.main === module) runSortDemo();
