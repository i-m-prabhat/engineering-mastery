# Lesson 3: Functions

## Why functions?

In Lesson 2, Exercise 8, you wrote this **seven times**:

```js
if (0) {
  console.log("truthy");
} else {
  console.log("falsy");
}
```

That's 35 lines to do one thing. With a function, you write the logic **once** and reuse it:

```js
function checkTruthy(value) {
  if (value) {
    console.log("truthy");
  } else {
    console.log("falsy");
  }
}

checkTruthy(0);
checkTruthy("0");
checkTruthy("");
// ...one line per value!
```

A **function** is a named, reusable block of code. You **define** it once and **call** it as many times as you want.

Functions also make code easier to:
- **read:** `isLeapYear(2024)` explains itself
- **fix:** a bug fixed in one place is fixed everywhere
- **test:** you can try many inputs quickly

## 1. Defining and calling a function

```js
// DEFINE (create the recipe; nothing runs yet)
function sayHello() {
  console.log("Hello!");
}

// CALL (actually run it) using ()
sayHello(); // Hello!
sayHello(); // Hello!
```

Defining a function is like writing a recipe. Calling it is like actually cooking. **Without `()`, nothing happens.**

## 2. Parameters and arguments: giving input to a function

```js
function greet(name) {        // name is a PARAMETER (a placeholder)
  console.log(`Hello, ${name}!`);
}

greet("Prabhat");   // "Prabhat" is an ARGUMENT (the real value)
greet("Sam");
```

- **Parameter:** the variable name in the definition (`name`)
- **Argument:** the actual value you pass in when calling (`"Prabhat"`)

Multiple parameters are separated by commas:

```js
function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}

introduce("Prabhat", 20);
```

The **order matters**: the first argument goes to the first parameter, and so on.

## 3. `return`: getting a value back ⭐ most important part

So far, the functions **print** something. But usually you want a function to **give back** a value that you can store and use later.

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 3);  // add(5, 3) becomes 8
console.log(result);       // 8
console.log(add(10, 20) * 2); // 60, because you can use the returned value directly
```

### `return` vs `console.log` (the #1 beginner confusion)

```js
function addAndPrint(a, b) {
  console.log(a + b);   // shows it on screen, then throws it away
}

function addAndReturn(a, b) {
  return a + b;         // hands the value back to whoever called it
}

const x = addAndPrint(2, 3);   // prints 5
console.log(x);                // undefined ← nothing was returned!

const y = addAndReturn(2, 3);  // prints nothing
console.log(y);                // 5
```

| | `console.log` | `return` |
|---|---|---|
| What it does | Shows a value **to you** on the screen | Gives a value **back to the code** |
| Can you store the result? | ❌ No | ✅ Yes |
| Use it for | Debugging, final output | Almost every function |

**Rule of thumb:** functions should usually **return**, and you `console.log` the result *outside* the function.

### `return` stops the function immediately

```js
function checkAge(age) {
  if (age >= 18) {
    return "adult";
  }
  return "minor";            // only reached if age < 18
  console.log("never runs"); // ❌ code after return never runs
}
```

This lets you skip the `else`. Once a `return` runs, the function is finished.

## 4. Default parameters

```js
function orderPizza(size, toppings = "cheese") {
  return `${size} pizza with ${toppings}`;
}

console.log(orderPizza("Large", "mushroom")); // Large pizza with mushroom
console.log(orderPizza("Small"));             // Small pizza with cheese
```

If you don't pass an argument, the default value is used. Without a default, a missing argument is `undefined`.

## 5. Scope: where variables live

Variables created **inside** a function only exist inside that function.

```js
function makeTea() {
  const sugar = 2;          // lives only inside makeTea
  console.log(sugar);       // 2 ✅
}

makeTea();
console.log(sugar);         // ❌ ReferenceError: sugar is not defined
```

Variables created **outside** (global) can be used inside:

```js
const shopName = "Chai Point";

function welcome() {
  console.log(`Welcome to ${shopName}`); // ✅ works
}
```

Think of a function like a **room with one-way glass**: code inside can see out, but code outside can't see in.

**Good habit:** pass values in as **parameters** and get them out with **return**, rather than reaching for outside variables.

## 6. Arrow functions: a shorter way to write functions

Modern JavaScript has a shorter syntax:

```js
// Normal function
function square(n) {
  return n * n;
}

// Arrow function: the same thing
const square = (n) => {
  return n * n;
};

// Arrow function, short form: if it's ONE expression, skip { } and return
const square = (n) => n * n;
```

All three do exactly the same thing. (In real code you'd pick **one**, because you can't create two `const`s with the same name.) You'll see arrow functions **everywhere** in real code, so get comfortable reading them. For now, use whichever feels clearer to you.

## 7. Functions using other functions

Small functions that each do one thing can be combined:

```js
const isEven = (n) => n % 2 === 0;

function describe(n) {
  if (isEven(n)) {
    return `${n} is even`;
  }
  return `${n} is odd`;
}

console.log(describe(4)); // 4 is even
```

**One function = one job.** That's how professionals keep big programs manageable.

## Common beginner mistakes

| Mistake | What happens |
|---------|-------------|
| Forgetting `return` | Function gives back `undefined` |
| `console.log` instead of `return` | Value is printed but can't be used |
| Calling without `()`: `sayHello` | Nothing runs. It just refers to the function |
| Code after `return` | Never runs |
| Using a variable from inside a function outside it | `ReferenceError` |
| Arguments in the wrong order | Wrong values in wrong parameters, with no error! |

---

## Your turn

1. Run `node javascript/03-functions/examples.js` and **guess each output first**.
2. Solve `exercises.js` in a new `solutions.js`.
3. **Test every function with several inputs.** Remember the Exercise 10 bug from Lesson 2. With functions, testing many inputs is easy: just call it again!
4. Ask me to review.
5. Write the Lesson 3 section of your learning log.
