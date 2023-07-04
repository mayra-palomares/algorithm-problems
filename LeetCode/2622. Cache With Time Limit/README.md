# [2622. Cache With Time Limit (Medium)](https://leetcode.com/problems/cache-with-time-limit/)

<p>Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

- set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

- get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

- count(): returns the count of un-expired keys.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
["TimeLimitedCache", "set", "get", "count", "get"]
[[], [1, 42, 100], [1], [], [1]]
[0, 0, 50, 50, 150]
<strong>Output:</strong> [null, false, 42, 1, -1]
</pre>

## Solution 1

```ts
class TimeLimitedCache {
  cache: Map<number, number>;
  timeout: Map<number, number>;

  constructor() {
    this.cache = new Map();
    this.timeout = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let exist = false,
      timeoutId;
    if (this.cache.has(key)) {
      exist = true;
      timeoutId = this.timeout.get(key);
      clearTimeout(timeoutId);
      this.timeout.delete(key);
    }
    this.cache.set(key, value);

    timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.timeout.set(key, timeoutId);
    return exist;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key) : -1;
  }

  count(): number {
    return this.cache.size;
  }
}
```
