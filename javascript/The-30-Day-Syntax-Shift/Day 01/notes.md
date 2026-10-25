# Day 01 Notes: Variables and Data Types

## 1. A variable gives a value a name

```js
let points = 10;
points = 25;
console.log(points); // 25
```

`let points` declares the variable, `= 10` initializes it, and `points = 25` reassigns it. Reassignment replaces the value associated with the name. It does not declare a new variable.

## 2. Choosing var, let, or const

| Keyword | Scope | Reassignment | Redeclaration in the same scope |
| --- | --- | --- | --- |
| `var` | Function scope, or script-global scope outside a function | Yes | Generally allowed for another `var` declaration |
| `let` | Block scope | Yes | No |
| `const` | Block scope | No | No |

A block is a group of statements inside `{ ... }`, such as an `if` body. Node.js files also have module boundaries; a top-level `var` in a Node module is not a property of the global object.

Use `const` when the binding will stay the same. Use `let` when you intend to reassign it. Learn `var` to read older code and complete this exercise.

`const` needs an initial value. `let pending;` is valid and initially contains `undefined`. A normal `const pending;` declaration is a syntax error.

`var` declarations are initialized to `undefined` before their declaration executes. Accessing `let` or `const` before its declaration executes throws a `ReferenceError` (the temporal dead zone).

## 3. Values have types

JavaScript is dynamically typed: a `let` variable can hold a number first and a string later. The type belongs to the current value.

```js
let answer = 42;
console.log(typeof answer); // number
answer = "forty-two";
console.log(typeof answer); // string
```

| Value | `typeof` result | Meaning |
| --- | --- | --- |
| `42` | `"number"` | Integer or floating-point number |
| `"42"` | `"string"` | Text, even when it contains digits |
| `true` | `"boolean"` | True or false |
| `undefined` | `"undefined"` | Missing or not yet assigned value |
| `null` | `"object"` | Intentional empty value; the type result is a historical quirk |
| `42n` | `"bigint"` | Integer represented as a BigInt |
| `Symbol("id")` | `"symbol"` | Unique symbol value |
| `{ name: "Prabhat" }` | `"object"` | Object with named properties |
| `[1, 2, 3]` | `"object"` | Array, which is a kind of object |

The seven primitive types are string, number, boolean, undefined, null, bigint, and symbol. Objects are non-primitive. Functions are callable objects, and `typeof` reports `"function"` for them.

`typeof` returns a string. It does not distinguish arrays from other objects. Use `Array.isArray(value)` for arrays and `value === null` for null.

## 4. const does not freeze objects

```js
const learner = { name: "Prabhat" };
learner.name = "Sam"; // Allowed: change a property.

const topics = ["variables"];
topics.push("types"); // Allowed: change the array contents.
```

Assigning a different object to `learner` would throw a `TypeError`. Changing a property is mutation; assigning a different value to the variable is reassignment. `const` prevents reassignment, not mutation.

Object assignment also copies a reference to the same object:

```js
const original = { points: 0 };
const alias = original;
alias.points = 6;
console.log(original.points); // 6
```

## 5. The intentional error in the solution

```js
const goal = 6;
try {
  goal = 7;
} catch (error) {
  console.log(error.name); // TypeError
}
console.log(goal); // 6
```

The assignment fails at runtime. The catch block handles that expected error so later examples still run. Error messages can vary across runtimes; the scripts print the error name for a stable demonstration. Catching the error does not make the assignment succeed.

## Common mistakes

- Treating `"42"` as a number because it contains digits.
- Expecting `typeof []` to return `"array"`.
- Assuming `typeof null` means null is an ordinary object.
- Trying to reassign a `const` binding.
- Assuming a `const` object cannot change.
- Confusing `=` (assignment) with `===` (strict equality comparison).

## Quick review

1. Which declaration would you choose for a score that changes?
2. What does `typeof false` return?
3. How do you reliably identify an array?
4. Why can a `const` array accept a new element?
5. After a failed const reassignment is caught, what value remains?

Run the scripts, predict the output before each statement, and explain any mismatch in your own words.
