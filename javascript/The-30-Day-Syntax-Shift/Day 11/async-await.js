"use strict";
const { delay, rejectAfter } = require("./async-helpers");

async function runAsyncDemo() {
  const result = await delay("Awaited success");
  console.log("Success:", result);
  try {
    await rejectAfter("Awaited failure");
  } catch (error) {
    console.log("Caught awaited rejection:", error.message);
  }
  console.log("Continued after handled rejection.");
}

module.exports = { runAsyncDemo };
if (require.main === module) {
  runAsyncDemo().catch(error => { console.error(error.message); process.exitCode = 1; });
}
