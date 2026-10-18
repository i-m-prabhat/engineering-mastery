"use strict";

// Practice bound prevents accidentally requesting enormous solution sets.
function solveNQueens(n) {
  if (!Number.isInteger(n) || n < 1 || n > 10) throw new RangeError("n must be an integer from 1 through 10");
  const solutions = [];
  const columns = new Set();
  const descending = new Set();
  const ascending = new Set();
  const placement = [];
  function visit(row) {
    if (row === n) {
      solutions.push(placement.map(column => ".".repeat(column) + "Q" + ".".repeat(n - column - 1)));
      return;
    }
    for (let column = 0; column < n; column++) {
      const down = row - column;
      const up = row + column;
      if (columns.has(column) || descending.has(down) || ascending.has(up)) continue;
      columns.add(column); descending.add(down); ascending.add(up);
      placement.push(column);
      visit(row + 1);
      placement.pop();
      columns.delete(column); descending.delete(down); ascending.delete(up);
    }
  }
  visit(0);
  return solutions;
}
function runQueensDemo() {
  for (const n of [1, 2, 3, 4]) {
    const boards = solveNQueens(n);
    console.log("N-Queens:", n, "| solutions:", boards.length);
    for (const board of boards) console.log(board.join("\n") + "\n");
  }
}
module.exports = { solveNQueens, runQueensDemo };
if (require.main === module) runQueensDemo();
