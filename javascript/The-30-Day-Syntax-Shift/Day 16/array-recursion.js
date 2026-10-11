"use strict";
const { sumArray, maxArray } = require("./recursion-utils");
function runArrayDemo() {
  for (const values of [[1, 2, 3, 4, 5], [-8, -3, -10], [], [7]]) {
    console.log("Array:", values);
    console.log("Task 3 - sum:", sumArray(values));
    console.log("Task 4 - maximum:", maxArray(values));
  }
}
module.exports = { runArrayDemo };
if (require.main === module) runArrayDemo();
