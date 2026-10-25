"use strict";
const { runPersonDemo } = require("./person-class");
const { runStudentDemo } = require("./student-inheritance");
const { runStaticDemo } = require("./static-members");
const { runAccessorDemo } = require("./getters-setters");
const { runAccountDemo } = require("./private-account");

runPersonDemo();
runStudentDemo();
runStaticDemo();
runAccessorDemo();
runAccountDemo();
console.log("All ten task demonstrations finished, including the optional account tasks.");
