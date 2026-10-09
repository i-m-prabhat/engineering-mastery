"use strict";
const { Person } = require("./person");
const { Student } = require("./student");

function runStudentDemo() {
  const student = new Student("Prabhat Patel", 20, "ST-001");
  console.log("Task 3 - student ID:", student.getStudentId());
  console.log("Task 4 - overridden greeting:", student.greet());
  console.log("Is Student:", student instanceof Student);
  console.log("Is Person:", student instanceof Person);
  student.updateAge(21);
  console.log("Inherited age update:", student.age);
}
module.exports = { runStudentDemo };
if (require.main === module) runStudentDemo();
