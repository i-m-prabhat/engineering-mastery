"use strict";

// Feature 1: compare arithmetic results for several pairs of numbers.
const pairs = [
  [10, 3],
  [5, 5],
  [-10, 3],
  [0, 3],
  [10, 0],
  [0, 0],
];

for (const [left, right] of pairs) {
  console.log(`Operands: ${left}, ${right}`);
  console.log("Addition:", left + right);
  console.log("Subtraction:", left - right);
  console.log("Multiplication:", left * right);
  console.log("Division:", left / right);
  console.log("Remainder:", left % right);
}

// Number division by zero does not throw: observe Infinity and NaN above.
console.log("Negative infinity:", -10 / 0);
console.log("Decimal addition:", 0.1 + 0.2);
