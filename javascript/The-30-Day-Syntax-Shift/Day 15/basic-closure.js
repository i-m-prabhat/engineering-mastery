"use strict";
const { createMessageReader, createGreeter } = require("./closure-utils");

function runBasicDemo() {
  const read = createMessageReader("Outer scope is still available.");
  console.log("Task 1 - retained message:", read());
  const greetPrabhat = createGreeter("Prabhat");
  const greetSam = createGreeter("Sam");
  console.log("Task 4 - first greeter:", greetPrabhat());
  console.log("Task 4 - second greeter:", greetSam());
}
module.exports = { runBasicDemo };
if (require.main === module) runBasicDemo();
