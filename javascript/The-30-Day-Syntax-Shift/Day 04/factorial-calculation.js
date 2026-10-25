"use strict";

// Feature 5: Number results are safe integers for factorial inputs 0 through 18.
function factorial(number) {
  if (!Number.isInteger(number) || number < 0 || number > 18) {
    throw new RangeError("number must be an integer from 0 through 18");
  }

  let product = 1;
  let factor = 1;
  do {
    product *= factor;
    factor++;
  } while (factor <= number);
  return product;
}

for (const number of [0, 1, 5, 18]) {
  console.log(`${number}! = ${factorial(number)}`);
}

for (const invalid of [-1, 2.5, 19, "5"]) {
  try {
    factorial(invalid);
  } catch (error) {
    console.log("Invalid factorial input:", invalid, "|", error.name);
  }
}
