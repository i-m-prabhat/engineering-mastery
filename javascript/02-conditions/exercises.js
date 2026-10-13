// Lesson 2 exercises
// Copy this file to solutions.js and write your answers there.
// Run with: node javascript/02-conditions/solutions.js
// TIP: For each exercise, change the starting value and run again to test EVERY path.

// ---------- Exercise 1: Warm-up (Lesson 1 review) ----------
// Without running it, write down what each line prints. Then run to check.
// console.log(2 + 3 + "1");
// console.log("2" + 3 + 1);
// console.log(10 % 3 === 1);


// ---------- Exercise 2: Voting ----------
// const age = 16;
// TODO: Print "You can vote" if age is 18 or more, otherwise "Too young to vote"
// Expected output (for 16): Too young to vote


// ---------- Exercise 3: Even or odd ----------
// const num = 14;
// TODO: Print "14 is even" or "14 is odd" (use a template literal!)
// Expected output: 14 is even


// ---------- Exercise 4: Grade calculator ----------
// const marks = 67;
// TODO: Print the grade:
//   90 and above → "A"
//   75 to 89     → "B"
//   50 to 74     → "C"
//   33 to 49     → "D"
//   below 33     → "Fail"
// Expected output (for 67): C
// Test with: 95, 75, 50, 33, 10


// ---------- Exercise 5: Free delivery ----------
// const cartTotal = 450;
// const isPrimeMember = true;
// TODO: Delivery is FREE if cartTotal is 500 or more, OR the user is a prime member.
//       Otherwise delivery costs 40.
//       Print the final amount to pay.
// Expected output (for 450, prime): Pay: 450
// Expected output (for 450, not prime): Pay: 490


// ---------- Exercise 6: Login check ----------
// const username = "admin";
// const password = "1234";
// TODO: Print "Login successful" only if username is "admin" AND password is "1234".
//       Otherwise print "Invalid credentials".
// Expected output: Login successful


// ---------- Exercise 7: Ternary ----------
// const balance = 0;
// TODO: Using a TERNARY (not if/else), create a variable message that is
//       "Account active" if balance > 0, otherwise "Please add money". Print it.
// Expected output: Please add money


// ---------- Exercise 8: Truthy / falsy quiz ----------
// Without running, predict: does each one print "truthy" or "falsy"?
// Then write the code to check.
// Values: 0, "0", "", " ", null, "false", 100
// Hint: if (value) { console.log("truthy") } else { console.log("falsy") }


// ---------- Exercise 9 (challenge): Leap year ----------
// const year = 2024;
// A year is a leap year if:
//   it is divisible by 4 AND NOT divisible by 100,
//   OR it is divisible by 400.
// TODO: Print "2024 is a leap year" or "2024 is not a leap year"
// Test with: 2024 (leap), 2023 (not), 1900 (not), 2000 (leap)


// ---------- Exercise 10 (bug hunt) ----------
// This code has 3 bugs. Fix them so it prints: Ticket price: 100
// const visitorAge = 10;
// let price;
// if (visitorAge = 60) {
//   price = 50;
// } else if (visitorAge > 12 && < 60) {
//   price = 200;
// } else {
//   price == 100;
// }
// console.log(`Ticket price: ${price}`);
