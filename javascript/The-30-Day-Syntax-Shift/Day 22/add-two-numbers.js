"use strict";
const { ListNode, fromArray, toArray } = require("./list-utils");

// Nonempty, finite, acyclic lists of digits 0–9, least significant first.
function addTwoNumbers(first, second) {
  if (first == null || second == null) throw new TypeError("both digit lists must be nonempty");
  const dummy = new ListNode();
  let tail = dummy;
  let carry = 0;
  while (first !== null || second !== null || carry !== 0) {
    const left = first === null ? 0 : first.val;
    const right = second === null ? 0 : second.val;
    if (!Number.isInteger(left) || left < 0 || left > 9 ||
        !Number.isInteger(right) || right < 0 || right > 9) {
      throw new RangeError("each node must contain a digit from 0 through 9");
    }
    const total = left + right + carry;
    tail.next = new ListNode(total % 10);
    tail = tail.next;
    carry = Math.floor(total / 10);
    if (first !== null) first = first.next;
    if (second !== null) second = second.next;
  }
  return dummy.next;
}
function runAdditionDemo() {
  for (const [left, right] of [[[2, 4, 3], [5, 6, 4]], [[9, 9, 9], [1]], [[0], [0]], [[1], [9, 9]]]) {
    console.log("Add reversed digits:", left, "+", right,
      "=", toArray(addTwoNumbers(fromArray(left), fromArray(right))));
  }
}
module.exports = { addTwoNumbers, runAdditionDemo };
if (require.main === module) runAdditionDemo();
