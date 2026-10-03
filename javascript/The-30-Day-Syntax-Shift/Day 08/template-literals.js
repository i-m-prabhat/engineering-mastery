"use strict";

// Feature 1: interpolation, expressions, and preserved newlines.
const name = "Prabhat";
const age = 20;
const greeting = `My name is ${name} and I am ${age} years old.`;
const summary = `Learner: ${name}
Current age: ${age}
Next year: ${age + 1}`;
console.log("Greeting:", greeting);
console.log("Multiline:\n" + summary);

// Ordinary quoted strings do not interpolate.
console.log("Ordinary quotes:", "Hello, ${name}!");
console.log("Escaped interpolation:", `Hello, \${name}!`);
