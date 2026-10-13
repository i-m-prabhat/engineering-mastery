# Lesson 1: Your First Program, Variables, and Data Types

## What is a program?

A program is a list of instructions the computer follows **from top to bottom**, one line at a time.

JavaScript is a language for writing those instructions. **Node.js** is the program that reads your JavaScript file and runs it.

## Running a file

Open the terminal in VS Code (`` Ctrl + ` ``) and run:

```
node javascript/01-basics/examples.js
```

`node` means "run this JavaScript file". Whatever the program prints shows up in the terminal.

## 1. Printing: `console.log`

```js
console.log("Hello, world!");
```

`console.log(...)` prints whatever is inside the brackets. It's your main tool for seeing what your code is doing.

## 2. Comments

```js
// This is a comment. The computer ignores it.
// Use comments to explain WHY you wrote something.
```

## 3. Variables: boxes that hold values

A variable is a **named box** that stores a value so you can use it later.

```js
let age = 20;          // a box named "age" holding 20
const name = "Prabhat"; // a box named "name" holding "Prabhat"
```

| Keyword | Can you change the value later? | When to use |
|---------|-------------------------------|-------------|
| `const` | ❌ No | **Use this by default** |
| `let`   | ✅ Yes | Only when the value needs to change |
| `var`   | ✅ Yes | Old style. **Don't use it** |

```js
let score = 10;
score = 15;        // fine, let can change

const pi = 3.14;
pi = 3;            // ERROR! const cannot change
```

**Naming rules:** names can't start with a number and can't contain spaces. Use `camelCase` for names with more than one word: `firstName`, `totalPrice`.

## 4. Data types: what kind of value is it?

| Type | Example | Meaning |
|------|---------|---------|
| `number`    | `42`, `3.5`, `-7` | Any number, whole or decimal |
| `string`    | `"hello"`, `'hi'` | Text, always inside quotes |
| `boolean`   | `true`, `false` | Yes or no |
| `undefined` | `let x;` | A box that exists but has nothing in it yet |
| `null`      | `let x = null;` | Empty on purpose: "I set this to nothing" |

Use `typeof` to check a value's type:

```js
console.log(typeof 42);      // "number"
console.log(typeof "42");    // "string" (the quotes make it text!)
console.log(typeof true);    // "boolean"
```

## 5. Operators: doing math

```js
5 + 2   // 7   addition
5 - 2   // 3   subtraction
5 * 2   // 10  multiplication
5 / 2   // 2.5 division
5 % 2   // 1   remainder ("what's left over after dividing")
2 ** 3  // 8   power (2 × 2 × 2)
```

`%` (remainder) is very useful: `number % 2 === 0` tells you a number is **even**.

## 6. Working with strings

```js
const first = "Prabhat";

// Joining strings with + (called "concatenation")
console.log("Hello, " + first + "!");

// Template literals: backticks ` and ${ } (the easier way)
console.log(`Hello, ${first}!`);

console.log(first.length);        // 7 (number of characters)
console.log(first.toUpperCase()); // "PRABHAT"
```

⚠️ **Trap:** `+` with a string *joins* instead of adding:

```js
console.log(5 + 5);     // 10
console.log("5" + 5);   // "55"  ← joined as text!
```

## Common beginner errors

| Error message | What it usually means |
|---------------|----------------------|
| `ReferenceError: x is not defined` | Typo in a variable name, or you used it before creating it |
| `TypeError: Assignment to constant variable` | You tried to change a `const` |
| `SyntaxError: ...` | Missing quote, bracket, or similar |

Errors are normal. Read the message and the line number, because they tell you exactly where to look.

---

## Your turn

1. Run `node javascript/01-basics/examples.js` and compare the output with the code.
2. **Change things** in `examples.js` and run it again. Break it on purpose and read the error.
3. Open `exercises.js`, solve each one, and run it with `node javascript/01-basics/exercises.js`.
4. When you're done, ask me to review your solutions.
5. Write 3–5 lines in `notes/learning-log.md` about what you learned, **in your own words**.
