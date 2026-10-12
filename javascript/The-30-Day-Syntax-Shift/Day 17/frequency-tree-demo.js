"use strict";
const { countFrequencies, deduplicate, breadthFirst } = require("./data-structures");

function runLookupTreeDemo() {
  const words = ["array", "map", "array", "set", "map", "array"];
  console.log("Task 4 - frequency entries:", [...countFrequencies(words)]);
  console.log("Unique in first-seen order:", deduplicate(words));
  console.log("Empty frequencies:", [...countFrequencies([])]);
  const tree = {
    value: "A",
    left: { value: "B", left: { value: "D" }, right: { value: "E" } },
    right: { value: "C", right: { value: "F" } },
  };
  console.log("Task 5 - breadth first:", breadthFirst(tree));
  console.log("Empty tree:", breadthFirst(null));
  console.log("Single node:", breadthFirst({ value: "root" }));
  console.log("Task 6 - operation costs: see notes.md.");
}
module.exports = { runLookupTreeDemo };
if (require.main === module) runLookupTreeDemo();
