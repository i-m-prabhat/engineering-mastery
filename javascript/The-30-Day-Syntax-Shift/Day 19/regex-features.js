"use strict";

function runRegexFeatureDemo() {
  console.log("Task 6 - anchored digits:", /^\d+$/u.test("123"), /^\d+$/u.test("x123"));
  console.log("Character class and exact count:", /^[A-Z]{3}$/u.test("ABC"));
  console.log("Case insensitive:", /javascript/iu.test("JavaScript"));
  console.log("Global matches:", "cat CAT cat".match(/cat/giu));

  // A reused global RegExp keeps lastIndex between test calls.
  const globalDigits = /\d/gu;
  console.log("Global test 1:", globalDigits.test("7"), "| lastIndex:", globalDigits.lastIndex);
  console.log("Global test 2:", globalDigits.test("7"), "| lastIndex:", globalDigits.lastIndex);
  globalDigits.lastIndex = 0;
  console.log("After resetting lastIndex:", globalDigits.test("7"));

  // Non-global existence checks do not carry this advancing search position.
  const digits = /\d/u;
  console.log("Non-global tests:", digits.test("7"), digits.test("7"));
}
module.exports = { runRegexFeatureDemo };
if (require.main === module) runRegexFeatureDemo();
