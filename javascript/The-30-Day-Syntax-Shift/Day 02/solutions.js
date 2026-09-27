"use strict";

// Day 02: solutions to all fourteen operator tasks.
const first = 10;
const second = 3;

console.log("Task 1 - addition:", first + second); // 13
console.log("Task 2 - subtraction:", first - second); // 7
console.log("Task 3 - multiplication:", first * second); // 30
console.log("Task 4 - division:", first / second); // 3.3333333333333335
console.log("Task 5 - remainder:", first % second); // 1

// Compound assignment updates an existing variable.
let points = 10;
points += 5;
console.log("Task 6 - after +=:", points); // 15
points -= 3;
console.log("Task 7 - after -=:", points); // 12

console.log("Task 8 - greater than:", first > second); // true
console.log("Task 8 - less than:", first < second); // false
console.log("Task 9 - greater than or equal:", first >= 10); // true
console.log("Task 9 - less than or equal:", second <= 3); // true

// Loose equality permits coercion; strict equality does not.
console.log("Task 10 - 5 == string 5:", 5 == "5"); // true
console.log("Task 10 - 5 === string 5:", 5 === "5"); // false
console.log("Task 10 - 5 === 5:", 5 === 5); // true

const age = 20;
const hasTicket = true;
const isMember = false;
console.log("Task 11 - adult AND ticket:", age >= 18 && hasTicket); // true
console.log("Task 12 - ticket OR member:", hasTicket || isMember); // true
console.log("Task 13 - NOT member:", !isMember); // true

// A second condition keeps zero from being classified as negative.
const number = 0;
const sign = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log("Task 14 - sign of 0:", sign); // zero
console.log("All fourteen task demonstrations finished.");
