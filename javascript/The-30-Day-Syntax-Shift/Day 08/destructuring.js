"use strict";

// Feature 2: positions for arrays; property names for objects.
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log("First two:", first, second);
const [head, ...remaining] = numbers;
console.log("Head:", head, "| remaining:", remaining);
const [fallback = 99] = [];
console.log("Missing element default:", fallback);

const book = { title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 };
const { title: bookTitle, author, publisher = "Unknown" } = book;
console.log("Book:", bookTitle, "|", author);
console.log("Missing publisher default:", publisher);
console.log("Original title unchanged:", book.title);

// A destructuring default replaces undefined, not null.
const { rating = 5 } = { rating: null };
console.log("Null rating stays null:", rating);
