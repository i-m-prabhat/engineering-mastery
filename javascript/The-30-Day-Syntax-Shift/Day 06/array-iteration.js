"use strict";

// Feature 3: collect and print the same values using for and forEach.
const numbers = [1, 2, 3, 4, 5];
const visitedByFor = [];
console.log("for:");
for (let index = 0; index < numbers.length; index++) {
  visitedByFor.push(numbers[index]);
  console.log("Index:", index, "| value:", numbers[index]);
}

const visitedByForEach = [];
console.log("forEach:");
numbers.forEach((number, index) => {
  visitedByForEach.push(number);
  console.log("Index:", index, "| value:", number);
});

console.log("for values:", visitedByFor);
console.log("forEach values:", visitedByForEach);

// forEach on an empty array calls its callback zero times.
let emptyVisits = 0;
[].forEach(() => { emptyVisits++; });
console.log("Empty visits:", emptyVisits);

// Use for when you need to break early.
console.log("Stop before 4:");
for (const number of numbers) {
  if (number === 4) break;
  console.log(number);
}
