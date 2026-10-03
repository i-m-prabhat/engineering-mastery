"use strict";

// Feature 5: shorthand properties and methods.
const name = "Prabhat";
const age = 20;
const person = {
  name,
  age,
  greet() {
    return `Hello, ${this.name}!`;
  },
};
console.log("Person:", person);
console.log("Greeting:", person.greet());

// Computed names are evaluated when this object is created.
let field = "language";
const profile = { [field]: "JavaScript", [`day${8}`]: "ES6+" };
field = "framework";
console.log("Computed profile:", profile);
console.log("Original computed key:", profile.language);
console.log("Later variable key absent:", Object.hasOwn(profile, field));

// A later property with the same key replaces an earlier value.
const key = "status";
const progress = { [key]: "started", status: "completed" };
console.log("Duplicate key result:", progress.status);
