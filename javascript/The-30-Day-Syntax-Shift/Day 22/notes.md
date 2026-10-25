# Day 22 Notes: Coding Challenges

## 1. Add Two Numbers: carry travels along the lists

Digits are stored least significant first. [2, 4, 3] means 342; [5, 6, 4] means 465. Their sum 807 becomes [7, 0, 8].

At each node, add the two digits and carry. Emit total % 10 and pass floor(total / 10) to the next iteration. Continue while either list or carry remains.

A final carry creates an extra node: [9, 9, 9] plus [1] becomes [0, 0, 0, 1].

Inputs are nonempty, finite, acyclic digit lists ending in null. Use the canonical representation without high-order leading zeros, except a single zero node. The helper validates digits, allocates new output nodes, and leaves both inputs unchanged. It never converts the whole number to Number, so long digit sequences do not lose whole-number precision.

## 2. Longest unique substring: move the window start forward

Keep a Map from each character to its latest index. When a repeated character is encountered, move the start past that previous occurrence, but never backward.

The update uses max(start, previousIndex + 1). For abba, the final a was last seen before the current window; moving start backward would incorrectly allow a repeated b.

Update the best length with end - start + 1. This finds a contiguous substring, not a subsequence.

The implementation counts Unicode code points using Array.from. A single 😀 counts as one, but multi-code-point emoji and combining sequences are not treated as full grapheme clusters. For ordinary ASCII challenge inputs, this matches the usual character count.

## 3. Container With Most Water: discard the shorter wall

Area is min(leftHeight, rightHeight) multiplied by the index distance. Begin with the outermost two lines.

Moving the taller wall inward while keeping the shorter wall cannot increase the limiting height and reduces width. Therefore move the shorter wall to look for a taller limiting height. Equal walls allow either side to move.

Fewer than two heights yield area zero. Heights must be finite and nonnegative. This is not the trapped-rainwater problem; choose only two lines.

Ordinary Number rounding and overflow still apply to extreme magnitudes. Practice with modest integer heights.

## 4. 3Sum: sort, fix one value, then use two pointers

Sort a copy so the caller's input is unchanged. Fix the first entry, then move left/right pointers across the remaining suffix.

A small sum moves left forward; a large sum moves right backward. When zero is found, record the three values, move both pointers, and skip duplicate values. Skip duplicate first entries too.

Distinct indices are guaranteed by first < left < right. Output uniqueness concerns triplet values, not the index combinations producing them.

For all-zero input, only [0, 0, 0] is returned once. Inputs here use signed 32-bit integers so three-value arithmetic stays safely exact.

## 5. Group Anagrams: use a character-count signature

The contract is lowercase ASCII words. Build 26 counts, one per letter, and join them with commas to create a Map key.

Anagrams share the same signature even when letters occur in different orders. Delimiters distinguish counts such as 1,11 from 11,1.

Empty strings share an all-zero signature. Duplicate words remain present; grouping does not deduplicate the input.

Groups appear in first-seen signature order, and words keep input order inside a group. Most challenge checkers accept other group orderings, but this implementation is deterministic.

Uppercase, punctuation, and non-ASCII words are rejected rather than normalized silently.

## 6. Time and space

| Solution | Time | Extra space |
| --- | --- | --- |
| Add Two Numbers | O(max(n, m)) | O(max(n, m)) output nodes; O(1) working pointers |
| Longest unique substring | Expected O(n) | O(n) code-point array plus character Map |
| Container area | O(n), including validation | O(1) |
| 3Sum | O(n²) plus sorting | O(n) copied input plus output and engine sorting workspace |
| Group Anagrams | Expected O(total characters + 26 × word count) | Count signatures, group references, and output |

Map costs use the common hash-based implementation model; ECMAScript requires average sublinear access rather than a universal constant-time guarantee. Native sorting workspace and algorithm details depend on the engine.

3Sum may produce O(n²) unique output triplets, so output storage is material.

## 7. Edge cases worth tracing

- Different digit-list lengths, zero, and a carry beyond both lists.
- Empty text, all repeated characters, and a repeat outside the current window.
- Empty/single height arrays, zeros, and equal endpoint heights.
- Fewer than three integers, repeated zeros, duplicate solutions, and no solution.
- Empty word arrays, empty strings, repeated words, and distinct signatures.

## Common mistakes

- Forgetting a final carry node.
- Converting a long digit list to an imprecise Number.
- Moving a substring window start backward.
- Confusing substring with subsequence.
- Moving the taller wall without a valid elimination argument.
- Returning duplicate 3Sum triplets.
- Sorting the input in place unexpectedly.
- Joining counts without separators.
- Removing duplicate words during anagram grouping.

## Quick review

1. Why are digits stored in reverse order useful for addition?
2. When is an extra output node needed?
3. Why does the substring start use max?
4. Why is moving the shorter wall safe?
5. Which duplicate skips make 3Sum unique?
6. Why can anagrams share a count signature?
7. Are duplicate words removed?

Run each demo and trace carries, windows, pointers, or signatures.
