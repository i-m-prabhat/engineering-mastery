# Day 14: Classes

**Status:** Solutions and learning notes added.

## Goal

Use classes, inheritance, overrides, static members, and encapsulation.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Define `Person` with name, age, and a greeting; instantiate it.
2. Add a method to update and log age.
3. Extend `Person` with `Student`, adding studentId and a method returning it.
4. Override the greeting to include studentId.
5. Add and call a static generic greeting method.
6. Track created students using a static counter.
7. Add firstName and lastName with a full-name getter.
8. Add a setter that updates the name and verify the getter.
9. Optional: define `Account` with a private balance and deposit/withdraw methods.
10. Optional: exercise the account methods and log balances through a public read method.

## Feature Requests

- [x] Person class script.
- [x] Student inheritance script.
- [x] Static members script.
- [x] Getters and setters script.
- [x] Optional private account script.

## Check Your Work

Create multiple students, confirm the counter, exercise the name setter, and verify separate account instances keep separate balances.

## Solution Files

- [solutions.js](solutions.js): runs all ten tasks, including the optional account tasks.
- [person.js](person.js), [student.js](student.js), and [account.js](account.js): reusable classes.
- [person-class.js](person-class.js): construction, greetings, and age updates.
- [student-inheritance.js](student-inheritance.js): inheritance, student ID, and method override.
- [static-members.js](static-members.js): static greeting and student counter.
- [getters-setters.js](getters-setters.js): full-name reads, edits, and validation.
- [private-account.js](private-account.js): private balance, deposits, withdrawals, and independent instances.
- [notes.md](notes.md): explanations, common mistakes, and review questions.
- [.gitignore](.gitignore): day-local generated-file exclusions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 14/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 14/person-class.js"
node "javascript/The-30-Day-Syntax-Shift/Day 14/student-inheritance.js"
node "javascript/The-30-Day-Syntax-Shift/Day 14/static-members.js"
node "javascript/The-30-Day-Syntax-Shift/Day 14/getters-setters.js"
node "javascript/The-30-Day-Syntax-Shift/Day 14/private-account.js"
```

Expected highlights:

- Person starts at age 20 and updates to 21; invalid age edits preserve 21.
- Student greets with ST-001 and is an instance of both Student and Person.
- Person.genericGreeting runs without an instance.
- The static demo creates two students: count is 2 standalone and 3 in the full runner because an earlier demo already created one.
- The full-name setter changes Prabhat Patel to Sam Taylor and normalizes whitespace.
- A rejected single-token name leaves Sam Taylor intact.
- The first account's credits go from 100 to 125 to 85; the second remains at 50.
- An overdraft throws a caught RangeError and leaves the first balance at 85.
- Object.keys on the account returns [] because its balance is private.

Names use a two-token minimum for this exercise. Account operations use whole practice credits, not fractional currency.
Public Person fields remain directly mutable; private account balances are changed through validated methods.

[Back to the 30-day roadmap](../README.md)
