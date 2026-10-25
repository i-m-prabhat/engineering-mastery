"use strict";

// Task 1: related values belong to properties on a book object.
const book = { title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 };
console.log("Task 1 - book:", book);

// Task 2: dot notation reads properties.
console.log("Task 2 - title:", book.title);
console.log("Task 2 - author:", book.author);

// Task 3: a function stored as a property is a method.
book.describe = function () {
  return `${this.title} by ${this.author}`;
};
console.log("Task 3 - description:", book.describe());

// Task 4: mutate the receiving object's year.
book.updateYear = function (year) {
  if (!Number.isInteger(year) || year < 1) {
    throw new RangeError("year must be a positive integer");
  }
  this.year = year;
};
book.updateYear(1938); // Practice edit, not a publication-history claim.
console.log("Task 4 - updated book:", book);

// Task 5: nest book objects inside an array property.
const library = {
  name: "Community Library",
  books: [
    book,
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ],
};
console.log("Task 5 - library:", library);

// Task 6: access nested data.
console.log("Task 6 - library name:", library.name);
library.books.forEach(item => console.log("Task 6 - title:", item.title));

// Task 7: this refers to the receiver when invoked as book.summary().
book.summary = function () {
  return `${this.title} (${this.year})`;
};
console.log("Task 7 - summary:", book.summary());

// Task 8: for...in includes inherited enumerable properties, so guard ownership.
console.log("Task 8 - own enumerable properties:");
for (const key in book) {
  if (Object.hasOwn(book, key)) {
    console.log(key, ":", book[key]);
  }
}

// Task 9: these methods return own enumerable string-keyed properties.
console.log("Task 9 - keys:", Object.keys(book));
console.log("Task 9 - values:", Object.values(book));
console.log("All nine task demonstrations finished.");
