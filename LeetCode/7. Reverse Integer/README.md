# [7. Reverse Integer (Medium)](https://leetcode.com/problems/reverse-integer/)

<p>Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = -123
<strong>Output:</strong> -321
</pre>

## Solution 1

```ts
function reverse(x: number): number {
  let reversedNum: number = +Math.abs(x)
    .toString()
    .split("")
    .reverse()
    .join("");
  if (x < 0) {
    reversedNum = reversedNum > Math.pow(2, 31) ? 0 : -reversedNum;
  } else {
    reversedNum = reversedNum > Math.pow(2, 31) - 1 ? 0 : reversedNum;
  }
  return reversedNum;
}
```
