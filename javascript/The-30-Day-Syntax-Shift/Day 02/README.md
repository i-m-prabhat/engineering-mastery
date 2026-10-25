# Day 02: Operators

**Status:** Solutions and learning notes added.

## Goal

Perform calculations, compare values, and combine conditions.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Add two numbers and log the result.
2. Subtract two numbers and log the result.
3. Multiply two numbers and log the result.
4. Divide two numbers and log the result.
5. Find the remainder using `%`.
6. Modify and log a variable using `+=`.
7. Modify and log a variable using `-=`.
8. Compare two numbers using `>` and `<`.
9. Compare two numbers using `>=` and `<=`.
10. Compare values using `==` and `===`; include a number and its string representation.
11. Combine conditions with `&&`.
12. Combine conditions with `||`.
13. Negate a condition with `!`.
14. Use a ternary expression to classify positive and negative numbers; explicitly account for zero.

## Feature Requests

- [x] Arithmetic operations script.
- [x] Comparison and logical operators script.
- [x] Ternary sign checker.

## Check Your Work

Try 10 and 3, equal values, `5` versus `"5"`, and zero. Explain division by zero.

## Solution Files

- [solutions.js](solutions.js): all fourteen tasks, with comments and expected results.
- [arithmetic-operations.js](arithmetic-operations.js): arithmetic with positive, negative, equal, and zero operands.
- [comparison-logical.js](comparison-logical.js): comparisons, equality, boolean combinations, and an entry decision.
- [ternary-sign-checker.js](ternary-sign-checker.js): positive, negative, and zero classification with input validation.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 02/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 02/arithmetic-operations.js"
node "javascript/The-30-Day-Syntax-Shift/Day 02/comparison-logical.js"
node "javascript/The-30-Day-Syntax-Shift/Day 02/ternary-sign-checker.js"
```

Expected highlights:

- For 10 and 3: sum 13, difference 7, product 30, quotient about 3.3333333333333335, remainder 1.
- Compound assignment changes points from 10 to 15, then to 12.
- `5 == "5"` is true, while `5 === "5"` is false.
- Equal values satisfy both `>=` and `<=`.
- Number division by zero produces infinity or NaN; remainder with a zero divisor produces NaN.
- The logical demo prints all four boolean combinations; the adult-with-ticket entry decision is true.
- The sign checker returns positive for 10, negative for -3, and zero for both 0 and -0.
- Numeric strings, NaN, and infinity return `invalid input` in the sign checker.

[Back to the 30-day roadmap](../README.md)
