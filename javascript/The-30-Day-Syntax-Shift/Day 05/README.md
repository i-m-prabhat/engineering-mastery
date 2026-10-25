# Day 05: Functions

**Status:** Solutions and learning notes added.

## Goal

Define declarations, expressions, arrow functions, defaults, and higher-order functions.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Declare a function that checks even or odd and logs the result.
2. Declare a function that returns the square of a number.
3. Use a function expression to find and log the maximum of two numbers.
4. Use a function expression to concatenate and return two strings.
5. Use an arrow function to return the sum of two numbers.
6. Use an arrow function to return whether a string contains a specified character.
7. Return the product of two parameters, with a default for the second.
8. Return a greeting from name and age, with a default age.
9. Write a higher-order function that invokes a supplied function n times.
10. Write a higher-order function that takes two functions and a value, then applies the functions in sequence.

## Feature Requests

- [x] Even or odd function script.
- [x] Square calculation script.
- [x] Concatenation script.
- [x] Arrow sum script.
- [x] Repeated callback script.

## Check Your Work

Call each function with normal inputs, defaults, and zero repetitions; verify callback application order.

## Solution Files

- [solutions.js](solutions.js): all ten numbered tasks with comments and expected results.
- [even-or-odd.js](even-or-odd.js): integer parity with input validation.
- [square-calculation.js](square-calculation.js): square values for positive, negative, zero, and fractional inputs.
- [concatenation.js](concatenation.js): a function expression that combines strings.
- [arrow-sum.js](arrow-sum.js): an arrow function with an explicit return.
- [higher-order-functions.js](higher-order-functions.js): callback repetition and ordered function application.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 05/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 05/even-or-odd.js"
node "javascript/The-30-Day-Syntax-Shift/Day 05/square-calculation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 05/concatenation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 05/arrow-sum.js"
node "javascript/The-30-Day-Syntax-Shift/Day 05/higher-order-functions.js"
```

Expected highlights:

- Task 1 logs even for 4; Task 2 returns 25 for the square of 5.
- The maximum of 8 and 12 is 12; string concatenation produces `Hello, Prabhat!`.
- The arrow sum returns 13 for 10 and 3; the character check finds uppercase S.
- Multiplying 5 with an omitted second argument returns 5, with 3 returns 15, and with 0 returns 0.
- The greeting uses age 18 by default and accepts an explicit age.
- Repeating a callback three times produces three calls; repeating zero times adds none.
- Adding 2 then tripling input 4 returns 18; reversing the order returns 14.
- Feature scripts catch their demonstrated invalid-input errors and continue.

[Back to the 30-day roadmap](../README.md)
