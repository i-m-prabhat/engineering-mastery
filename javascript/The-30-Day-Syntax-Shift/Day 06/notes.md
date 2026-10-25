# Day 06 Notes: Arrays

## 1. Arrays store ordered collections

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // 5
```

Indices start at zero, so the last index is length minus one. An empty array has length zero; reading its first or last element gives undefined.

Arrays can contain different value types, but these exercises use numbers so arithmetic has predictable meaning. Use Array.isArray(value) to identify arrays; typeof reports "object".

## 2. const allows array mutation

The const binding keeps pointing at the same array. Methods can still change that array's contents. Assigning a different array to the const binding would fail.

## 3. Add and remove values

| Method | Where it operates | Return value | Mutates the array? |
| --- | --- | --- | --- |
| push(value) | End | New length | Yes |
| pop() | End | Removed value, or undefined if empty | Yes |
| shift() | Beginning | Removed value, or undefined if empty | Yes |
| unshift(value) | Beginning | New length | Yes |

Do not mistake the return value of push for the updated array. Store the array separately and log both when learning the method.

Starting with [1, 2, 3, 4, 5], the task sequence pushes 6, pops 6, shifts 1, then unshifts 1. The final array is back to [1, 2, 3, 4, 5].

## 4. Transform with map

```js
const doubled = [1, 2, 3].map(number => number * 2);
console.log(doubled); // [2, 4, 6]
```

map creates a new array containing each callback result. Return a value from the callback. If you add braces to an arrow callback, an explicit return is needed.

For these number callbacks, the input stays unchanged. A callback that mutates objects could still change objects shared with the input; map does not enforce immutability.

## 5. Select with filter

```js
const evens = [1, 2, 3, 4, 5].filter(number => number % 2 === 0);
console.log(evens); // [2, 4]
```

filter keeps original values whose callback result is truthy, preserving their order. It does not replace them with the callback's true/false results.

Zero and negative even integers also satisfy remainder-equals-zero.

## 6. Aggregate with reduce

```js
const total = [1, 2, 3, 4, 5].reduce((sum, number) => sum + number, 0);
console.log(total); // 15
```

The accumulator begins at the supplied initial value, zero. Each callback result becomes the next accumulator. For this example the totals are 1, 3, 6, 10, and 15.

Always consider empty input. With an initial value, an empty-array sum is zero. Calling reduce on an empty array without an initial value throws a TypeError.

## 7. for versus forEach

| Approach | Useful when |
| --- | --- |
| Indexed for loop | You need an index, custom stepping, or early exit |
| for...of loop | You want values with break/continue |
| forEach | You want a callback for each present element |

forEach returns undefined, not an array of results. Use map to collect transformed results. Returning from a forEach callback does not break the iteration.

These examples use dense arrays, where every index has an element. On sparse arrays, forEach skips holes; an indexed for loop still visits their indices.

An empty array runs neither the normal indexed loop body nor the forEach callback. Avoid changing an array's size during iteration while learning these patterns.

## 8. Two-dimensional arrays

```js
const matrix = [[1, 2, 3], [4, 5, 6]];
console.log(matrix[1][2]); // 6
```

The first index selects a row; the second selects a column within that row. Human row 2, column 3 becomes indices [1][2].

Rows can have different lengths because each row is an independent array. In nested loops, use matrix[row].length for the current row's column limit.

Reading a nonexistent element in an existing row returns undefined. Accessing a column on a nonexistent row, such as matrix[9][0], throws because matrix[9] is undefined.

## 9. Copying arrays and creating rows

Spread creates a shallow copy:

```js
const original = [1, 2];
const copy = [...original];
copy.push(3);
console.log(original); // [1, 2]
```

The outer arrays are independent, but nested objects or row arrays are still shared. Copying a matrix with spread alone does not copy its rows.

For independent grid rows, create each one separately:

```js
const grid = Array.from({ length: 2 }, () => Array(3).fill(0));
grid[0][0] = 9;
console.log(grid[1][0]); // 0
```

Avoid Array(2).fill(Array(3).fill(0)) here: it repeats the same row reference, so editing one row appears to edit both.

## Common mistakes

- Using length as the last valid index.
- Expecting push or unshift to return the array.
- Expecting const to freeze array contents.
- Using forEach when you need transformed results or early break.
- Forgetting a return in a map callback.
- Reducing an empty array without an initial value.
- Assuming spread deeply copies nested arrays.
- Reusing the same row object throughout a grid.

## Quick review

1. What is the last valid index for an array of length five?
2. What does pop return on an empty array?
3. How do map and filter differ?
4. Why does this sum reduction begin with zero?
5. Can return inside a forEach callback stop the entire iteration?
6. Which cell does matrix[1][2] select?
7. Why should each grid row be created separately?

Predict the outputs, run the scripts, and explain any differences.
