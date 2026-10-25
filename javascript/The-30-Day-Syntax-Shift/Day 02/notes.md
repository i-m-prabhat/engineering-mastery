# Day 02 Notes: Operators

## 1. Operators work on values

In `10 + 3`, `+` is an operator and the two numbers are its operands. The expression produces 13. Logging a result displays it; assignment stores it for later use.

## 2. Arithmetic operators

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `+` | Add | `10 + 3` | `13` |
| `-` | Subtract | `10 - 3` | `7` |
| `*` | Multiply | `10 * 3` | `30` |
| `/` | Divide | `10 / 3` | About `3.3333333333333335` |
| `%` | Remainder | `10 % 3` | `1` |

Division does not discard the fractional part. `%` gives the remainder, not a percentage. For negative operands, a nonzero remainder has the dividend's sign: `-10 % 3` is `-1`.

For ordinary Number values, `10 / 0` produces `Infinity`, `-10 / 0` produces `-Infinity`, and `0 / 0` produces `NaN`. `10 % 0` also produces `NaN`. These operations do not throw a division-by-zero exception. BigInt division by zero behaves differently and throws a `RangeError`.

`NaN` means Not-a-Number, but `typeof NaN` is `"number"`. Check it with `Number.isNaN(value)`, not `value === NaN`.

Number arithmetic uses binary floating point. Consequently, `0.1 + 0.2` prints `0.30000000000000004`. Avoid expecting exact decimal equality for every fractional calculation.

## 3. Addition can join strings

```js
console.log(5 + 2);   // 7
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
```

`+` performs concatenation when string conversion applies. Other arithmetic operators commonly coerce strings to numbers, which can hide mistakes. Convert and validate input deliberately when you need arithmetic.

## 4. Assignment operators

```js
let points = 10;
points += 5; // Equivalent here to points = points + 5.
points -= 3; // Equivalent here to points = points - 3.
console.log(points); // 12
```

`=` assigns a value. `+=` and `-=` update a value and reassign the result. Use `let` for these changing bindings; compound assignment cannot reassign a `const` binding. `+=` can concatenate too: starting with `"10"` and adding 5 gives `"105"`.

## 5. Comparisons and equality

`>`, `<`, `>=`, and `<=` compare values and return booleans. Equality at the boundary matters: `18 >= 18` is true, but `18 > 18` is false.

```js
console.log(5 == "5");  // true: loose equality allows coercion.
console.log(5 === "5"); // false: different types.
console.log(5 === 5);   // true
```

Prefer `===` for predictable comparisons. `!==` is strict inequality. Do not confuse assignment `=` with comparison. String comparisons are lexicographic: `"10" < "3"` is true, even though `10 < 3` is false.

## 6. Logical operators

| A | B | `A && B` | `A || B` | `!A` |
| --- | --- | --- | --- | --- |
| false | false | false | false | true |
| false | true | false | true | true |
| true | false | false | true | false |
| true | true | true | true | false |

`&&` means AND: both boolean conditions must hold. `||` means OR: at least one must hold. `!` negates a value's truthiness and always returns a boolean.

AND and OR short-circuit: JavaScript skips the right operand when the left already determines the result. They return operand values, not always booleans:

```js
console.log("" || "Guest");        // Guest
console.log("ready" && "start");   // start
```

Common falsy values include `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Nonempty strings, including `"false"` and `"0"`, are truthy. Arrays and ordinary objects are truthy too.

An OR fallback also replaces valid falsy values such as zero. Later, learn `??` when only null and undefined should trigger a fallback.

## 7. Ternary expressions and zero

```js
const number = 0;
const sign = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(sign); // zero
```

The pattern is `condition ? valueIfTrue : valueIfFalse`. Only the selected branch is evaluated. Checking just `number > 0 ? "positive" : "negative"` incorrectly labels zero as negative.

The feature script first accepts only finite Number values. Otherwise, comparisons with `NaN` would both be false and the expression would incorrectly return zero. The checker treats `-0` as zero, handles fractions, and rejects strings and infinities.

## 8. Make evaluation order clear

Multiplication and division happen before addition and subtraction. `&&` has higher precedence than `||`. Use parentheses to express the intended grouping:

```js
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20

const canEnter = age >= 18 && (hasTicket || isMember);
```

The last line assumes `age`, `hasTicket`, and `isMember` are already defined, as in the comparison feature script. Read it as: the person is an adult AND has either a ticket OR membership.

## Common mistakes

- Using `=` when you mean `===`.
- Forgetting that `+` can join strings.
- Treating `%` as percentage or assuming all remainders are positive.
- Assuming Number division by zero throws an exception.
- Assuming `&&` and `||` always return booleans.
- Classifying zero or NaN as a negative number.
- Mixing AND and OR without making the grouping clear.

## Quick review

1. What does `10 % 3` produce, and why?
2. Why do `5 == "5"` and `5 === "5"` differ?
3. What value remains after `let score = 10; score += 5; score -= 3;`?
4. What do `10 / 0`, `0 / 0`, and `10 % 0` produce?
5. Why does the sign checker validate its input before comparing it?
6. What does `"" || "Guest"` return?

Predict each script's output, run it, and explain any differences in your own words.
