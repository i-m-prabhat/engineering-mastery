"use strict";

// Feature 1: the same inclusive range with two loop types.
console.log("for - 1 through 10:");
for (let number = 1; number <= 10; number++) {
  console.log(number);
}

console.log("while - 1 through 10:");
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

console.log("while - 10 through 1:");
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
