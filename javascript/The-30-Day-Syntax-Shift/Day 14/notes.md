# Day 14 Notes: Classes

## 1. A class describes instances

A class groups initialization and behavior. new Person("Prabhat Patel", 20) creates an instance and runs its constructor.

Each instance has its own name and age. Methods such as greet are normally shared through the prototype instead of copied into every instance. Calling person.greet() uses that person as this.

The class definition itself does not create a person. Use new for construction.

## 2. Methods update state

updateAge validates its argument before assigning it, then returns the updated age. Invalid negative or fractional ages throw without changing the existing age.

The Person constructor reuses this validation. First/last name and age remain public properties in this lesson; callers could still assign them directly. The validated methods describe the intended interface, not complete protection for every public property.

## 3. Inheritance with extends and super

Student extends Person, so a student can use Person methods such as updateAge.

A derived constructor must call super before accessing this. super(name, age) runs the base constructor and initializes the person data. Input checks that do not access this can run before super, as the student-ID check does.

A student is an instance of both Student and Person.

## 4. Override behavior

Student defines its own greet, overriding Person.greet for student instances. It calls super.greet() to reuse the person greeting, then appends the student ID.

Calling the override does not modify the base method. Ordinary Person instances keep their original greeting behavior.

## 5. Static methods and properties

| Member | Called on | Purpose |
| --- | --- | --- |
| person.greet() | Instance | Read that person's state |
| Person.genericGreeting() | Class | Generic message without an instance |
| Student.count | Class | Shared construction counter |

The counter increments only after the student constructor successfully validates and initializes its data. It is cumulative; destroying an instance does not decrement it.

The static demo creates two students. Run alone, its cumulative count is 2. The full runner creates another student first, so its cumulative count is 3. The demo always reports its own increase as 2.

The counter is a public static property, so it can be changed externally; it is an educational shared-state example.

## 6. Getters and setters look like properties

Read person.fullName without parentheses to invoke its getter. Assign person.fullName = "Sam Taylor" to invoke its setter.

The getter combines firstName and lastName. The setter validates and splits a trimmed name before changing either property. Multiple spaces are normalized. The first token becomes firstName and the remaining tokens become lastName.

This simple exercise requires at least two tokens and is not a universal model of real names. A failed setter leaves the previous name intact.

The name getter/setter delegates to fullName so the two property views stay consistent.

Do not assign this.fullName inside its own setter; that would call the setter repeatedly. Update the backing properties instead.

## 7. Private fields

Account declares #balance. JavaScript enforces access to that private field within the declaring class.

Reading account.#balance outside the class is a syntax error. An ordinary property named balance, or even a string key "#balance", is a different property and does not expose or change the private field. Object.keys does not list private fields.

The public getBalance method reads the value without permitting direct replacement. Deposit and withdraw are the intended mutation paths.

Private fields are language-level encapsulation; they do not turn a local exercise into a secure banking system.

## 8. Account rules and failed operations

Balances and amounts use whole practice credits. The opening balance can be zero; deposits and withdrawals must be positive safe integers.

The account rejects fractions, numeric strings, negative amounts, overdrafts, and deposits that would exceed the safe-integer range. Validation happens before mutation, so a rejected transaction leaves the balance unchanged.

Each account instance has its own private balance. Depositing into the first account does not affect the second.

For actual fractional currencies, a separate design would be needed. This example deliberately uses integer practice units.

## 9. Modules and execution

person.js, student.js, and account.js export reusable classes through CommonJS. The feature scripts export demo functions and run them directly only when launched as entry points.

solutions.js invokes all feature demos. No packages or network are needed. Generated files and private environment files are covered by the day-local and shared ignore rules.

## Common mistakes

- Forgetting new when constructing a class.
- Accessing this before super in a derived constructor.
- Calling a static method on an instance.
- Expecting a static counter to reset between demos in one process.
- Calling a getter as if it were a method.
- Recursively assigning the setter's own property.
- Assuming public fields cannot bypass method validation.
- Thinking a normal balance property is the private #balance field.
- Mutating the balance before checking for invalid operations.

## Quick review

1. What does a constructor initialize?
2. Why is a Student also a Person?
3. How does super.greet differ from this.greet inside the override?
4. Where does the student counter live?
5. Why can the standalone and combined counters differ?
6. How do you invoke a getter and a setter?
7. Can one account access another account's balance through public keys?
8. What happens to the balance after a rejected withdrawal?

Run each feature and confirm the state changes and validation results.
