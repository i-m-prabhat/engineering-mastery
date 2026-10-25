# Day 07 Notes: Objects

## 1. Group related values

An object stores properties as keys and values:

```js
const book = {
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  year: 1937,
};
console.log(book.title);
```

Use dot notation for a known property name. Use brackets for a name stored in a variable:

```js
const field = "title";
console.log(book[field]); // The Hobbit
```

book.field would read the literal property named field. Reading a nonexistent ordinary property returns undefined. Object.hasOwn(book, key) checks whether the property belongs directly to book, even if its value is undefined.

## 2. Methods are functions on objects

```js
const book = {
  title: "Practice Book",
  year: 2026,
  summary() {
    return `${this.title} (${this.year})`;
  },
};
console.log(book.summary()); // Practice Book (2026)
```

The method reads data through this instead of hard-coding a particular object's variable name. A regular function assigned later, as in solutions.js, can also act as a method.

Returning a description gives the caller a reusable string. Logging the description is a separate step.

## 3. this depends on the call

For the ordinary call book.summary(), book is the receiver. Calling the same regular method as otherBook.summary() reads otherBook's properties instead.

Do not use an arrow function when you need this receiver behavior. Arrow functions capture this from their surrounding context.

Also avoid detaching a method and assuming it remembers its object:

```js
const summarize = book.summary;
// summarize() loses the book receiver; in these strict scripts this is undefined.
```

Call through the object, or explicitly bind a receiver when learning that later.

## 4. Update properties without reassigning the binding

A const object can still have properties changed or methods added. The binding cannot be reassigned to a different object.

The updateYear method validates a positive integer before assignment. Invalid input throws a RangeError without changing the previous year. The year edits in these exercises illustrate mutation; they do not revise publication history.

## 5. Nest objects and arrays

```js
const library = {
  name: "Community Library",
  books: [
    { title: "The Hobbit", year: 1937 },
    { title: "Pride and Prejudice", year: 1813 },
  ],
};
console.log(library.books[0].title); // The Hobbit
```

Read the path one step at a time: library, its books array, the first book, then its title.

Loop over library.books to list every title. An empty books array visits zero items. Accessing a property on an absent book, such as library.books[9].title, throws because that array entry is undefined.

## 6. Object references are shared

```js
const selected = library.books[0];
selected.year = 1938;
console.log(library.books[0].year); // 1938
```

selected and the array entry refer to the same object. Assignment did not clone the book. Other distinct book objects remain unchanged.

Likewise, spreading an object creates only a shallow copy; nested arrays and objects remain shared unless copied separately.

## 7. Iterate deliberately

| Approach | What it visits or returns |
| --- | --- |
| for...in | Enumerable string keys, including inherited ones |
| Object.keys(object) | Array of own enumerable string keys |
| Object.values(object) | Array of corresponding own enumerable values |
| Object.entries(object) | Array of own enumerable key/value pairs |

An ownership guard keeps a for...in loop focused on the object's direct properties:

```js
for (const key in book) {
  if (Object.hasOwn(book, key)) {
    console.log(key, book[key]);
  }
}
```

These approaches exclude symbol keys. Object.keys, values, and entries also exclude non-enumerable properties. The demos use Node.js with Object.hasOwn support.

Methods added with ordinary assignment or object-literal method syntax are enumerable too. Therefore the task solution's keys and values include its methods, not just title, author, and year. Function formatting in console output can vary by runtime.

## 8. Inherited properties

An object's prototype can provide properties that the object does not directly own. The iteration demo creates a prototype containing category and an object with its own title/year.

The unguarded for...in loop includes category. The guarded loop and Object.keys exclude it. This is an introduction to inheritance behavior, not a requirement to build every ordinary record with a custom prototype.

## Common mistakes

- Writing book.field when the key is stored in field.
- Assuming an object assignment clones its contents.
- Expecting const to freeze properties.
- Using an arrow method when receiver-based this is needed.
- Detaching a method and losing its receiver.
- Assuming for...in visits only direct properties.
- Forgetting that enumerable methods appear in keys and values.
- Reading a nested property before checking that the parent exists.

## Quick review

1. When should you use brackets instead of dot notation?
2. Why can a const book have its year changed?
3. Which object does this refer to in otherBook.summary()?
4. Why does updating selectedBook change library.books[0]?
5. How does Object.keys differ from for...in?
6. Do enumerable methods appear in Object.values?
7. What happens when the library has no books?

Predict the outputs, run the demos, and explain any differences.
