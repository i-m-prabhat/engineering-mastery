"use strict";
const { delay } = require("./async-helpers");

function runChain() {
  return delay("User loaded")
    .then(message => {
      console.log("Step 1:", message);
      return delay("Posts loaded");
    })
    .then(message => {
      console.log("Step 2:", message);
      return delay("Comments loaded");
    })
    .then(message => {
      console.log("Step 3:", message);
      return message;
    });
}

module.exports = { runChain };
if (require.main === module) {
  runChain().catch(error => { console.error(error.message); process.exitCode = 1; });
}
