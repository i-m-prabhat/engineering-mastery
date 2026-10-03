"use strict";

// Feature 3: spread expands values; rest collects values.
const original = [1, 2, 3];
const expanded = [...original, 4, 5];
expanded[0] = 99;
console.log("Original:", original);
console.log("Edited expanded copy:", expanded);

function sum(...values) {
  if (!values.every(value => Number.isFinite(value))) {
    throw new TypeError("all arguments must be finite numbers");
  }
  return values.reduce((total, value) => total + value, 0);
}
console.log("Sum arguments:", sum(1, 2, 3, 4));
console.log("Sum spread array:", sum(...original));
console.log("Empty sum:", sum());
console.log("Signed sum:", sum(-2, 0, 2));
try {
  sum(1, "2");
} catch (error) {
  console.log("Invalid sum input:", error.name);
}

// The copy is shallow: nested objects are still shared.
const nested = [{ completed: false }];
const shallowCopy = [...nested];
shallowCopy[0].completed = true;
console.log("Nested original changed:", nested[0].completed);
