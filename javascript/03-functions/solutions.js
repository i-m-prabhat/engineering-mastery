// Lesson 3 exercises
// Run with: node javascript/03-functions/solutions.js
//
// RULE FOR THIS LESSON: functions should RETURN values.
// Do the console.log OUTSIDE the function, when you call it.
// Every exercise lists several test calls, so run ALL of them.

// ---------- Exercise 1: Predict the output ----------
// Without running, write what each console.log prints. Then run to check.
//
// function double(n) {
//   return n * 2;
// }
// function doubleAndPrint(n) {
//   console.log(n * 2);
// }
// console.log(double(4)); // 8
// const a = doubleAndPrint(4); // 8
// console.log(a); // undefined
// console.log(double(double(3))); // 12


// ---------- Exercise 2: Your first function ----------
// TODO: Write a function square(n) that RETURNS n * n.
// Tests:
// console.log(square(3));   // 9
// console.log(square(10));  // 100
// console.log(square(0));   // 0

function square(n) {
  return n * n;
}

console.log(square(3));   // 9
console.log(square(10));  // 100
console.log(square(0));   // 0

// ---------- Exercise 3: Is it even? ----------
// TODO: Write a function isEven(n) that RETURNS true or false.
// Tests:
// console.log(isEven(4));   // true
// console.log(isEven(7));   // false
// console.log(isEven(0));   // true

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4));   // true
console.log(isEven(7));   // false
console.log(isEven(0));   // true   

// ---------- Exercise 4: Grade function ----------
// TODO: Turn your Lesson 2 grade calculator into a function getGrade(marks)
//       that RETURNS the grade ("A", "B", "C", "D", or "Fail").
//       Bonus: use return to avoid else.
// Tests:
// console.log(getGrade(95));  // A
// console.log(getGrade(75));  // B
// console.log(getGrade(50));  // C
// console.log(getGrade(33));  // D
// console.log(getGrade(10));  // Fail

function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 33) {
        return "D";
    } else {
        return "Fail";
    }
}

console.log(getGrade(95));  // A
console.log(getGrade(75));  // B
console.log(getGrade(50));  // C
console.log(getGrade(33));  // D
console.log(getGrade(10));  // Fail 



// ---------- Exercise 5: Default parameter ----------
// TODO: Write a function calculateTotal(price, quantity, delivery = 40)
//       that RETURNS price * quantity + delivery.
// Tests:
// console.log(calculateTotal(250, 3));      // 790
// console.log(calculateTotal(250, 3, 0));   // 750
// console.log(calculateTotal(100, 1, 20));  // 120

function calculateTotal(price, quantity, delivery = 40) {
    return price * quantity + delivery;
}

console.log(calculateTotal(250, 3));      // 790
console.log(calculateTotal(250, 3, 0));   // 750
console.log(calculateTotal(100, 1, 20));  // 120


// ---------- Exercise 6: Minutes converter ----------
// TODO: Turn Lesson 1's exercise 7 into a function convertMinutes(totalMinutes)
//       that RETURNS a string like "135 minutes = 2 hours and 15 minutes".
// Tests:
// console.log(convertMinutes(135));  // 135 minutes = 2 hours and 15 minutes
// console.log(convertMinutes(60));   // 60 minutes = 1 hours and 0 minutes
// console.log(convertMinutes(45));   // 45 minutes = 0 hours and 45 minutes

function convertMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${totalMinutes} minutes = ${hours} hours and ${minutes} minutes`;
}

console.log(convertMinutes(135));  // 135 minutes = 2 hours and 15 minutes
console.log(convertMinutes(60));   // 60 minutes = 1 hours and 0 minutes
console.log(convertMinutes(45));   // 45 minutes = 0 hours and 45 minutes


// ---------- Exercise 7: Arrow functions ----------
// TODO: Write these as SHORT arrow functions (one line each, no { }):
//   celsiusToFahrenheit(c) → c * 9 / 5 + 32
//   isAdult(age)           → true if age >= 18
// Tests:
// console.log(celsiusToFahrenheit(0));    // 32
// console.log(celsiusToFahrenheit(100));  // 212
// console.log(isAdult(18));               // true
// console.log(isAdult(17));               // false

const celsiusToFahrenheit = c => c * 9 / 5 + 32;
const isAdult = age => age >= 18;

console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log(isAdult(18));               // true
console.log(isAdult(17));               // false




// ---------- Exercise 8: Leap year function ----------
// TODO: Write isLeapYear(year) that RETURNS true or false.
// Tests:
// console.log(isLeapYear(2024));  // true
// console.log(isLeapYear(2023));  // false
// console.log(isLeapYear(1900));  // false
// console.log(isLeapYear(2000));  // true

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2023));  // false
console.log(isLeapYear(1900));  // false
console.log(isLeapYear(2000));  // true


// ---------- Exercise 9 (challenge): Functions using functions ----------
// TODO: Write a function getDaysInFebruary(year) that RETURNS 29 or 28.
//       It must USE your isLeapYear function from exercise 8.
// Tests:
// console.log(getDaysInFebruary(2024));  // 29
// console.log(getDaysInFebruary(2023));  // 28
//
// TODO: Write a function getTicketPrice(age) (Lesson 2's exercise 10, as a function).
//       Seniors (60+) pay 50, adults (13 to 59) pay 200, kids (12 and under) pay 100.
//       Then write getGroupTotal(age1, age2, age3) that RETURNS the total
//       ticket price for 3 people, using getTicketPrice.
// Tests:
// console.log(getTicketPrice(70));          // 50
// console.log(getTicketPrice(12));          // 100
// console.log(getTicketPrice(13));          // 200
// console.log(getGroupTotal(10, 35, 65));   // 350

const getDaysInFebruary = year => isLeapYear(year) ? 29 : 28;

console.log(getDaysInFebruary(2024));  // 29
console.log(getDaysInFebruary(2023));  // 28    

const getTicketPrice = age => {
    if (age >= 60) {
        return 50;
    } else if (age >= 13) {
        return 200;
    } else {
        return 100;
    }
};

const getGroupTotal = (age1, age2, age3) => getTicketPrice(age1) + getTicketPrice(age2) + getTicketPrice(age3);

console.log(getTicketPrice(70));          // 50
console.log(getTicketPrice(12));          // 100
console.log(getTicketPrice(13));          // 200
console.log(getGroupTotal(10, 35, 65));   // 350



// ---------- Exercise 10: Scope (predict, then run) ----------
// Will each console.log work, or give an error? Predict first!
//
// const planet = "Earth";
// function explore() {
//   const rover = "Curiosity";
//   console.log(planet);   // A: works or error? // works
//   console.log(rover);    // B: works or error? // works
// }
// explore();
// console.log(planet);     // C: works or error? // works
// console.log(rover);      // D: works or error? // // error

const planet = "Earth";

function explore() {
    const rover = "Curiosity";
    console.log(planet);
    console.log(rover);
}
explore();
console.log(planet);
// console.log(rover); // This will give an error because rover is not defined in this scope.


// ---------- Exercise 11 (bug hunt) ----------
// This code has 4 bugs. Fix them so it prints:
// Hello, Prabhat! Your discount price is 900
//
function getDiscountPrice(price, discount) {
  const finalPrice = price - price * discount / 100;
  return finalPrice;
}

function buildMessage(name, price) {
  return `Hello, ${name}! Your discount price is ${price}`;
//   console.log("Message built");
}

const finalPrice = getDiscountPrice(1000, 10);
const message = buildMessage("Prabhat", finalPrice);
console.log(message);

// Hint: the discount should be 10 percent.
// Hint: one of the "bugs" doesn't break the output, but the line is useless.
