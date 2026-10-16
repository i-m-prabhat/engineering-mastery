# Day 21 Notes: Coding Challenges

## 1. Define the contract first

Each challenge file exports its solution and a runnable demo. The combined runner invokes all five demos. No packages or network are required.

Integer exercises use signed 32-bit integers: -2147483648 through 2147483647. List inputs are sorted ascending, finite, acyclic lists whose final next is null. Bracket input contains only the six bracket characters; other characters are rejected.

## 2. Two Sum: remember earlier values

For each value, compute target minus that value. If the complement has appeared, return its earlier index and the current index. Otherwise remember the current value and its index.

Look up the complement before inserting the current value. This prevents using the same entry twice. For [3, 3] and target 6, the second 3 finds the first and returns [0, 1].

The helper returns one valid pair; multiple pairs need not be enumerated. If none exists, it returns []. Original indices are retained because the input is not sorted or mutated.

Validation occurs as entries are visited. A found pair returns early, so the documented integer-array contract still applies to unvisited entries.

## 3. Reverse Integer: pop and append digits

Take the absolute input, repeatedly extract the last digit with remainder 10, then append it to the result. Divide the remaining input by 10 and floor it.

Leading zeros in the reversed spelling disappear numerically: -120 becomes -21. Zero returns zero.

Check the signed result limit before appending the next digit. A positive result cannot exceed 2147483647; a negative result's magnitude cannot exceed 2147483648. Return 0 when the reversal would overflow this range.

Invalid input outside the signed range throws; valid input whose reversed result overflows returns 0. These are different cases.

## 4. Palindrome Number: reverse half

Negative integers are not palindromes under the decimal spelling rule. A nonzero number ending in zero cannot be one either.

Move digits from the remaining input into a reversed half until the reversed half meets or exceeds the remaining half. Even-length palindromes have equal halves. For odd lengths, discard the middle digit before comparing.

Zero is a palindrome. Reversing only half avoids unnecessary whole-number reversal and uses constant extra space.

## 5. Merge Two Sorted Lists: choose the smaller head

A dummy node simplifies building the output. Compare current heads, append a new node containing the smaller value, and advance that input. When one list ends, copy values from the remaining list.

Both input lists are already sorted; the helper does not sort or validate them. Equal values choose the first list before the second.

This version deliberately allocates new nodes so original lists stay unchanged. An alternative implementation could reuse nodes, but would need a different mutation and shared-input contract.

The array conversion helpers make demonstrations readable. They are not replacements for the linked-list algorithm.

## 6. Valid Parentheses: use a stack

Push opening brackets. For each closing bracket, pop and compare against the required opening bracket.

A closing bracket with an empty stack fails. A mismatched pair fails. After scanning, leftover opening brackets fail.

([)] has the same counts of open and close brackets but is invalid because the nesting order is wrong. The stack handles order, not just counts.

The empty string is balanced in this helper. Non-bracket characters, including spaces, return false instead of being ignored.

## 7. Time and space

| Solution | Time | Extra space |
| --- | --- | --- |
| Two Sum | Expected O(n) with common Map implementations | O(n) |
| Reverse Integer | O(d), where d is digit count | O(1) |
| Palindrome Number | O(d) | O(1) |
| Merge sorted lists | O(n + m) | O(n + m) new output nodes |
| Valid Parentheses | O(n) | O(n) worst-case stack |

The list merge uses O(1) working pointers in addition to output nodes. Array conversions in the demos allocate additional arrays. Map access costs depend on the implementation; ECMAScript requires average sublinear access rather than a universal O(1) guarantee.

## 8. Edge cases to trace

- Empty or single-entry Two Sum input: no distinct pair.
- Duplicate Two Sum values: valid when they occupy distinct indices.
- Negative reversal, trailing zero, zero itself, and overflow.
- Odd/even palindrome lengths, negatives, and numbers ending in zero.
- Both lists empty, one empty, duplicates, and negative values.
- Empty brackets, early closing brackets, crossed nesting, and leftover opens.

## Common mistakes

- Inserting the current Two Sum value before checking its complement.
- Returning values when the problem asks for indices.
- Forgetting signed overflow in reversal.
- Treating a negative sign as a palindrome character.
- Failing to advance a list pointer while merging.
- Accidentally changing input lists without documenting it.
- Checking bracket counts instead of nesting order.
- Returning true while the stack still contains open brackets.

## Quick review

1. Why must Two Sum use two different indices?
2. Why does reverse(-120) return -21?
3. How do invalid input and reversed overflow differ?
4. Why can palindrome checking discard the middle digit?
5. What purpose does the dummy list node serve?
6. Why is ([)] invalid?
7. Which helpers leave their inputs unchanged?

Run each example and explain the state of its Map, pointers, or stack.
