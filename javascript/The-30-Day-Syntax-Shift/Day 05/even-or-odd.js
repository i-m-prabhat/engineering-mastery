"use strict";

// Feature 1: return the classification; let the caller decide how to display it.
function parity(number) {
  if (!Number.isInteger(number)) throw new TypeError("number must be an integer");
  return number % 2 === 0 ? "even" : "odd";
}

for (const number of [0, 1, 4, -3, -4]) {
  console.log("Number:", number, "| parity:", parity(number));
}
for (const invalid of [2.5, "4", NaN, Infinity]) {
  try {
    parity(invalid);
  } catch (error) {
    console.log("Invalid parity input:", invalid, "|", error.name);
  }
}
