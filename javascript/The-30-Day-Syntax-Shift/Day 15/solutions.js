"use strict";
const { runBasicDemo } = require("./basic-closure");
const { runCounterDemo } = require("./private-counter");
const { runIdDemo } = require("./unique-id-generator");
const { runLoopDemo } = require("./loop-closures");
const { runItemDemo } = require("./item-manager");
const { runMemoDemo } = require("./memoization-factorial");

runBasicDemo();
runCounterDemo();
runIdDemo();
runLoopDemo();
runItemDemo();
runMemoDemo();
console.log("All eight task demonstrations finished.");
