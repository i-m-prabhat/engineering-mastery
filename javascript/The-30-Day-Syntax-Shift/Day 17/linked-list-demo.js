"use strict";
const { LinkedList } = require("./data-structures");

function runListDemo() {
  const list = new LinkedList();
  console.log("Task 1 - empty list:", list.toArray(), "| missing:", list.find(1));
  [10, 20, 30, 40].forEach(value => list.append(value));
  console.log("Initial:", list.toArray());
  console.log("Find 30:", list.find(30));
  console.log("Delete head 10:", list.delete(10), list.toArray());
  console.log("Delete middle 30:", list.delete(30), list.toArray());
  console.log("Delete tail 40:", list.delete(40), list.toArray());
  console.log("Delete remaining 20:", list.delete(20), "| size:", list.size);
  list.append(50);
  console.log("Append after emptying:", list.toArray());
  list.append(50);
  list.delete(50);
  console.log("Delete only the first duplicate:", list.toArray());
  console.log("Delete absent item:", list.delete(99));
}
module.exports = { runListDemo };
if (require.main === module) runListDemo();
