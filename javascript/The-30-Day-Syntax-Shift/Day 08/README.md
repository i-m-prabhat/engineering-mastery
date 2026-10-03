# Day 08: ES6+ Features

**Status:** Solutions and learning notes added.

## Goal

Use modern syntax for strings, collections, parameters, and objects.

## Environment

Node.js console scripts. No packages are required.

## Tasks / Activities

1. Interpolate a person's name and age with template literals.
2. Create and log a multiline template literal.
3. Destructure the first two values of an array.
4. Destructure title and author from a book.
5. Use spread to create an expanded copy of an array.
6. Use rest parameters to sum any number of arguments.
7. Give a product function a default second argument of 1; call it with and without that argument.
8. Create an object using property shorthand and method shorthand.
9. Create an object using computed property names.

## Feature Requests

- [x] Template literals script.
- [x] Destructuring script.
- [x] Spread and rest script.
- [x] Default parameters script.
- [x] Enhanced object literals script.

## Check Your Work

Compare original and spread arrays; call defaults both with an omitted argument and with zero.

## Solution Files

- [solutions.js](solutions.js): all nine numbered tasks with comments.
- [template-literals.js](template-literals.js): interpolation, multiline strings, and escaped placeholders.
- [destructuring.js](destructuring.js): positional/named extraction, aliases, rest, and defaults.
- [spread-rest.js](spread-rest.js): array copies, argument expansion, rest sums, and shallow references.
- [default-parameters.js](default-parameters.js): omitted, undefined, zero, and invalid arguments.
- [enhanced-object-literals.js](enhanced-object-literals.js): shorthand properties/methods and computed keys.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Run the Solutions

From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 08/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 08/template-literals.js"
node "javascript/The-30-Day-Syntax-Shift/Day 08/destructuring.js"
node "javascript/The-30-Day-Syntax-Shift/Day 08/spread-rest.js"
node "javascript/The-30-Day-Syntax-Shift/Day 08/default-parameters.js"
node "javascript/The-30-Day-Syntax-Shift/Day 08/enhanced-object-literals.js"
```

Expected highlights:

- The greeting interpolates Prabhat and age 20; multiline strings preserve their line breaks.
- Array destructuring extracts 10 and 20; object destructuring extracts the title and author.
- Spread expands the task array to [10, 20, 30, 40, 50] without changing the original.
- Rest sum returns 10 for arguments 1, 2, 3, 4 and 0 for no arguments.
- Multiplication returns 5 with an omitted/undefined second argument, 15 with 3, and 0 with zero.
- The shorthand method returns `Hello, Prabhat!`.
- Computed keys include language and day8; changing the key variable later does not rename the property.
- The spread feature shows that nested object references remain shared.
- Defaults do not replace null; the default-parameter feature rejects null with a caught TypeError.

[Back to the 30-day roadmap](../README.md)
