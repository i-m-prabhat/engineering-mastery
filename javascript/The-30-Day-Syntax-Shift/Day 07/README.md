# Day 07: Objects

**Status:** Solutions and learning notes added.

## Goal

Work with properties, methods, `this`, nested objects, and iteration.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Create a book with title, author, and year; log it.
2. Read and log its title and author.
3. Add a method returning the title and author.
4. Add a method that updates its year; log the updated object.
5. Create a library with a name and an array of book objects.
6. Log the library name and every book title.
7. Add a method using `this` to return title and year.
8. Use `for...in` to log properties and values.
9. Log keys and values using `Object.keys` and `Object.values`.

## Feature Requests

- [x] Book object and methods script.
- [x] Nested library script.
- [x] Object iteration script.

## Check Your Work

Update one book's year, list multiple titles, and confirm method calls read the receiving object's properties.

## Solution Files

- [solutions.js](solutions.js): all nine numbered tasks with comments.
- [book-object.js](book-object.js): book methods, year updates, validation, and receiver-based this.
- [nested-library.js](nested-library.js): nested books, shared references, and an empty library.
- [object-iteration.js](object-iteration.js): own versus inherited properties and dynamic property access.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 07/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 07/book-object.js"
node "javascript/The-30-Day-Syntax-Shift/Day 07/nested-library.js"
node "javascript/The-30-Day-Syntax-Shift/Day 07/object-iteration.js"
```

Expected highlights:

- The description returns `The Hobbit by J. R. R. Tolkien`.
- The practice year update changes the first book's year from 1937 to 1938.
- The library lists The Hobbit and Pride and Prejudice; the second book's year remains 1813.
- Reusing summary on another book reads that receiving object's title and year.
- Invalid year updates throw a caught RangeError and leave the year unchanged.
- Task 9 includes enumerable methods among the book's keys and values.
- In the inheritance demo, unguarded for...in includes category; the ownership guard and Object.keys exclude it.
- An empty library lists no titles, and Object.keys on an empty object returns [].

Object and function formatting in console output may vary by runtime. Compare property values and method results rather than formatting.

[Back to the 30-day roadmap](../README.md)
