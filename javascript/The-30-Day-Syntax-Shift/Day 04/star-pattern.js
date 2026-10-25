"use strict";

// Feature 3: the outer loop selects a row; the inner loop builds its stars.
const rows = 5;
for (let row = 1; row <= rows; row++) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    line += column === 1 ? "*" : " *";
  }
  console.log(line);
}
