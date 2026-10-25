"use strict";
const { ListNode, fromArray, toArray } = require("./list-utils");

// Lists must be finite, acyclic, and sorted ascending, ending in null.
// Allocate output nodes so input lists retain their structure.
function mergeTwoLists(first, second) {
  const dummy = new ListNode();
  let tail = dummy;
  while (first !== null || second !== null) {
    if (second === null || (first !== null && first.val <= second.val)) {
      tail.next = new ListNode(first.val);
      first = first.next;
    } else {
      tail.next = new ListNode(second.val);
      second = second.next;
    }
    tail = tail.next;
  }
  return dummy.next;
}
function runMergeDemo() {
  for (const [left, right] of [[[1, 2, 4], [1, 3, 4]], [[], []], [[], [0]], [[-3, -1], [-2, 2]]]) {
    const first = fromArray(left);
    const second = fromArray(right);
    console.log("Merge:", left, right, "| output:", toArray(mergeTwoLists(first, second)));
    console.log("Inputs unchanged:", toArray(first), toArray(second));
  }
}
module.exports = { mergeTwoLists, runMergeDemo };
if (require.main === module) runMergeDemo();
