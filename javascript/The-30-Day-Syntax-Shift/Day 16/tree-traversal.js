"use strict";
const { inOrder, treeDepth } = require("./recursion-utils");
function runTreeDemo() {
  const tree = {
    value: 4,
    left: { value: 2, left: { value: 1 }, right: { value: 3 } },
    right: { value: 6, left: { value: 5 }, right: { value: 7 } },
  };
  console.log("Task 9 - in-order:", inOrder(tree));
  console.log("Task 10 - depth in nodes:", treeDepth(tree));
  console.log("Empty traversal:", inOrder(null));
  console.log("Empty depth:", treeDepth(null));
  console.log("Single-node depth:", treeDepth({ value: 1 }));
}
module.exports = { runTreeDemo };
if (require.main === module) runTreeDemo();
