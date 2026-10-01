"use strict";

// Feature 1: observe both the mutated array and each method's return value.
const numbers = [1, 2, 3, 4, 5];
console.log("Initial:", numbers);
const lengthAfterPush = numbers.push(6);
console.log("push returns length:", lengthAfterPush, "| array:", numbers);
const removedLast = numbers.pop();
console.log("pop returns value:", removedLast, "| array:", numbers);
const removedFirst = numbers.shift();
console.log("shift returns value:", removedFirst, "| array:", numbers);
const lengthAfterUnshift = numbers.unshift(1);
console.log("unshift returns length:", lengthAfterUnshift, "| array:", numbers);

// Removing from an empty array returns undefined without throwing.
const empty = [];
console.log("Empty pop:", empty.pop());
console.log("Empty shift:", empty.shift());
console.log("Empty length:", empty.length);

// A spread copy has an independent outer array.
const copy = [...numbers];
copy.push(99);
console.log("Original after copy push:", numbers);
console.log("Copy after push:", copy);
