# Day 04 Notes: Loops

## 1. Repeat work with a for loop

```js
for (let number = 1; number <= 10; number++) {
  console.log(number);
}
```

The initialization runs once. Before each iteration, the condition is checked. If it is true, the body runs, then the update runs. The next condition check starts another iteration or ends the loop.

Here, `<= 10` includes 10. Using `< 10` would stop at 9. The counter declared with let belongs to the loop's scope.

## 2. while checks before running

```js
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
```

The condition is checked first, so a while loop can run zero times. Move the counter toward the stopping condition. Incrementing this countdown instead would keep it above zero and prevent termination.

Use while when the stopping condition is clearer than a fixed iteration count.

## 3. do...while runs at least once

```js
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);
```

The body runs before the first condition check. Notice the semicolon after the condition.

The factorial implementation starts its product and factor at 1. For input zero, the body multiplies by 1 once, then stops, leaving the required result 1. It never multiplies by zero.

## 4. Accumulators

A sum needs a variable that remembers the running total:

```js
let total = 0;
for (let number = 1; number <= 3; number++) {
  total += number;
}
console.log(total); // 6
```

Start addition at 0 and multiplication at 1. Resetting the accumulator inside the loop would discard earlier work.

The sum feature uses a while loop. A limit of zero means there are no terms to add, so the result is zero. It accepts nonnegative integer limits with a bound that keeps the exact sum safely representable as a Number. The algorithm still takes one iteration per number; a large valid input can take substantial time.

## 5. Multiplication tables

Keep the base fixed and change the multiplier. This day's table uses base 5 and multipliers 1 through 10, producing ten lines from `5 x 1 = 5` to `5 x 10 = 50`.

## 6. Nested loops

The outer loop chooses a row. The inner loop adds that row's stars:

```text
*
* *
* * *
* * * *
* * * * *
```

Create an empty line inside the outer loop so each row starts fresh. Log the line after the inner loop finishes. The five rows contain 1 + 2 + 3 + 4 + 5 = 15 stars in total.

For n rows, the total number of inner iterations is n(n + 1) / 2, so this pattern takes O(n²) work.

## 7. continue versus break

| Statement | Effect in these exercises |
| --- | --- |
| continue | Skip the remaining body of this iteration and move to the next |
| break | Exit the nearest enclosing loop immediately |

Task 8 skips 5 and resumes at 6. Task 9 checks for 7 before printing, so it prints 1 through 6. Moving the break check after the log would print 7 as well.

In a for loop, continue still leads to the update expression. In a while loop, a continue placed before a manual counter update can skip the update and cause an infinite loop.

A break inside nested loops exits only the innermost loop unless a label is used. Labels are outside this day's exercise.

## 8. Factorials and valid inputs

For a nonnegative integer n, n! multiplies the integers from 1 through n. By definition, 0! = 1.

| Input | Factorial |
| --- | --- |
| 0 | 1 |
| 1 | 1 |
| 5 | 120 |
| 18 | 6402373705728000 |

The feature deliberately accepts only integers from 0 through 18, keeping results within JavaScript's safe-integer range. Negative values, fractions, numeric strings, and larger values throw a RangeError. The demo catches these expected errors and continues.

Larger factorials need a separate design, such as BigInt, if exact integer output is required.

## Common mistakes

- Using < when an inclusive endpoint requires <=.
- Forgetting to update a while counter.
- Updating a counter in the wrong direction.
- Resetting the accumulator inside the loop.
- Starting a factorial product at zero.
- Forgetting that do...while executes once even when its condition is initially false.
- Expecting break to stop every enclosing loop.
- Skipping a while counter update with continue.

## Quick review

1. How many times does a for loop from 1 through 10 execute?
2. When can a while loop run zero times?
3. Why does a do...while factorial need special care for zero?
4. Why is a sum initialized to 0 but a product to 1?
5. What changes if Task 9 logs before checking for 7?
6. How many stars are printed across five rows?
7. Why does the factorial feature reject 19?

Predict the output, run each script, and explain any differences.
