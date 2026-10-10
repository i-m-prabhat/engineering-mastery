"use strict";
const { createCounter } = require("./closure-utils");

function runCounterDemo() {
  const first = createCounter();
  const second = createCounter();
  console.log("Task 2 - first initial:", first.get());
  console.log("First increment:", first.increment());
  console.log("First increment again:", first.increment());
  console.log("First current:", first.get());
  console.log("Second unchanged:", second.get());
  console.log("Second increment:", second.increment());
  console.log("First still:", first.get());
}
module.exports = { runCounterDemo };
if (require.main === module) runCounterDemo();
