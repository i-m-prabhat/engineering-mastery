"use strict";
const { runPromiseDemo } = require("./promise-creation");
const { runChain } = require("./promise-chain");
const { runAsyncDemo } = require("./async-await");
const { runApiDemo } = require("./api-fetch");
const { runConcurrentDemo } = require("./concurrent-promises");

async function main() {
  console.log("Tasks 1–2: resolve/reject after two seconds");
  await runPromiseDemo();
  console.log("Task 3: sequential promise chain");
  await runChain();
  console.log("Tasks 4–5: await success and catch rejection");
  await runAsyncDemo();
  console.log("Tasks 6–7: fetch in both styles");
  await runApiDemo({ offline: process.argv.includes("--offline") });
  console.log("Tasks 8–9: Promise.all and Promise.race");
  await runConcurrentDemo();
  console.log("All nine task demonstrations finished.");
}

module.exports = { main };
if (require.main === module) {
  main().catch(error => { console.error("Day 11 failed:", error.message); process.exitCode = 1; });
}
