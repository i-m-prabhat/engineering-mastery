"use strict";
const { factorial, fibonacci } = require("./recursion-utils");
function runNumberDemo() {
  for (const n of [0, 1, 5, 18]) console.log(`Task 1 - ${n}!:`, factorial(n));
  for (const n of [0, 1, 2, 7, 10]) console.log(`Task 2 - F(${n}):`, fibonacci(n));
  try { factorial(-1); } catch (error) { console.log("Invalid factorial:", error.name); }
}
module.exports = { runNumberDemo };
if (require.main === module) runNumberDemo();
