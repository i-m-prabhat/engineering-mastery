# Learning Log

After each lesson, write what you learned **in your own words**. Explaining something yourself is how you find out whether you really understand it.

## Lesson 1: Variables and Data Types

- i leaned about the basics of the javascript how to assign an variables and how to use the data type and operators.

- **`const` vs `let`:** I use `const` when value is constant and `let` when value chnaging frequntly.
- **The 5 data types I learned:** number, string, boolean, undefined and null
- **Why `"5" + 5` gives `"55"`:** because "5" is string and 5 is number when add then will concat to 55 not 10
- **What `%` does, and one use for it:** this is the sign of remonder and it is user for the getting reming of an division.
- **Template literals (backticks):** they are useful because they can wring using varible and and long text without concat in one line
- **A mistake I made and what I learned from it:** (hint: exercise 8!) i mistaken on excersize 8 i got the Assignment to constant variable error then i chnages to just const to let my erro is gone but its the real issue is that  that varibale not chnage their value just it reassign the same value so nned to remove that line not chnage the varible assignent.

## Lesson 2: Conditions and Comparisons

- **`=` vs `==` vs `===`:** `=` puts a value in a variable. `===` asks "are these equal?" and checks the type too, so `5 === "5"` is `false`. `==` converts types first, so `5 == "5"` is `true`. That causes bugs, so I always use `===`.
- **`if` / `else if` / `else`:** JavaScript checks from top to bottom and runs only the **first** true block. Order matters: in the grade calculator, checking `>= 90` before `>= 75` is the only way it works.
- **`&&`, `||`, `!`:** `&&` needs both sides true (login: username AND password), `||` needs at least one side true (free delivery: big cart OR prime member), and `!` flips true and false.
- **Each side needs a full comparison:** `age > 12 && < 60` is a syntax error. It has to be `age > 12 && age < 60`.
- **Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy. The ones that surprised me were `"0"`, `"false"` and `" "`: they're truthy because they're non-empty strings.
- **Ternary:** `condition ? valueIfTrue : valueIfFalse` is a short way to pick between two values.
- **Lesson 1 review:** `"2" + 3 + 1` is `"231"` because `+` works left to right, and once a string appears, every `+` after it joins text. I got this right this time!
- **A mistake I made:** In exercise 10, I wrote `visitorAge === 60`. It gave the expected output for age 10, but a 70-year-old got the child price. It should be `>= 60`. **Getting the right output for one input doesn't prove the code works, so I need to test every path with different values.**
- **What's next:** In exercise 8 I wrote the same if/else 7 times. Functions should let me write it once and reuse it.
