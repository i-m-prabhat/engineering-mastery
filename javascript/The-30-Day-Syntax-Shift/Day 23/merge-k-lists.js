"use strict";
const { ListNode, fromArray, toArray } = require("./list-utils");

class MinHeap {
  #items = [];
  get size() { return this.#items.length; }
  push(node) {
    const items = this.#items;
    items.push(node);
    let index = items.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (items[parent].val <= items[index].val) break;
      [items[parent], items[index]] = [items[index], items[parent]];
      index = parent;
    }
  }
  pop() {
    if (this.#items.length === 0) return null;
    const items = this.#items;
    const first = items[0];
    const last = items.pop();
    if (items.length > 0) {
      items[0] = last;
      let index = 0;
      while (true) {
        let smallest = index;
        const left = index * 2 + 1;
        const right = left + 1;
        if (left < items.length && items[left].val < items[smallest].val) smallest = left;
        if (right < items.length && items[right].val < items[smallest].val) smallest = right;
        if (smallest === index) break;
        [items[index], items[smallest]] = [items[smallest], items[index]];
        index = smallest;
      }
    }
    return first;
  }
}

// Sorted finite acyclic input lists end in null; create independent output nodes.
function mergeKLists(lists) {
  if (!Array.isArray(lists)) throw new TypeError("lists must be an array");
  const heap = new MinHeap();
  for (const head of lists) if (head !== null) heap.push(head);
  const dummy = new ListNode();
  let tail = dummy;
  while (heap.size > 0) {
    const node = heap.pop();
    tail.next = new ListNode(node.val);
    tail = tail.next;
    if (node.next !== null) heap.push(node.next);
  }
  return dummy.next;
}
function runMergeDemo() {
  for (const arrays of [[[1, 4, 5], [1, 3, 4], [2, 6]], [], [[], []], [[-2, 0], [0, 3], []]]) {
    const lists = arrays.map(fromArray);
    console.log("Merge k lists:", arrays, "| result:", toArray(mergeKLists(lists)));
    console.log("Inputs unchanged:", lists.map(toArray));
  }
}
module.exports = { MinHeap, mergeKLists, runMergeDemo };
if (require.main === module) runMergeDemo();
