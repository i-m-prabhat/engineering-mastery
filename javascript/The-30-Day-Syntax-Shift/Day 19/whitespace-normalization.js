"use strict";
const { normalizeWhitespace } = require("./regex-utils");

function runWhitespaceDemo() {
  for (const text of ["  Learn   regular expressions  ", "one\ttwo\nthree", "", "   ", "already normalized"]) {
    console.log("Task 5 - before:", JSON.stringify(text));
    console.log("After:", JSON.stringify(normalizeWhitespace(text)));
  }
}
module.exports = { runWhitespaceDemo };
if (require.main === module) runWhitespaceDemo();
