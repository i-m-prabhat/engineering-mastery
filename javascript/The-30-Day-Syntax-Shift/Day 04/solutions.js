"use strict";

// Task 1: for loop, inclusive endpoints.
console.log("Task 1 - 1 through 10:");
for (let number = 1; number <= 10; number++) {
  console.log(number);
}

// Task 2: table of 5, multipliers 1 through 10.
console.log("Task 2 - multiplication table:");
for (let multiplier = 1; multiplier <= 10; multiplier++) {
  console.log(`5 x ${multiplier} = ${5 * multiplier}`);
}

// Task 3: accumulate with while.
let current = 1;
let total = 0;
while (current <= 10) {
  total += current;
  current++;
}
console.log("Task 3 - sum:", total); // 55

// Task 4: count down, including 1.
console.log("Task 4 - 10 through 1:");
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

// Task 5: do...while runs its body before checking the condition.
console.log("Task 5 - 1 through 5:");
let next = 1;
do {
  console.log(next);
  next++;
} while (next <= 5);

// Task 6: starting at 1 preserves the empty product, 0! = 1.
for (const input of [5, 0]) {
  let factorial = 1;
  let factor = 1;
  do {
    factorial *= factor;
    factor++;
  } while (factor <= input);
  console.log(`Task 6 - ${input}!:`, factorial);
}

// Task 7: build one row at a time with nested loops.
console.log("Task 7 - star pattern:");
for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let column = 1; column <= row; column++) {
    stars += column === 1 ? "*" : " *";
  }
  console.log(stars);
}

// Task 8: continue skips only the current iteration.
console.log("Task 8 - skip 5:");
for (let number = 1; number <= 10; number++) {
  if (number === 5) continue;
  console.log(number);
}

// Task 9: check before logging, so 7 is NOT printed.
console.log("Task 9 - stop before 7:");
for (let number = 1; number <= 10; number++) {
  if (number === 7) break;
  console.log(number);
}
console.log("All nine task demonstrations finished.");
