# Day 03: Control Structures

**Status:** Solutions and learning notes added.

## Goal

Choose between branches, handle boundaries, and combine conditions.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Classify a number as positive, negative, or zero with `if/else`.
2. Check voting eligibility using age >= 18.
3. Find the largest of three numbers with nested conditions.
4. Map numbers 1–7 to weekday names using `switch`; define which day is 1.
5. Assign A/B/C/D/F grades using `switch`; document the score ranges.
6. Use a ternary expression to check even or odd.
7. Check leap years: divisible by 4, except centuries unless divisible by 400.

## Feature Requests

- [x] Number check script.
- [x] Voting eligibility script.
- [x] Day of the week script.
- [x] Grade assignment script.
- [x] Leap year check script.

## Check Your Work

Try ages 17/18, equal maximum values, score boundaries, invalid weekdays, and leap years 1900/2000/2024.

## Solution Files

- [solutions.js](solutions.js): all seven numbered tasks with comments and expected outputs.
- [number-check.js](number-check.js): positive, negative, and zero checks with invalid-input examples.
- [voting-eligibility.js](voting-eligibility.js): the practice age rule and boundary checks.
- [day-of-week.js](day-of-week.js): Monday–Sunday mapping with invalid-day handling.
- [grade-assignment.js](grade-assignment.js): documented score ranges and boundary examples.
- [leap-year-check.js](leap-year-check.js): Gregorian leap-year checks and year validation.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 03/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 03/number-check.js"
node "javascript/The-30-Day-Syntax-Shift/Day 03/voting-eligibility.js"
node "javascript/The-30-Day-Syntax-Shift/Day 03/day-of-week.js"
node "javascript/The-30-Day-Syntax-Shift/Day 03/grade-assignment.js"
node "javascript/The-30-Day-Syntax-Shift/Day 03/leap-year-check.js"
```

Expected highlights:

- The task script prints negative, eligible, 12, Wednesday, B, even, and true.
- Ages 17 and 18 return not eligible and eligible respectively.
- Monday is day 1; Sunday is day 7. Day 0, 8, fractions, and numeric strings are invalid.
- Scores 60, 70, 80, and 90 return D, C, B, and A. Scores outside 0–100 are invalid.
- Years 1900 and 2100 are not leap years; 2000, 2024, and 2400 are.
- Feature scripts include invalid inputs and preserve their distinction from valid results.

[Back to the 30-day roadmap](../README.md)
