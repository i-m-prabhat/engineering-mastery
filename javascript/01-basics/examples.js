// Lesson 1 examples
// Run with: node javascript/01-basics/examples.js
// Read each line, guess what it will print, THEN run it and check.

// ---------- 1. Printing ----------
console.log("Hello, world!");
console.log(100);

// ---------- 2. Variables ----------
const name = "Prabhat";
let age = 20;
console.log(name);
console.log(age);

age = 21; // let can change
console.log("Next year:", age); // a comma prints values side by side

// ---------- 3. Data types ----------
console.log(typeof 42);        // number
console.log(typeof "42");      // string
console.log(typeof true);      // boolean
let nothingYet;
console.log(nothingYet);       // undefined

// ---------- 4. Math ----------
console.log(10 + 3);  // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  // 3.3333333333333335
console.log(10 % 3);  // 1   (10 = 3 + 3 + 3, remainder 1)
console.log(2 ** 3);  // 8

// ---------- 5. Strings ----------
const city = "Delhi";
console.log("I live in " + city);   // joining with +
console.log(`I live in ${city}`);   // template literal (backticks!)
console.log(city.length);           // 5
console.log(city.toUpperCase());    // DELHI

// ---------- 6. The + trap ----------
console.log(5 + 5);     // 10
console.log("5" + 5);   // 55 (text join, not math!)
console.log(Number("5") + 5); // 10 (Number() converts text to a number)
