"use strict";
const { delay, rejectAfter } = require("./async-helpers");

// Start both timers immediately, and attach rejection handling immediately too.
async function runPromiseDemo() {
  const resolved = delay("Resolved after two seconds", 2000)
    .then(message => console.log("Resolved:", message));
  const rejected = rejectAfter("Rejected after two seconds", 2000)
    .catch(error => console.log("Caught rejection:", error.message));
  await Promise.all([resolved, rejected]);
}

module.exports = { runPromiseDemo };
if (require.main === module) {
  runPromiseDemo().catch(error => { console.error(error.message); process.exitCode = 1; });
}
