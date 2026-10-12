"use strict";
const { Stack, Queue } = require("./data-structures");

function runOrderingDemo() {
  const stack = new Stack();
  const queue = new Queue();
  console.log("Task 2 - empty pop/peek:", stack.pop(), stack.peek());
  console.log("Task 3 - empty dequeue/peek:", queue.dequeue(), queue.peek());
  for (const value of ["first", "second", "third"]) {
    stack.push(value);
    queue.enqueue(value);
  }
  console.log("Stack top:", stack.peek());
  console.log("Queue front:", queue.peek());
  console.log("LIFO:", stack.pop(), stack.pop(), stack.pop());
  console.log("FIFO:", queue.dequeue(), queue.dequeue(), queue.dequeue());
  console.log("Sizes after draining:", stack.size, queue.size);
  queue.enqueue("reused");
  console.log("Queue reuse:", queue.dequeue(), "| size:", queue.size);
}
module.exports = { runOrderingDemo };
if (require.main === module) runOrderingDemo();
