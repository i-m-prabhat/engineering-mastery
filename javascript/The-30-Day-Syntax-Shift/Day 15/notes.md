# Day 15 Notes: Closures

## 1. A function retains its lexical environment

A closure is a function together with access to its surrounding lexical environment. Lexical means scope is determined by where the function is defined.

```js
function createReader(message) {
  return function read() {
    return message;
  };
}
const read = createReader("Still available");
console.log(read()); // Still available
```

The outer call has finished, but the returned function can still access message. It does not need a global variable to remember that value.

Closures retain access to bindings, not frozen snapshots of every value. If code changes a shared binding, closures reading it see the current value.

## 2. Private state through a factory

createCounter creates a count binding and returns methods that share it. increment updates that binding; get reads it.

Each separate call to createCounter creates a new environment. Calling increment twice on the first counter does not change the second counter.

The count binding is not an ordinary property of the returned object. Adding a property named count would not change the closed-over binding. The methods are the intended interface for updating it.

## 3. Capturing a username

createGreeter returns a function referring to its own username parameter. Separate greeters keep separate names.

This is useful for configured behavior: pass a value once, then reuse the returned function without resupplying it each time.

## 4. Remembering the last ID

createIdGenerator remembers lastId between calls. Starting at 100 produces 101, 102, and 103.

Uniqueness is local to one generator. Two separate generators starting at 100 both produce 101 first. Restarting the process also loses this in-memory state. These are not globally unique or persistent IDs.

The generator checks safe-integer bounds before incrementing, so it does not silently repeat imprecise numeric values after exhaustion.

## 5. Closures inside loops

The callback factory uses let index in a for loop. JavaScript creates a separate loop binding for each iteration, so later calls retain 0, 1, and 2.

With a single var index binding, callbacks created in the loop would share that binding and read its final value after the loop.

The demo invokes callbacks after the factory returns, then in reverse order. This makes it clear that the remembered index does not depend on call order.

## 6. A small module pattern

createItemManager keeps a Set private and exposes add, remove, and list. It accepts trimmed, nonblank string names and keeps unique items.

list returns a new array snapshot. Editing that returned array does not edit the private Set. Since this exercise stores strings, it avoids the nested-object sharing issues of shallow copies.

Removing a missing item returns false. A separate manager begins with its own empty Set.

## 7. Memoization

Memoization stores the result for a given input and reuses it for later calls.

memoizeUnary keeps a Map in a closure. Before computing, it checks cache.has(value), then retrieves a cached result if present.

Checking has matters: a valid result might be undefined, zero, or false. A truthiness check would mistake those results for missing entries.

If the function throws, no cache entry is stored. A later call tries the computation again.

## 8. Know this cache's contract

The wrapper supports one argument and pure synchronous functions. It does not include additional arguments or a receiver in its key.

Map keys distinguish most primitive values by value; object keys are matched by reference, not by identical object contents. Mutating an object used as an input can make cached results stale.

Do not apply this simple wrapper to time-dependent, random, state-changing, or receiver-dependent work. Promise caching and retry behavior need a separate design.

The cache has no eviction policy and can grow for as long as the returned function remains reachable. Factorial's valid input domain here is small, but a general unlimited cache can retain substantial memory.

## 9. Memoized factorial

The factorial function accepts integers 0–18, keeping the Number result inside the safe-integer range. Zero factorial is 1.

The demo wraps factorial with a computation counter:

- The first call with 5 computes 120.
- The second call with 5 returns the cached 120.
- The counter remains 1.
- Calling 0 twice adds only one computation, making the counter 2.

The counter increments when the underlying function is invoked, including an invocation that later throws. This demo logs its successful cache counts before the intentional invalid-input call.

This is whole-call memoization. It does not automatically cache every intermediate factorial inside the loop.

## 10. Lifetime and references

Captured state remains available while a reachable closure needs it. Avoid retaining large objects unnecessarily through long-lived callbacks.

An object returned from a factory can be frozen to prevent changing its public methods, but freezing is separate from closure privacy. The lesson keeps the public methods ordinary and the internal state closed over.

## Common mistakes

- Expecting the outer function to run again on every inner call.
- Treating a closure as a frozen copy of surrounding variables.
- Assuming independent factories share their private state.
- Using one var loop binding and expecting distinct saved indices.
- Exposing the internal collection instead of a snapshot.
- Claiming independent counters generate globally unique IDs.
- Checking cached results by truthiness.
- Caching stateful functions without defining key and invalidation rules.

## Quick review

1. Why can the returned reader still access message?
2. Why are two counters independent?
3. Are IDs unique across separately created generators?
4. What does let change for callbacks created in a loop?
5. Why does editing list() output not change the manager?
6. Why does a cache use has before get?
7. Does this wrapper support multiple arguments?
8. What happens when the wrapped function throws?

Run each demo and explain which binding each closure retains.
