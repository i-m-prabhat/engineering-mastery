"use strict";

// Feature 5: synchronous callback repetition and ordered function application.
function repeat(callback, count) {
  if (typeof callback !== "function") throw new TypeError("callback must be a function");
  if (!Number.isSafeInteger(count) || count < 0) {
    throw new RangeError("count must be a nonnegative safe integer");
  }
  for (let index = 0; index < count; index++) {
    callback();
  }
}

function applyInSequence(first, second, value) {
  if (typeof first !== "function" || typeof second !== "function") {
    throw new TypeError("first and second must be functions");
  }
  return second(first(value));
}

let calls = 0;
repeat(() => { calls++; }, 3);
console.log("Calls after repeat 3:", calls);
repeat(() => { calls++; }, 0);
console.log("Calls after repeat 0:", calls);

const addTwo = value => value + 2;
const triple = value => value * 3;
console.log("Add 2 then triple:", applyInSequence(addTwo, triple, 4)); // 18
console.log("Triple then add 2:", applyInSequence(triple, addTwo, 4)); // 14

for (const count of [-1, 1.5, "3"]) {
  try {
    repeat(() => {}, count);
  } catch (error) {
    console.log("Invalid repeat count:", count, "|", error.name);
  }
}
try {
  repeat("not a function", 1);
} catch (error) {
  console.log("Invalid callback:", error.name);
}
