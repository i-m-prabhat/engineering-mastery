# Day 03 Notes: Control Structures

## 1. Choose a path with if and else

A condition decides which statements execute. JavaScript evaluates its truthiness; comparisons such as `number > 0` already produce booleans.

```js
const number = 0;
if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
```

Only the first matching branch runs. For a finite number, the final branch represents zero. Validate input first in reusable functions: comparisons with NaN are false, so an unvalidated NaN would incorrectly reach the zero branch.

## 2. Boundaries matter

The practice voting rule is `age >= 18`. Age 17 fails, while 18 passes. The feature accepts nonnegative integer ages and rejects strings, fractions, and negative values. This is an age-check exercise with a deliberately simplified rule.

Use `>=` when the boundary belongs to the accepted range. Do not replace it with `>` unless the requirement excludes the boundary.

## 3. Nested conditions

To find the largest of three values, first compare the first and second, then compare that candidate with the third.

The task solution uses `>=` so equal maximum values still produce the correct largest value. Try (12, 12, 7), (7, 12, 12), (12, 7, 12), all equal, and all negative numbers. The output is the largest value, not a unique winning position.

## 4. switch selects a matching case

```js
const day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("invalid day");
}
```

A switch compares its expression with case values using strict equality. The string `"1"` does not match the number `1`. This challenge defines Monday as 1 and Sunday as 7; other numbering conventions exist.

`break` leaves the switch. Without it, execution falls through into the following case. A function's `return` exits the function, so the feature functions do not also need `break`.

## 5. Score ranges with switch(true)

A normal switch matches individual values. `switch (true)` can match boolean range conditions:

```js
switch (true) {
  case score >= 90: return "A";
  case score >= 80: return "B";
  // Continue with the lower boundaries.
}
```

This excerpt belongs inside a function with a defined score, as in the grade feature. Check higher thresholds first: testing `score >= 60` first would capture an A score too.

| Grade | Score range |
| --- | --- |
| A | 90 through 100 |
| B | 80 up to, but excluding, 90 |
| C | 70 up to, but excluding, 80 |
| D | 60 up to, but excluding, 70 |
| F | 0 up to, but excluding, 60 |

The feature accepts fractional scores and validates the 0–100 range before grading. For example, 89.9 is B and 90 is A. These are this challenge's grading rules.

## 6. Ternary expressions

`condition ? firstValue : secondValue` chooses a value based on a condition.

```js
const integer = -4;
const parity = integer % 2 === 0 ? "even" : "odd";
console.log(parity); // even
```

Parity is defined for integers here. Zero is even, and negative integers can be even or odd. Do not use this expression to classify fractions.

Use a ternary for a small value choice; use if/else for longer branches with multiple statements.

## 7. Leap-year conditions

Under the Gregorian rule:

1. A year divisible by 400 is a leap year.
2. Otherwise, a year divisible by 100 is not.
3. Otherwise, a year divisible by 4 is a leap year.
4. All other years are not leap years.

Equivalent expression:

```js
year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
```

1900 and 2100 are not leap years. 2000 and 2400 are. 2024 is a leap year; 2023 is not.

The feature accepts positive safe-integer years and applies this arithmetic rule without modeling historical calendar adoption. It returns a boolean for valid inputs and the string `"invalid year"` otherwise. That string is truthy, so a caller must check it explicitly instead of treating every result as a boolean.

## Common mistakes

- Using assignment `=` instead of comparison.
- Writing overlapping grade conditions in the wrong order.
- Forgetting break and accidentally falling through a switch.
- Expecting numeric strings to match numeric switch cases.
- Checking divisibility by 4 alone for leap years.
- Leaving out equal, zero, or invalid-input cases.
- Treating error-label strings as boolean results.

## Quick review

1. Why is age 18 accepted with `>=` but not with `>`?
2. What happens when a switch case has no break or return?
3. Why must grade thresholds be checked from highest to lowest?
4. How does the largest-number solution handle ties?
5. Why is 1900 not a leap year while 2000 is?
6. What happens if an unvalidated NaN reaches the sign classifier?

Predict the output of each feature script before running it.
