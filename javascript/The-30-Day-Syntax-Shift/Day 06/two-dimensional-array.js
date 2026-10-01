"use strict";

// Feature 4: rows are separate arrays; coordinates are zero-based.
const matrix = [[1, 2, 3], [4, 5, 6]];
console.log("Matrix:", matrix);
console.log("First cell:", matrix[0][0]);
console.log("Row 2, column 3:", matrix[1][2]);

// Updating one cell leaves the other row unchanged.
matrix[1][2] = 60;
console.log("Updated second row:", matrix[1]);
console.log("Unchanged first row:", matrix[0]);

for (let row = 0; row < matrix.length; row++) {
  for (let column = 0; column < matrix[row].length; column++) {
    console.log(`[${row}][${column}]:`, matrix[row][column]);
  }
}

// Array.from creates a distinct row on every callback invocation.
const grid = Array.from({ length: 2 }, () => Array(3).fill(0));
grid[0][0] = 9;
console.log("Independent row 1:", grid[0]);
console.log("Independent row 2:", grid[1]);
