"use strict";
const { createIdGenerator } = require("./closure-utils");

function runIdDemo() {
  const nextId = createIdGenerator(100);
  console.log("Task 3 - IDs:", nextId(), nextId(), nextId());
  const separate = createIdGenerator(100);
  console.log("Separate generator starts independently:", separate());
  try {
    const exhausted = createIdGenerator(Number.MAX_SAFE_INTEGER);
    exhausted();
  } catch (error) {
    console.log("Exhausted generator:", error.name);
  }
}
module.exports = { runIdDemo };
if (require.main === module) runIdDemo();
