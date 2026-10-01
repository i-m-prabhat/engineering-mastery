"use strict";

// Task 1: array creation.
const numbers = [1, 2, 3, 4, 5];
console.log("Task 1 - array:", numbers);

// Task 2: indices start at zero.
console.log("Task 2 - first:", numbers[0]);
console.log("Task 2 - last:", numbers[numbers.length - 1]);

// Tasks 3–6: these methods mutate the same array.
numbers.push(6);
console.log("Task 3 - after push:", numbers);
const removedLast = numbers.pop();
console.log("Task 4 - removed:", removedLast, "| after pop:", numbers);
const removedFirst = numbers.shift();
console.log("Task 5 - removed:", removedFirst, "| after shift:", numbers);
numbers.unshift(1);
console.log("Task 6 - after unshift:", numbers);

// Tasks 7–9: transform, select, and aggregate without changing the input.
const doubled = numbers.map(number => number * 2);
console.log("Task 7 - doubled:", doubled);
const evens = numbers.filter(number => number % 2 === 0);
console.log("Task 8 - evens:", evens);
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Task 9 - sum:", total);

// Tasks 10–11: visit values in index order.
console.log("Task 10 - for loop:");
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
console.log("Task 11 - forEach:");
numbers.forEach(number => console.log(number));

// Tasks 12–13: an array whose elements are row arrays.
const matrix = [[1, 2, 3], [4, 5, 6]];
console.log("Task 12 - matrix:", matrix);
console.log("Task 13 - row 2, column 3:", matrix[1][2]); // 6
console.log("All thirteen task demonstrations finished.");
