"use strict";

// Feature 4: defaults apply to omitted or undefined arguments.
function multiply(first, second = 1) {
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    throw new TypeError("both factors must be finite numbers");
  }
  return first * second;
}
console.log("Omitted second:", multiply(5));
console.log("Explicit second:", multiply(5, 3));
console.log("Undefined second:", multiply(5, undefined));
console.log("Zero second:", multiply(5, 0));

for (const value of [null, "3", NaN]) {
  try {
    multiply(5, value);
  } catch (error) {
    console.log("Invalid second:", value, "|", error.name);
  }
}
