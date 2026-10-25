"use strict";
const { Person } = require("./person");

function runAccessorDemo() {
  const person = new Person("Prabhat Patel", 20);
  console.log("Task 7 - full name:", person.fullName);
  person.fullName = "  Sam   Taylor  ";
  console.log("Task 8 - updated full name:", person.fullName);
  console.log("Updated parts:", person.firstName, "|", person.lastName);
  console.log("Name alias:", person.name);
  try {
    person.fullName = "OnlyOne";
  } catch (error) {
    console.log("Invalid name:", error.name);
  }
  console.log("Name after invalid edit:", person.fullName);
}
module.exports = { runAccessorDemo };
if (require.main === module) runAccessorDemo();
