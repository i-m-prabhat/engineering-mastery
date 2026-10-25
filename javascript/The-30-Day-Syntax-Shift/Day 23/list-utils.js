"use strict";
class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}
function fromArray(values) {
  const dummy = new ListNode();
  let tail = dummy;
  for (const value of values) { tail.next = new ListNode(value); tail = tail.next; }
  return dummy.next;
}
function toArray(head) {
  const values = [];
  for (let node = head; node !== null; node = node.next) values.push(node.val);
  return values;
}
module.exports = { ListNode, fromArray, toArray };
