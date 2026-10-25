"use strict";
const { delay, rejectAfter } = require("./async-helpers");

async function runConcurrentDemo() {
  // Inputs start immediately. Results follow input order, not completion order.
  const results = await Promise.all([
    delay("slow first input", 80),
    delay("fast second input", 20),
  ]);
  console.log("Promise.all results:", results);

  const winner = await Promise.race([
    delay("slow result", 80),
    delay("fast result", 20),
  ]);
  console.log("Race fulfillment:", winner);

  try {
    await Promise.race([
      delay("later success", 80),
      rejectAfter("early failure", 20),
    ]);
  } catch (error) {
    console.log("Race rejection:", error.message);
  }

  try {
    await Promise.all([
      delay("later result", 80),
      rejectAfter("one input failed", 20),
    ]);
  } catch (error) {
    console.log("Promise.all rejection:", error.message);
  }
  // Losing/remaining operations are not cancelled by race or all.
}

module.exports = { runConcurrentDemo };
if (require.main === module) {
  runConcurrentDemo().catch(error => { console.error(error.message); process.exitCode = 1; });
}
