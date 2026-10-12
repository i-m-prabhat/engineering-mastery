"use strict";

// Task 1: a singly linked list, with private links and a tail for O(1) append.
class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  get size() { return this.#size; }

  append(value) {
    const node = { value, next: null };
    if (this.#tail) this.#tail.next = node;
    else this.#head = node;
    this.#tail = node;
    this.#size++;
    return this.#size;
  }

  // Return a small snapshot, not an internal link the caller could corrupt.
  find(value) {
    let current = this.#head;
    while (current) {
      if (current.value === value) return { value: current.value };
      current = current.next;
    }
    return null;
  }

  // Delete the first strict-equality match.
  delete(value) {
    let previous = null;
    let current = this.#head;
    while (current) {
      if (current.value === value) {
        if (previous) previous.next = current.next;
        else this.#head = current.next;
        if (current === this.#tail) this.#tail = previous;
        this.#size--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  toArray() {
    const values = [];
    let current = this.#head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

// Task 2: last in, first out. Empty pop/peek return undefined.
class Stack {
  #items = [];
  get size() { return this.#items.length; }
  push(value) { return this.#items.push(value); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items[this.#items.length - 1]; }
}

// Task 3: linked queue avoids shifting an array or retaining removed entries.
class Queue {
  #head = null;
  #tail = null;
  #size = 0;
  get size() { return this.#size; }

  enqueue(value) {
    const node = { value, next: null };
    if (this.#tail) this.#tail.next = node;
    else this.#head = node;
    this.#tail = node;
    this.#size++;
    return this.#size;
  }

  dequeue() {
    if (!this.#head) return undefined;
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    if (!this.#head) this.#tail = null;
    return value;
  }

  peek() { return this.#head ? this.#head.value : undefined; }
}

// Task 4: Map/Set use SameValueZero equality and preserve insertion order.
function countFrequencies(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}
function deduplicate(values) {
  return [...new Set(values)];
}

// Task 5: visit a finite acyclic tree in level order.
function breadthFirst(root) {
  if (root == null) return [];
  const queue = new Queue();
  const result = [];
  queue.enqueue(root);
  while (queue.size > 0) {
    const node = queue.dequeue();
    result.push(node.value);
    if (node.left != null) queue.enqueue(node.left);
    if (node.right != null) queue.enqueue(node.right);
  }
  return result;
}

module.exports = { LinkedList, Stack, Queue, countFrequencies, deduplicate, breadthFirst };
