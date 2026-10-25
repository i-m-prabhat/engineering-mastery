"use strict";
const { runBasicDemo } = require("./try-catch-finally");
const { runCustomDemo } = require("./custom-errors");
const { runPromiseDemo } = require("./promise-errors");
const { runFetchDemo } = require("./fetch-errors");

async function main() {
  console.log("Tasks 1–3: throw, catch, and finally");
  runBasicDemo();
  console.log("Tasks 4–5: custom errors and validation");
  runCustomDemo();
  console.log("Tasks 6–7: promise rejection handling");
  await runPromiseDemo();
  console.log("Tasks 8–9: invalid fetch handling");
  await runFetchDemo();
  console.log("All nine task demonstrations finished.");
}

module.exports = { main };
if (require.main === module) {
  main().catch(error => { console.error("Day 12 failed:", error.message); process.exitCode = 1; });
}
