# Lesson 2: Making Decisions (Comparisons and `if` / `else`)

So far, your programs ran **every line, top to bottom**. Real programs need to **choose**:
- If the password is correct, log in. Otherwise, show an error.
- If the cart total is over 500, delivery is free.

That's what this lesson is about.

## 1. Comparison operators: asking yes/no questions

A comparison **always gives back a boolean** (`true` or `false`).

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `===` | is equal to | `5 === 5` | `true` |
| `!==` | is NOT equal to | `5 !== 3` | `true` |
| `>`   | greater than | `10 > 3` | `true` |
| `<`   | less than | `10 < 3` | `false` |
| `>=`  | greater than or equal | `5 >= 5` | `true` |
| `<=`  | less than or equal | `4 <= 5` | `true` |

```js
const age = 20;
console.log(age >= 18); // true
```

### ⚠️ `=` vs `===` (very important!)

| Symbol | Meaning |
|--------|---------|
| `=`    | **Put** a value in a box (assignment): `let x = 5;` |
| `===`  | **Ask** whether two values are equal: `x === 5` → `true` or `false` |

### ⚠️ `===` vs `==`

```js
console.log(5 === "5"); // false (different types: number vs string)
console.log(5 == "5");  // true  (== secretly converts types first 😬)
```

**Always use `===` and `!==`.** `==` causes confusing bugs. You saw the same kind of type surprise with `"5" + 5` in Lesson 1.

## 2. `if`: do something only when a condition is true

```js
const temperature = 35;

if (temperature > 30) {
  console.log("It's hot! Drink water.");
}
```

- The condition goes in `( )`
- The code to run goes in `{ }` (called a **block**)
- If the condition is `false`, the whole block is **skipped**

## 3. `if` / `else`: choose one of two paths

```js
const marks = 25;

if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

Exactly **one** of the two blocks runs, never both and never neither.

## 4. `else if`: more than two paths

```js
const marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 33) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Prints: Grade B
```

JavaScript checks from **top to bottom** and runs the **first** block whose condition is true, then skips the rest. **Order matters!** If you checked `marks >= 33` first, an 82 would get "Grade C".

## 5. Logical operators: combining conditions

| Operator | Name | True when... | Example |
|----------|------|-------------|---------|
| `&&` | AND | **both** sides are true | `age >= 18 && hasTicket` |
| `\|\|` | OR  | **at least one** side is true | `isWeekend \|\| isHoliday` |
| `!`  | NOT | flips true ↔ false | `!isLoggedIn` |

```js
const age = 20;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("You can enter the concert");
}

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No office today!");
}

const isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in");
}
```

## 6. Truthy and falsy

`if` doesn't need an actual `true` or `false`. JavaScript treats **any value** as true-ish or false-ish.

These 6 values are **falsy** (they act like `false`):
```
false   0   ""   null   undefined   NaN
```
**Everything else is truthy**, including `"0"`, `"false"`, and `" "` (a space).

```js
const userName = "";

if (userName) {
  console.log(`Welcome, ${userName}`);
} else {
  console.log("Please enter your name"); // ← this runs, because "" is falsy
}
```

## 7. The ternary operator: a short if/else

When you just need to **pick one of two values**:

```js
const age = 20;
const status = age >= 18 ? "adult" : "minor";
//             condition ? if true  : if false
console.log(status); // "adult"
```

Use it for simple choices only. If it gets long, use a normal `if`/`else`.

## Common beginner mistakes

| Mistake | Problem |
|---------|---------|
| `if (x = 5)` | Uses `=` (put) instead of `===` (ask). This always runs! |
| `if (5 == "5")` | `==` converts types. Use `===` |
| Wrong `else if` order | The first true condition wins, so put the most specific/strict checks first |
| `if (age > 18 && < 60)` | Each side needs a full comparison: `age > 18 && age < 60` |

---

## Your turn

1. Run `node javascript/02-conditions/examples.js`. **Guess each output first!**
2. Change the values at the top of each example (age, marks, and so on) and run it again to see different paths.
3. Solve `exercises.js` (write your answers in a new `solutions.js`, same as Lesson 1).
4. Ask me to review.
5. Add a Lesson 2 section to `notes/learning-log.md`.
