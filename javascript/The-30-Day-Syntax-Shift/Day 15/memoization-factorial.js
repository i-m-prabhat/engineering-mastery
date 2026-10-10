"use strict";
const { memoizeUnary, factorial } = require("./closure-utils");

function runMemoDemo() {
  let computations = 0;
  const cachedFactorial = memoizeUnary(number => {
    computations++;
    return factorial(number);
  });
  console.log("Tasks 7–8 - first 5!:", cachedFactorial(5));
  console.log("Repeated 5!:", cachedFactorial(5));
  console.log("Computations after repeated input:", computations); // 1
  console.log("0!:", cachedFactorial(0));
  console.log("Repeated 0!:", cachedFactorial(0));
  console.log("Computations after two distinct inputs:", computations); // 2
  try {
    cachedFactorial(-1);
  } catch (error) {
    console.log("Invalid factorial:", error.name);
  }
}
module.exports = { runMemoDemo };
if (require.main === module) runMemoDemo();
