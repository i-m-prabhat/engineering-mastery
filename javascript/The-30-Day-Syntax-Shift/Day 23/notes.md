# Day 23 Notes: Coding Challenges

## 1. Median: search for a partition

Search the shorter sorted array for a cut. The second cut is chosen so the combined left partition holds half the entries, including the middle entry when the total length is odd.

A valid partition has leftA <= rightB and leftB <= rightA. If leftA is too large, move the first cut left; otherwise move it right.

Use negative/positive infinity at empty partition boundaries. For an odd total, return the largest left value. For an even total, average the largest left and smallest right values.

Inputs must already be ascending arrays of signed 32-bit integers, with at least one entry overall. The function checks array shape/nonemptiness but does not scan every value or prove sortedness. A final partition error does not guarantee all invalid inputs are detected.

## 2. Merge k lists: keep the smallest current head

A min-heap contains at most one pending node from each input list. Pop the smallest, append a new output node, then push its successor.

Heap insertion moves a smaller value upward. Removal replaces the root with the last item and moves it downward until parent values are no larger than their children.

The output is newly allocated; inputs remain unchanged. Lists must be sorted, finite, acyclic, and null-terminated. An empty list collection or all-null heads produces null.

This differs from collecting every value and sorting it: the heap only stores current frontier nodes.

## 3. Trapping rainwater: track boundary maxima

Water above an index depends on the shorter of its highest left and right boundaries minus its height.

The two-pointer algorithm advances the side with the smaller endpoint height, keeping that side's maximum. The opposite boundary is sufficient to finalize that side's trapped water.

Empty, single-bar, and monotonic profiles hold no water. This sums water across many bars; it is not the Day 22 two-wall container problem.

Heights are nonnegative safe integers. Use modest practice inputs whose total water also stays safely representable by Number.

## 4. N-Queens: choose, recurse, undo

Place one queen per row. Track used columns and diagonal identifiers: row-column and row+column.

For every legal column, add those identifiers, recurse to the next row, then undo each addition. Forgetting the undo step incorrectly blocks later branches.

At row n, materialize the board as n strings. Each saved board is a fresh value, so later backtracking does not alter it.

The practice API accepts n=1 through 10. This bound makes the potentially enormous output deliberate. n=1 has one solution; n=2 and n=3 have none; n=4 has two.

## 5. Word Ladder: shortest path through a word graph

Treat words as vertices and one-letter changes as edges. Breadth-first search visits increasing sequence lengths, so the first discovery of the end word is shortest.

The queue begins with the start word at length 1. Length counts words in the sequence, not the number of letter changes.

Generate neighbors by replacing each position with a–z. Keep only dictionary members and delete them when enqueueing to prevent repeated work.

The start need not appear in the dictionary. For different start/end words, the end must appear. This helper explicitly returns 1 for identical start/end even without a dictionary entry.

Words are nonempty lowercase ASCII strings of equal length. Duplicates in the dictionary are deduplicated by Set. An unreachable target returns 0.

## 6. Complexity and implementation costs

| Solution | Time | Extra space |
| --- | --- | --- |
| Median partitions | O(log(min(m,n)+1)) | O(1) |
| Heap list merge | O(k + N log(k+1)) upper bound | O(k) heap plus O(N) output |
| Rainwater | O(n), including validation | O(1) |
| N-Queens | Roughly O(n!) search upper bound, plus board output | O(n) working state plus O(S × n²) output |
| Word Ladder | Expected O(W × 26 × L²) for neighbor construction | O(W × L) words/queue/set |

N is the total list-node count and k is the number of lists. S is the number of returned boards. N-Queens builds each board using n strings of length n; output can dominate memory.

For Word Ladder, W is dictionary size and L is word length. This JavaScript version constructs a length-L candidate string for each of 26 replacements at each position, so it includes that string-copying cost. Validation also reads dictionary characters. Queue entries are retained until the function returns, but no costly shift is used.

Map/Set lookup statements use the common implementation model rather than a universal constant-time language guarantee.

## 7. Edge cases

- One empty median array, duplicate entries, odd/even totals, and both empty.
- Empty list collections, all-null lists, duplicates, and negatives.
- Empty/flat/monotonic rain profiles and deep valleys.
- Unsatisfiable queen sizes and validity of every returned board.
- Missing end word, disconnected dictionaries, a direct change, and identical endpoints.

## Common mistakes

- Binary-searching the larger array without adjusting partition constraints.
- Averaging the wrong middle boundary values.
- Forgetting to restore heap order after popping.
- Rewiring input nodes despite promising unchanged lists.
- Confusing container area with accumulated rainwater.
- Forgetting to undo a queen placement.
- Counting Word Ladder edges when the answer counts words.
- Marking words visited too late and enqueueing duplicates.

## Quick review

1. What makes a median partition valid?
2. Why does a heap need only current list heads?
3. Which side can the rainwater algorithm finalize?
4. Why are row-column and row+column useful for queens?
5. What does backtracking undo?
6. Why does BFS find the shortest ladder?
7. What does the ladder length count?
8. Which solutions can have large output memory costs?

Run each demo, then explain the invariant behind its decisions.
