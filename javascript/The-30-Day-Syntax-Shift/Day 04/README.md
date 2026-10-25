# Day 04: Loops

**Status:** Solutions and learning notes added.

## Goal

Use loop types, nested loops, `break`, and `continue`.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Print 1–10 using `for`.
2. Print the multiplication table of 5 using `for`.
3. Sum 1–10 using `while`.
4. Print 10–1 using `while`.
5. Print 1–5 using `do...while`.
6. Calculate a factorial with `do...while`; include 0! = 1.
7. Use nested loops to print five rows of stars, with row n containing n stars.
8. Print 1–10 while skipping 5 using `continue`.
9. Print numbers starting at 1 and stop when 7 is reached using `break`; state whether 7 is printed.

## Feature Requests

- [x] Number printing with `for` and `while`.
- [x] Multiplication table script.
- [x] Star pattern script.
- [x] Sum calculation script.
- [x] Factorial calculation script.

## Check Your Work

Verify sum 1–10 is 55, 5! is 120, and 0! is 1; inspect every star-pattern row.

## Solution Files

- [solutions.js](solutions.js): all nine tasks with explanatory comments.
- [number-printing.js](number-printing.js): ascending for/while loops and a countdown.
- [multiplication-table.js](multiplication-table.js): the table of 5, multipliers 1–10.
- [star-pattern.js](star-pattern.js): a five-row triangle using nested loops.
- [sum-calculation.js](sum-calculation.js): a while-loop sum with input validation.
- [factorial-calculation.js](factorial-calculation.js): a do...while factorial, including zero.
- [notes.md](notes.md): loop explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 04/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 04/number-printing.js"
node "javascript/The-30-Day-Syntax-Shift/Day 04/multiplication-table.js"
node "javascript/The-30-Day-Syntax-Shift/Day 04/star-pattern.js"
node "javascript/The-30-Day-Syntax-Shift/Day 04/sum-calculation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 04/factorial-calculation.js"
```

Expected highlights:

- Ascending loops print 1–10; the countdown prints 10–1.
- The table has ten lines, ending with `5 x 10 = 50`.
- The sum of 1–10 is 55; a zero limit gives 0.
- Factorials include 0! = 1, 1! = 1, and 5! = 120.
- The star pattern has five rows and 15 stars overall.
- Task 8 prints 1–10 except 5.
- Task 9 prints 1–6: 7 is excluded because the break check happens before logging.
- The feature scripts catch invalid-input RangeErrors and continue.

The factorial feature accepts integers 0–18 for safe Number results. The sum feature accepts nonnegative integer limits up to 134217727 for safe integer sums; large limits still require many loop iterations.

[Back to the 30-day roadmap](../README.md)
