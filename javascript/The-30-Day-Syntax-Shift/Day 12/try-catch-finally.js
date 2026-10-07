"use strict";

// Task 1: explicitly throw an Error, then handle it.
function intentionalFailure() {
  throw new Error("Intentional practice failure");
}

// Task 2: Number division by zero would normally produce Infinity/NaN.
// Our function chooses to reject a zero divisor instead.
function divide(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    throw new TypeError("both operands must be finite numbers");
  }
  if (denominator === 0) throw new RangeError("cannot divide by zero");
  return numerator / denominator;
}

// Task 3: record both successful and failing execution paths.
function demonstrateFlow(shouldFail) {
  const steps = [];
  try {
    steps.push("try");
    if (shouldFail) throw new Error("Flow failed");
    steps.push("success");
  } catch (error) {
    steps.push(`catch: ${error.message}`);
  } finally {
    steps.push("finally: cleanup");
  }
  return steps;
}

function runBasicDemo() {
  try {
    intentionalFailure();
  } catch (error) {
    console.log("Task 1:", error.name, "-", error.message);
  }
  console.log("Task 2 - valid division:", divide(10, 2));
  try {
    divide(10, 0);
  } catch (error) {
    console.log("Task 2:", error.name, "-", error.message);
  }
  console.log("Task 3 - success flow:", demonstrateFlow(false));
  console.log("Task 3 - failure flow:", demonstrateFlow(true));
}

module.exports = { intentionalFailure, divide, demonstrateFlow, runBasicDemo };
if (require.main === module) runBasicDemo();
