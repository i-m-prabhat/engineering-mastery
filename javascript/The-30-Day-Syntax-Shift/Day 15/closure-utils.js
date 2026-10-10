"use strict";

// Task 1: the inner function retains access to the outer variable.
function createMessageReader(message) {
  return function readMessage() {
    return message;
  };
}

// Task 2: each factory call creates its own private count binding.
function createCounter() {
  let count = 0;
  return {
    increment() {
      if (count === Number.MAX_SAFE_INTEGER) throw new RangeError("counter exhausted");
      count++;
      return count;
    },
    get() {
      return count;
    },
  };
}

// Task 3: IDs are unique within one generator, until its safe-integer limit.
function createIdGenerator(start = 0) {
  if (!Number.isSafeInteger(start) || start < 0) {
    throw new RangeError("start must be a nonnegative safe integer");
  }
  let lastId = start;
  return function nextId() {
    if (lastId === Number.MAX_SAFE_INTEGER) throw new RangeError("ID range exhausted");
    lastId++;
    return lastId;
  };
}

// Task 4: capture the argument instead of relying on a global username.
function createGreeter(username) {
  return function greet() {
    return `Hello, ${username}!`;
  };
}

// Task 5: let creates a separate loop binding for each callback.
function createIndexLoggers(count) {
  if (!Number.isSafeInteger(count) || count < 0) {
    throw new RangeError("count must be a nonnegative safe integer");
  }
  const callbacks = [];
  for (let index = 0; index < count; index++) {
    callbacks.push(function logIndex() {
      console.log("Captured index:", index);
      return index;
    });
  }
  return callbacks;
}

// Task 6: keep a Set private and expose snapshots, not the Set itself.
function createItemManager() {
  const items = new Set();
  function normalize(item) {
    if (typeof item !== "string" || item.trim() === "") {
      throw new TypeError("item must be a nonblank string");
    }
    return item.trim();
  }
  return {
    add(item) {
      items.add(normalize(item));
      return items.size;
    },
    remove(item) {
      return items.delete(normalize(item));
    },
    list() {
      return [...items];
    },
  };
}

// Task 7: a deliberately single-argument cache for pure synchronous functions.
function memoizeUnary(fn) {
  if (typeof fn !== "function") throw new TypeError("fn must be a function");
  const cache = new Map();
  return function memoized(value) {
    if (cache.has(value)) return cache.get(value);
    const result = fn(value); // Throws before caching if computation fails.
    cache.set(value, result);
    return result;
  };
}

// Task 8: integer Number results stay safe for this bounded domain.
function factorial(number) {
  if (!Number.isInteger(number) || number < 0 || number > 18) {
    throw new RangeError("number must be an integer from 0 through 18");
  }
  let product = 1;
  for (let factor = 2; factor <= number; factor++) product *= factor;
  return product;
}

module.exports = {
  createMessageReader, createCounter, createIdGenerator, createGreeter,
  createIndexLoggers, createItemManager, memoizeUnary, factorial,
};
