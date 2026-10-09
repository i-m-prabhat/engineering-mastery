"use strict";
const { Person } = require("./person");

class Student extends Person {
  // Cumulative successful constructions, not a count of currently live objects.
  static count = 0;

  constructor(name, age, studentId) {
    if (typeof studentId !== "string" || studentId.trim() === "") {
      throw new TypeError("studentId must be a nonblank string");
    }
    super(name, age);
    this.studentId = studentId.trim();
    Student.count++;
  }

  getStudentId() {
    return this.studentId;
  }

  greet() {
    return `${super.greet()} My student ID is ${this.studentId}.`;
  }
}

module.exports = { Student };
