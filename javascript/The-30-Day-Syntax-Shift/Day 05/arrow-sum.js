"use strict";

// Feature 4: braces require an explicit return.
const sum = (first, second) => {
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    throw new TypeError("both inputs must be finite numbers");
  }
  return first + second;
};

for (const [first, second] of [[10, 3], [0, 0], [-5, 2], [1.5, 2.5]]) {
  console.log(`${first} + ${second} =`, sum(first, second));
}
try {
  sum(5, "2");
} catch (error) {
  console.log("Invalid sum input:", error.name);
}
