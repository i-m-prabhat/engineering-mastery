"use strict";

// Feature 2: finite Number inputs; large results may overflow to Infinity.
function square(number) {
  if (!Number.isFinite(number)) throw new TypeError("number must be finite");
  return number * number;
}

for (const number of [0, 5, -4, 1.5]) {
  console.log(`Square of ${number}:`, square(number));
}
for (const invalid of ["5", NaN, Infinity]) {
  try {
    square(invalid);
  } catch (error) {
    console.log("Invalid square input:", invalid, "|", error.name);
  }
}
