"use strict";

// Feature 3: a function expression. Any spaces must be present in the inputs.
const concatenate = function (first, second) {
  if (typeof first !== "string" || typeof second !== "string") {
    throw new TypeError("both inputs must be strings");
  }
  return first + second;
};

for (const [first, second] of [["Hello, ", "Prabhat!"], ["", "JavaScript"], ["day", "five"], ["", ""]]) {
  console.log("Combined:", JSON.stringify(concatenate(first, second)));
}
try {
  concatenate("Day ", 5);
} catch (error) {
  console.log("Invalid concatenation input:", error.name);
}
