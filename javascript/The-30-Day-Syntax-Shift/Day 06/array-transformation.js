"use strict";

// Feature 2: each operation reads the input array without mutating it.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
const evens = numbers.filter(number => number % 2 === 0);
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", total);

// The initial value makes reducing an empty array well-defined.
const empty = [];
console.log("Empty map:", empty.map(number => number * 2));
console.log("Empty filter:", empty.filter(number => number % 2 === 0));
console.log("Empty sum:", empty.reduce((sum, number) => sum + number, 0));

const signed = [-3, -2, 0, 2, 3];
console.log("Signed evens:", signed.filter(number => number % 2 === 0));
console.log("Signed sum:", signed.reduce((sum, number) => sum + number, 0));
