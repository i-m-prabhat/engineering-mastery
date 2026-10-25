"use strict";

// Feature 1: methods read and update their receiver.
const book = {
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  year: 1937,
  describe() {
    return `${this.title} by ${this.author}`;
  },
  summary() {
    return `${this.title} (${this.year})`;
  },
  updateYear(year) {
    if (!Number.isInteger(year) || year < 1) {
      throw new RangeError("year must be a positive integer");
    }
    this.year = year;
  },
};

console.log("Description:", book.describe());
console.log("Before edit:", book.summary());
book.updateYear(1938); // Illustrative edit only.
console.log("After edit:", book.summary());

// Reuse a method with a different receiver: no closed-over book variable.
const otherBook = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  summary: book.summary,
};
console.log("Other receiver:", otherBook.summary());
console.log("First receiver unchanged:", book.summary());

for (const invalidYear of [0, -1, 1938.5, "1938"]) {
  try {
    book.updateYear(invalidYear);
  } catch (error) {
    console.log("Invalid year:", invalidYear, "|", error.name);
  }
}
console.log("Year after invalid edits:", book.year);
