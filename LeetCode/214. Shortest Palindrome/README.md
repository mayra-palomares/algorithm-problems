# [214. Shortest Palindrome (Hard)](https://leetcode.com/problems/shortest-palindrome/)

<p>You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "abcd"
<strong>Output:</strong> "dcbabcd"
</pre>

## Solution 1

```ts
function shortestPalindrome(s: string): string {
  const originalStr = s,
    originalReversed = originalStr.split("").reverse().join("");
  let reversed = originalReversed;

  while (reversed !== s) {
    reversed = reversed.slice(1);
    s = s.slice(0, -1);
  }

  return originalReversed.slice(0, -reversed.length) + originalStr;
}
```
