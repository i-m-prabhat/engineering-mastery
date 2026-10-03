"use strict";

// Task 1: expressions inside template literals.
const name = "Prabhat";
const age = 20;
console.log(`Task 1 - greeting: My name is ${name} and I am ${age} years old.`);

// Task 2: newlines are preserved.
const multiline = `Learning JavaScript
One challenge each day
Day 08: ES6+ Features`;
console.log("Task 2 - multiline:\n" + multiline);

// Task 3: array destructuring follows position.
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log("Task 3 - first two:", first, second);

// Task 4: object destructuring follows property names.
const book = { title: "The Hobbit", author: "J. R. R. Tolkien" };
const { title, author } = book;
console.log("Task 4 - book:", title, "|", author);

// Task 5: spread creates a new outer array.
const expanded = [...numbers, 40, 50];
console.log("Task 5 - original:", numbers);
console.log("Task 5 - expanded:", expanded);

// Task 6: rest gathers arguments into an array.
function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}
console.log("Task 6 - sum:", sum(1, 2, 3, 4)); // 10
console.log("Task 6 - empty sum:", sum()); // 0

// Task 7: zero is an explicit argument, so it does not use the default.
function multiply(first, second = 1) {
  return first * second;
}
console.log("Task 7 - default:", multiply(5));
console.log("Task 7 - explicit:", multiply(5, 3));
console.log("Task 7 - zero:", multiply(5, 0));

// Task 8: property and method shorthand.
const person = {
  name,
  age,
  greet() {
    return `Hello, ${this.name}!`;
  },
};
console.log("Task 8 - person:", person);
console.log("Task 8 - greeting:", person.greet());

// Task 9: brackets compute a key from an expression.
const field = "language";
const profile = { [field]: "JavaScript", [`day${8}`]: "ES6+" };
console.log("Task 9 - computed keys:", profile);
console.log("All nine task demonstrations finished.");
