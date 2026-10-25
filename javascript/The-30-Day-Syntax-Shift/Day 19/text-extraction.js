"use strict";
const { containsDigit, extractNumbers } = require("./regex-utils");

function runExtractionDemo() {
  for (const text of ["Day 19", "No digits here", "Items: 12, change: -3.5, bonus: +2", ""]) {
    console.log("Text:", JSON.stringify(text));
    console.log("Task 1 - contains digit:", containsDigit(text));
    console.log("Task 2 - number tokens:", extractNumbers(text));
  }
  console.log("Repeated non-global test:", containsDigit("7"), containsDigit("7"));
}
module.exports = { runExtractionDemo };
if (require.main === module) runExtractionDemo();
