"use strict";
const { runListDemo } = require("./linked-list-demo");
const { runOrderingDemo } = require("./stack-queue-demo");
const { runLookupTreeDemo } = require("./frequency-tree-demo");
runListDemo();
runOrderingDemo();
runLookupTreeDemo();
console.log("All six tasks covered; the operation-cost comparison is in notes.md.");
