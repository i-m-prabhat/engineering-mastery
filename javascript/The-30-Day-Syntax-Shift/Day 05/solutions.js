"use strict";

// Task 1: a declaration that logs parity for an integer.
function logParity(number) {
  if (!Number.isInteger(number)) throw new TypeError("number must be an integer");
  console.log("Task 1 - parity:", number % 2 === 0 ? "even" : "odd");
}
logParity(4);

// Task 2: return a value so the caller can use it.
function square(number) {
  return number * number;
}
console.log("Task 2 - square:", square(5));

// Task 3: a function expression assigned to a const binding.
const logMaximum = function (first, second) {
  console.log("Task 3 - maximum:", first >= second ? first : second);
};
logMaximum(8, 12);

// Task 4: return concatenated strings without an automatic separator.
const concatenate = function (first, second) {
  return first + second;
};
console.log("Task 4 - concatenation:", concatenate("Hello, ", "Prabhat!"));

// Task 5: an expression-bodied arrow implicitly returns its result.
const sum = (first, second) => first + second;
console.log("Task 5 - sum:", sum(10, 3));

// Task 6: includes is case-sensitive. Use a single character for this task.
const containsCharacter = (text, character) => text.includes(character);
console.log("Task 6 - contains S:", containsCharacter("JavaScript", "S"));

// Task 7: omitted or undefined arguments use the default; zero does not.
function multiply(first, second = 1) {
  return first * second;
}
console.log("Task 7 - default product:", multiply(5));
console.log("Task 7 - explicit product:", multiply(5, 3));
console.log("Task 7 - zero product:", multiply(5, 0));

// Task 8: the default age is 18 for this practice greeting.
function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log("Task 8 - default greeting:", greet("Prabhat"));
console.log("Task 8 - explicit greeting:", greet("Prabhat", 20));

// Task 9: receive a callback rather than invoking it at the call site.
function repeat(callback, count) {
  if (typeof callback !== "function") throw new TypeError("callback must be a function");
  if (!Number.isSafeInteger(count) || count < 0) {
    throw new RangeError("count must be a nonnegative safe integer");
  }
  for (let index = 0; index < count; index++) {
    callback();
  }
}
repeat(() => console.log("Task 9 - callback called"), 3);

// Task 10: first receives the input; second receives the first result.
function applyInSequence(first, second, value) {
  return second(first(value));
}
console.log("Task 10 - add 2, then triple:", applyInSequence(
  value => value + 2,
  value => value * 3,
  4,
)); // (4 + 2) * 3 = 18
console.log("All ten task demonstrations finished.");
