// Lesson 2 examples
// Run with: node javascript/02-conditions/examples.js
// Guess each output BEFORE running. Then change the values and run again.

// ---------- 1. Comparisons give booleans ----------
console.log(10 > 5);      // true
console.log(10 === 10);   // true
console.log(10 !== 10);   // false
console.log(5 === "5");   // false (number vs string)

// ---------- 2. if ----------
const temperature = 35;
if (temperature > 30) {
  console.log("It's hot! Drink water.");
}

// ---------- 3. if / else ----------
const marks = 25;
if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ---------- 4. else if (order matters!) ----------
const score = 82;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 33) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ---------- 5. Logical operators ----------
const age = 20;
const hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log("You can enter the concert");
}

const isWeekend = false;
const isHoliday = true;
if (isWeekend || isHoliday) {
  console.log("No office today!");
}

const isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in");
}

// ---------- 6. Truthy / falsy ----------
const userName = "";
if (userName) {
  console.log(`Welcome, ${userName}`);
} else {
  console.log("Please enter your name");
}

// ---------- 7. Ternary ----------
const status = age >= 18 ? "adult" : "minor";
console.log(status);

// ---------- 8. Even or odd (using % from Lesson 1!) ----------
const number = 7;
if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}
