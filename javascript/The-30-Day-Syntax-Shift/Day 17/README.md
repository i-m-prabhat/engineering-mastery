# Day 17: Data Structures

**Status:** Solutions and learning notes added.

## Goal

Prepare linked lists, stacks, queues, and lookup structures for Days 21–23.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Implement a singly linked list with append, find, delete, and conversion to an array.
2. Implement a stack with push, pop, peek, and an explicit empty-state policy.
3. Implement a queue with enqueue, dequeue, and peek; avoid shifting the full array on every removal.
4. Use a `Map` for frequency counting and a `Set` for deduplication.
5. Represent a binary tree and implement breadth-first traversal.
6. Explain operation costs and compare a linked list with an array.

## Feature Requests

- [x] Linked list demo with head, middle, and tail deletion.
- [x] Stack and queue demos.
- [x] Frequency counter and tree traversal demo.

## Check Your Work

Exercise empty structures, duplicate values, head/tail deletion, and FIFO/LIFO ordering.

## Solution Files

- [solutions.js](solutions.js): runs the implementation demonstrations.
- [data-structures.js](data-structures.js): linked list, stack, linked queue, frequency counter, deduplication, and breadth-first traversal.
- [linked-list-demo.js](linked-list-demo.js): head/middle/tail deletion, duplicates, and reuse after emptying.
- [stack-queue-demo.js](stack-queue-demo.js): LIFO/FIFO ordering and empty behavior.
- [frequency-tree-demo.js](frequency-tree-demo.js): Map/Set operations and tree traversal.
- [notes.md](notes.md): Task 6 operation-cost comparison, explanations, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 17/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 17/linked-list-demo.js"
node "javascript/The-30-Day-Syntax-Shift/Day 17/stack-queue-demo.js"
node "javascript/The-30-Day-Syntax-Shift/Day 17/frequency-tree-demo.js"
```

Expected highlights:

- The list starts [10, 20, 30, 40]; deleting head 10, middle 30, then tail 40 leaves [20].
- Emptying and reusing the list works; duplicate deletion removes only the first match.
- Stack removal is third, second, first; queue removal is first, second, third.
- Empty removals and peeks return undefined, with size 0.
- Frequencies are array: 3, map: 2, set: 1; deduplication preserves [array, map, set].
- Breadth-first order is [A, B, C, D, E, F]; an empty tree returns [].

Linked-list find returns a value snapshot or null; delete returns a boolean.
Tree input must be finite and acyclic. Read notes.md for operation costs and array/list tradeoffs.

[Back to the 30-day roadmap](../README.md)
