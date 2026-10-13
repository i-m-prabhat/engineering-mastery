// Lesson 1 exercises
// Run with: node javascript/01-basics/exercises.js
// Write your code under each TODO. The "Expected output" shows what should print.
// Try each one yourself before asking for help!

// ---------- Exercise 1 ----------
// TODO: Print the message: I am learning JavaScript
// Expected output: I am learning JavaScript

console.log("I am learning JavaScript");


// ---------- Exercise 2 ----------
// TODO: Create a const called myName holding your name,
//       and a let called myAge holding your age.
//       Print them both using ONE template literal.
// Expected output (with your values): My name is Prabhat and I am 20 years old

const myName = "Prabhat";
let myAge = 20;
console.log(`My name is ${myName} and I am ${myAge} years old.`);


// ---------- Exercise 3 ----------
// TODO: Create a let called coins with value 10.
//       Then add 5 to it (change the variable!) and print it.
// Expected output: 15

let coins = 10;
coins += 5;
console.log(coins);

// ---------- Exercise 4 ----------
// A pizza costs 250 and you buy 3. Delivery costs 40.
// TODO: Store these in variables, calculate the total, and print it.
// Expected output: Total: 790

const pizzaCost = 250;
const pizzaQuantity = 3;
const deliveryCost = 40;
const totalCost = pizzaCost * pizzaQuantity + deliveryCost;
console.log(`Total: ${totalCost}`);


// ---------- Exercise 5 ----------
// TODO: Print the type of each of these values using typeof:
//       99, "99", false, and a variable that has no value yet
// Expected output:
// number
// string
// boolean
// undefined

console.log(typeof 99);
console.log(typeof "99");
console.log(typeof false);
let undefinedVariable;
console.log(typeof undefinedVariable);


// ---------- Exercise 6 ----------
// TODO: Use the % operator to print the remainder of 17 divided by 5.
//       Then print whether 17 is even (true or false) using: 17 % 2 === 0
// Expected output:
// 2
// false

console.log(17 % 5);
console.log(17 % 2 === 0);


// ---------- Exercise 7 (challenge) ----------
// You have 135 minutes.
// TODO: Calculate how many full hours and leftover minutes that is.
//       Hint: use Math.floor() to drop decimals, e.g. Math.floor(2.7) is 2
//       Hint: % gives you the leftover
// Expected output: 135 minutes = 2 hours and 15 minutes

const totalMinutes = 135;
const hours = Math.floor(totalMinutes / 60);
const leftoverMinutes = totalMinutes % 60;
console.log(`${totalMinutes} minutes = ${hours} hours and ${leftoverMinutes} minutes`);

// ---------- Exercise 8 (bug hunt) ----------
// This code has bugs. Uncomment it (remove the //), run it, read the errors, and fix it.
// Expected output: Hello, Sam! You have 3 messages.

const user = "Sam";
const count = 3;
console.log(`Hello, ${user}! You have ${count} messages.`);
