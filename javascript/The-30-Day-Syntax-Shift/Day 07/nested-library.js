"use strict";

// Feature 2: navigate an object -> array -> book objects.
const library = {
  name: "Community Library",
  books: [
    { title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ],
};
console.log("Library:", library.name);
library.books.forEach(book => console.log("Title:", book.title));
console.log("First author:", library.books[0].author);

// The nested book is shared with any variable referring to that same object.
const selectedBook = library.books[0];
selectedBook.year = 1938; // Practice edit.
console.log("Edited first year:", library.books[0].year);
console.log("Second year unchanged:", library.books[1].year);

// An empty collection has no titles to visit.
const emptyLibrary = { name: "New Library", books: [] };
console.log("Empty library:", emptyLibrary.name, "| count:", emptyLibrary.books.length);
emptyLibrary.books.forEach(book => console.log(book.title));
