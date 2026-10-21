// Lesson 3 examples
// Run with: node javascript/03-functions/examples.js
// Guess each output BEFORE running.

// ---------- 1. Define and call ----------
function sayHello() {
  console.log("Hello!");
}
sayHello();
sayHello();

// ---------- 2. Parameters ----------
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Prabhat");
greet("Sam");

function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}
introduce("Prabhat", 20);

// ---------- 3. return ----------
function add(a, b) {
  return a + b;
}
const result = add(5, 3);
console.log(result);           // 8
console.log(add(10, 20) * 2);  // 60

// ---------- 4. return vs console.log ----------
function addAndPrint(a, b) {
  console.log(a + b);
}
function addAndReturn(a, b) {
  return a + b;
}
const x = addAndPrint(2, 3);   // prints 5
console.log(x);                // undefined!
const y = addAndReturn(2, 3);  // prints nothing
console.log(y);                // 5

// ---------- 5. return stops the function ----------
function checkAge(age) {
  if (age >= 18) {
    return "adult";
  }
  return "minor";
}
console.log(checkAge(25));  // adult
console.log(checkAge(12));  // minor

// ---------- 6. Default parameters ----------
function orderPizza(size, toppings = "cheese") {
  return `${size} pizza with ${toppings}`;
}
console.log(orderPizza("Large", "mushroom"));
console.log(orderPizza("Small"));

// ---------- 7. Scope ----------
const shopName = "Chai Point";
function makeTea() {
  const sugar = 2;
  console.log(`${shopName}: tea with ${sugar} sugar`); // can see shopName
}
makeTea();
// console.log(sugar); // ← uncomment to see the ReferenceError

// ---------- 8. Arrow functions ----------
const square = (n) => n * n;
console.log(square(4));  // 16

const isEven = (n) => n % 2 === 0;
console.log(isEven(10)); // true
console.log(isEven(7));  // false

// ---------- 9. Functions using functions ----------
function describe(n) {
  if (isEven(n)) {
    return `${n} is even`;
  }
  return `${n} is odd`;
}
console.log(describe(4));
console.log(describe(9));

// ---------- 10. Lesson 2's exercise 8, rewritten with a function ----------
function checkTruthy(value) {
  if (value) {
    return "truthy";
  }
  return "falsy";
}
console.log(checkTruthy(0));
console.log(checkTruthy("0"));
console.log(checkTruthy(""));
console.log(checkTruthy(" "));
