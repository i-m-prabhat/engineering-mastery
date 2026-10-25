# Day 05 Notes: Functions

## 1. Define once, call when needed

A function groups reusable work. Parameters are names in its definition; arguments are the values supplied when calling it.

```js
function square(number) {
  return number * number;
}
const result = square(5);
console.log(result); // 25
```

Here, number is a parameter and 5 is an argument. Defining the function does not run its body. The parentheses in square(5) invoke it.

## 2. Returning and logging are different

`return` sends a result back to the caller and exits the function. `console.log` displays something but does not return that displayed value from your function.

A function that reaches its end without returning a value returns undefined. Task 1 deliberately logs parity; the parity feature returns it so other code can reuse the result.

## 3. Three function forms

| Form | Example | Return behavior |
| --- | --- | --- |
| Declaration | `function sum(a, b) { return a + b; }` | Explicit return |
| Expression | `const sum = function (a, b) { return a + b; };` | Explicit return |
| Arrow | `const sum = (a, b) => a + b;` | Implicit return for an expression body |

A function declaration can be called before its declaration within its scope. A function stored in a const binding must be initialized before that binding is used.

Adding braces to an arrow changes its return rules:

```js
const sum = (a, b) => {
  return a + b;
};
```

Without return, that block-bodied arrow would return undefined. Arrow functions also use this from their surrounding context rather than defining their own this; avoid substituting them blindly for object methods.

## 4. Defaults apply to undefined

```js
function multiply(first, second = 1) {
  return first * second;
}
console.log(multiply(5));            // 5
console.log(multiply(5, undefined)); // 5
console.log(multiply(5, 0));         // 0
```

An omitted argument has the value undefined, so the default is used. Zero, false, an empty string, and null do not trigger a default.

The greeting task uses age 18 as its practice default. Calling greet("Prabhat", 20) overrides it. Defaults are convenience values, not input validation.

## 5. Functions are values

You can store functions in variables, pass them as arguments, and return them from other functions. A higher-order function accepts a function or returns one.

A callback is a function passed to another function for that function to invoke. Callbacks are not necessarily asynchronous: all repetition examples here run synchronously.

```js
function repeat(callback, count) {
  for (let index = 0; index < count; index++) {
    callback();
  }
}
repeat(() => console.log("Hello"), 3);
```

Pass the function itself, not the result of calling it. The feature version validates its callback and count. Count zero invokes the callback zero times; negative and fractional counts are rejected. Large valid counts still take time proportional to the count.

## 6. Order changes the result

`second(first(value))` applies first to the input, then passes its result to second.

For input 4:

- Add 2, then multiply by 3: (4 + 2) × 3 = 18.
- Multiply by 3, then add 2: (4 × 3) + 2 = 14.

Task 10 and the higher-order demo use this order explicitly. These helpers are synchronous; they do not await promise results.

## 7. Be clear about input contracts

The numbered tasks use known valid sample inputs. Feature scripts add validation where it helps show common mistakes:

- Parity accepts integers; zero and negative integers are valid.
- Square and sum accept finite Number inputs, rejecting numeric strings.
- Concatenation accepts strings and inserts no automatic separator.
- Repetition accepts a callback and a nonnegative safe-integer count.

Finite inputs can still produce a nonfinite result when a calculation overflows. Number arithmetic also has normal floating-point limits; the finite-input checks do not promise exact arithmetic for every value.

The character task uses String.includes with a single-character argument. Matching is case-sensitive: "JavaScript" includes "S" but not "s". The underlying method can search longer substrings too, and an empty search string matches; use a nonempty single character for this exercise.

## Common mistakes

- Defining a function without ever calling it.
- Logging a value when the caller needs a returned result.
- Omitting return inside a block-bodied arrow.
- Calling a callback immediately instead of passing it.
- Assuming a default replaces zero or null.
- Expecting concatenation to insert spaces.
- Reversing the order of the two functions in Task 10.
- Applying integer parity to fractions.

## Quick review

1. What is the difference between a parameter and an argument?
2. What does a function return if no return statement runs?
3. How do arrow returns change when braces are added?
4. Does multiply(5, 0) use the default second parameter?
5. How many times should repeat(callback, 0) invoke callback?
6. Why do the two order examples produce 18 and 14?
7. Is a callback always asynchronous?

Predict each output, run the scripts, and explain any differences.
