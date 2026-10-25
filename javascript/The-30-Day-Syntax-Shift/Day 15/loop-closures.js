"use strict";
const { createIndexLoggers } = require("./closure-utils");

function runLoopDemo() {
  const callbacks = createIndexLoggers(3);
  console.log("Task 5 - call after the loop has finished:");
  callbacks.forEach(callback => callback()); // 0, 1, 2
  console.log("Call in reverse order:");
  [...callbacks].reverse().forEach(callback => callback()); // 2, 1, 0
  console.log("Empty callback count:", createIndexLoggers(0).length);
}
module.exports = { runLoopDemo };
if (require.main === module) runLoopDemo();
