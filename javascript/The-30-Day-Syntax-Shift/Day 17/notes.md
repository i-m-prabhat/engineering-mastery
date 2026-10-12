# Day 17 Notes: Data Structures

## 1. Structure determines useful operations

An array stores indexed entries. A linked list connects nodes. A stack exposes the most recently added entry; a queue exposes the earliest added entry.

Choosing a structure is about the operations you need, not just the values you store.

## 2. Singly linked list

Each private node has value and next. The list remembers head, tail, and size.

Appending connects the previous tail to a new node. If the list is empty, both head and tail become that node.

find walks from head until it encounters a strict-equality match. It returns a snapshot object containing value, or null when absent. The snapshot does not expose internal links. If a stored value is itself an object, that value reference is still shared.

## 3. Deletion cases

delete removes the first strict-equality match and returns a boolean.

- Head: move head to the next node.
- Middle: connect the previous node to the deleted node's successor.
- Tail: update tail to the previous node.
- Only node: head and tail both become null.
- Missing value: return false without changing size.

Duplicates are allowed. Deleting a duplicate removes only the first occurrence. The demo empties the entire list and appends again to catch stale-tail bugs.

Strict equality means a numeric 2 differs from "2"; NaN does not match itself in this list.

## 4. Stack: last in, first out

push adds to the top; pop removes the top; peek reads it without removal.

For first, second, third, popping gives third, second, first. Typical uses include undo history, bracket matching, and depth-first work.

The implementation uses an array internally. Its array is private.

## 5. Queue: first in, first out

enqueue adds at the tail; dequeue removes from the head; peek reads the head.

For first, second, third, removal gives first, second, third. Tasks waiting their turn and breadth-first traversal use this pattern.

This queue uses linked nodes. Removing an entry moves head instead of calling Array.shift and relocating remaining entries. When the final entry leaves, tail is cleared too. Removed nodes are no longer retained by the queue.

## 6. Empty-state policy

Empty pop, dequeue, and peek return undefined. size indicates whether the structure has entries.

Undefined may also be stored as a valid entry. Check size before removal when that distinction matters. Neither structure throws merely because it is empty.

## 7. Frequency counting with Map

For each value, retrieve its previous count (default zero), then increment it. The result maps each distinct key to its frequency.

Map avoids treating special strings as object property names and can use keys of any type. Entries preserve first-insertion order.

Map and Set use SameValueZero equality: NaN matches NaN and positive/negative zero are treated alike. Object keys still compare by reference, not by their contents.

## 8. Deduplication with Set

A Set stores unique values and preserves first-insertion order. Spreading it produces an array of those unique values.

Two separate object literals remain distinct entries, even if their properties look the same. This is value/reference deduplication, not deep object comparison.

## 9. Breadth-first tree traversal

Start by enqueueing the root. Repeatedly dequeue one node, record its value, and enqueue its left then right child if present.

The sample order is A, B, C, D, E, F. In-order traversal from Day 16 would produce a different order.

An empty tree returns []; a single node returns its value once. Input must be a finite acyclic tree. A graph with cycles requires a separate visited-set design.

## 10. Operation costs

| Operation | Array | This linked list |
| --- | --- | --- |
| Read by index | Typically O(1) | O(n) walk |
| Append | Amortized O(1) | O(1), with tail |
| Find by value | O(n) | O(n) |
| Delete first matching value | O(n) search/shifting | O(n) search, O(1) relinking |
| Convert to an array | Copy O(n) | Traverse O(n) |

The list has additional per-node/link overhead. Finding the predecessor is still necessary for deletion in a singly linked list; deleting by value is not O(1).

| Structure/operation | Cost in this implementation |
| --- | --- |
| Stack push/pop | Typical amortized O(1) / O(1) |
| Stack peek/size | O(1) |
| Linked queue enqueue/dequeue/peek/size | O(1) |
| Frequency count/deduplication | Expected O(n) with common hash-based Map/Set implementations |
| Breadth-first traversal | O(n) time, O(w) queue space plus O(n) output |

Here w is the maximum number of queued nodes, proportional to tree width. ECMAScript specifies average sublinear access for Map/Set, not a universal O(1) implementation guarantee. Array performance statements describe standard implementation models rather than hard timing guarantees.

## Common mistakes

- Forgetting to update the tail when deleting the final node.
- Forgetting to decrement size after deletion.
- Claiming deletion by value is O(1) in a singly linked list.
- Mixing FIFO and LIFO removal order.
- Using shift for every queue removal and assuming no relocation cost.
- Treating undefined alone as proof that the structure was empty.
- Assuming Set deeply compares objects.
- Traversing a cyclic graph as though it were a tree.

## Quick review

1. Why keep a tail pointer?
2. What changes when the list loses its only node?
3. Does delete remove every duplicate?
4. What distinguishes stack removal from queue removal?
5. How can you distinguish an empty queue from a stored undefined?
6. Why use a queue for breadth-first traversal?
7. When might an array be simpler than a linked list?

Run every demo and trace the head, tail, size, and removal order.
