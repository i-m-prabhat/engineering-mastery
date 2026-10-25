"use strict";

class Person {
  constructor(name, age) {
    this.fullName = name;
    this.updateAge(age);
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(age) {
    if (!Number.isInteger(age) || age < 0) {
      throw new RangeError("age must be a nonnegative integer");
    }
    this.age = age;
    return this.age;
  }

  static genericGreeting() {
    return "Hello from the Person class!";
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    if (typeof value !== "string") throw new TypeError("full name must be a string");
    const parts = value.trim().split(/\s+/);
    if (parts.length < 2 || parts.some(part => part === "")) {
      throw new RangeError("use a first name and a last name for this exercise");
    }
    // Validate first, then update both properties.
    this.firstName = parts[0];
    this.lastName = parts.slice(1).join(" ");
  }

  // Keep the original name property consistent with the full-name accessors.
  get name() {
    return this.fullName;
  }

  set name(value) {
    this.fullName = value;
  }
}

module.exports = { Person };
