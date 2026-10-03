# Day 08 Notes: ES6+ Features

## 1. Template literals

Backticks create template literals. An expression inside `${...}` is evaluated and inserted into the string. Ordinary single or double quotes leave that placeholder as literal text.

```js
const name = "Prabhat";
const age = 20;
console.log(`Hello, ${name}! Next year you will be ${age + 1}.`);
```

Template literals preserve line breaks and indentation. Place multiline text carefully if you do not want leading spaces. Escape a backtick with a backslash; escaping the dollar sign prevents interpolation.

Interpolation creates a string. It does not turn untrusted text into safe HTML; these console exercises simply print values.

## 2. Destructuring extracts values

Array destructuring matches by position:

```js
const [first, second] = [10, 20, 30];
console.log(first, second); // 10 20
```

Object destructuring matches by property name:

```js
const book = { title: "The Hobbit", author: "J. R. R. Tolkien" };
const { title: bookTitle, author } = book;
console.log(bookTitle); // The Hobbit
```

The colon renames the local binding; it does not rename the object's property. Destructuring does not remove values from the original.

Missing values become undefined unless a default is supplied. Defaults apply to undefined, not null. Destructuring an object from null or undefined throws.

Destructuring object values does not deeply clone them. Extracted object references still refer to the same underlying objects.

## 3. Spread expands

```js
const original = [1, 2, 3];
const expanded = [...original, 4, 5];
```

Array spread expands an iterable into another array. It can also expand arguments in a call: sum(...original).

The new outer array is independent, so changing expanded[0] does not change original[0] for these primitive values. Nested objects remain shared because spread is shallow.

## 4. Rest collects

```js
function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum());       // 0
```

The rest parameter collects remaining arguments into an actual array. It must be the final parameter. The reduce initial value makes an empty call return zero.

In const [head, ...remaining] = numbers, rest collects the remaining array values.

Spread and rest use the same three-dot syntax in different positions. Spread expands an existing value; rest gathers values into a new collection.

The feature validates that all sum arguments are finite numbers. This rejects numeric strings, but normal floating-point rounding and possible overflow still apply to arithmetic.

## 5. Default parameters

A default second argument of 1 makes multiply(5) return 5.

| Call | Effective second value | Result in the feature |
| --- | --- | --- |
| multiply(5) | 1 | 5 |
| multiply(5, undefined) | 1 | 5 |
| multiply(5, 3) | 3 | 15 |
| multiply(5, 0) | 0 | 0 |
| multiply(5, null) | null | TypeError from validation |

Null does not trigger a default. The feature rejects it instead of relying on numeric coercion. Default expressions are evaluated when the function is called and the relevant argument is undefined.

## 6. Property and method shorthand

```js
const name = "Prabhat";
const person = {
  name,
  greet() {
    return `Hello, ${this.name}!`;
  },
};
```

The shorthand property name means name: name. The method shorthand defines a regular method with receiver-based this, so person.greet() reads person.name. It is not an arrow function.

## 7. Computed property names

```js
const field = "language";
const profile = { [field]: "JavaScript" };
console.log(profile.language); // JavaScript
```

The brackets evaluate the expression to obtain the property key. Without brackets, { field: "JavaScript" } creates a literal key named field.

The expression is evaluated when the object is created. Changing the field variable later does not rename an existing property. If later entries use the same key, the later value wins.

## Common mistakes

- Using ordinary quotes and expecting interpolation.
- Accidentally preserving unwanted whitespace in a multiline string.
- Confusing array positions with object property names.
- Thinking an alias in destructuring renames the original property.
- Treating spread as a deep copy.
- Placing a rest parameter before another parameter.
- Assuming zero or null triggers a default.
- Expecting a computed key to follow later variable changes.

## Quick review

1. What changes when ordinary quotes become backticks?
2. How do array and object destructuring choose values?
3. What does the colon mean in title: bookTitle?
4. Does spread copy nested objects?
5. Why does sum() return zero?
6. Does multiply(5, 0) use the default?
7. When is a computed property name evaluated?

Predict each output, run the demos, and explain any differences.
