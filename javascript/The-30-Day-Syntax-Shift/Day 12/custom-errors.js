"use strict";

// Tasks 4–5: preserve Error behavior while giving validation a distinct type.
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateName(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new ValidationError("name must be a nonblank string");
  }
  return value.trim();
}

function runCustomDemo() {
  try {
    throw new ValidationError("Custom error demonstration");
  } catch (error) {
    console.log("Task 4:", error.name, "-", error.message);
    console.log("Also an Error:", error instanceof Error);
  }

  for (const value of ["  Demo Learner  ", "", "   ", 42]) {
    try {
      console.log("Task 5 - valid name:", validateName(value));
    } catch (error) {
      if (!(error instanceof ValidationError)) throw error;
      console.log("Task 5:", error.name, "-", error.message);
    }
  }
}

module.exports = { ValidationError, validateName, runCustomDemo };
if (require.main === module) runCustomDemo();
