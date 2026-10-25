"use strict";

// Feature 3: compare iteration methods on ordinary data properties.
const book = { title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 };
const ownPairs = [];
console.log("for...in with ownership guard:");
for (const key in book) {
  if (Object.hasOwn(book, key)) {
    ownPairs.push([key, book[key]]);
    console.log(key, ":", book[key]);
  }
}
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
console.log("Entries:", Object.entries(book));

// An inherited enumerable property appears in for...in but not Object.keys.
const inheritedBook = Object.assign(
  Object.create({ category: "fiction" }),
  { title: "Practice Book", year: 2026 },
);
const allEnumerableKeys = [];
const ownEnumerableKeys = [];
for (const key in inheritedBook) {
  allEnumerableKeys.push(key);
  if (Object.hasOwn(inheritedBook, key)) ownEnumerableKeys.push(key);
}
console.log("Including inherited keys:", allEnumerableKeys);
console.log("Own keys only:", ownEnumerableKeys);
console.log("Object.keys also excludes inherited:", Object.keys(inheritedBook));
console.log("Empty object keys:", Object.keys({}));

// Dynamic property names require bracket notation.
const field = "title";
console.log("Dynamic field:", book[field]);
