"use strict";

// Feature 1: finite Number inputs only.
function classifyNumber(value) {
  if (!Number.isFinite(value)) return "invalid input";
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "zero";
}

for (const value of [10, -5, 0, -0, 0.5, -0.5, "5", NaN, Infinity]) {
  console.log("Value:", value, "| sign:", classifyNumber(value));
}
