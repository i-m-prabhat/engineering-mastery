"use strict";

// Feature 3: classify finite Number values, including zero.
function classifySign(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "invalid input";
  }

  return value > 0 ? "positive" : value < 0 ? "negative" : "zero";
}

for (const value of [10, -3, 0, -0, 2.5, -0.5, "5", NaN, Infinity]) {
  console.log("Value:", value, "| sign:", classifySign(value));
}

// Input validation prevents NaN or a numeric string from becoming "zero".
console.log("Ternary sign checker finished.");
