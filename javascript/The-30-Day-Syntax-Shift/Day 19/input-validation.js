"use strict";
const { isPracticeUsername, extractDateParts, isCalendarDate } = require("./regex-utils");

function runValidationDemo() {
  for (const text of ["Sam", "Prabhat_19", "ab", "a".repeat(16), "a".repeat(17), "1Sam", "Sam Lee", "Sam\n"]) {
    console.log("Task 3 - username:", JSON.stringify(text), "| valid:", isPracticeUsername(text));
  }
  for (const text of ["2026-10-14", "2026-02-30", "2024-02-29", "1900-02-29", "2026-1-4", "2026-10-14\n"]) {
    console.log("Task 4 - date:", JSON.stringify(text),
      "| parts:", extractDateParts(text), "| valid calendar date:", isCalendarDate(text));
  }
}
module.exports = { runValidationDemo };
if (require.main === module) runValidationDemo();
