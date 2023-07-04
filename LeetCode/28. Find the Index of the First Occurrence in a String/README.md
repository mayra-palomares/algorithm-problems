# [28. Find the Index of the First Occurrence in a String (Easy)](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

<p>Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> haystack = "sadbutsad", needle = "sad"
<strong>Output:</strong> 0
<strong>Explanation:</strong> "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre>

## Solution 1

```ts
function strStr(haystack: string, needle: string): number {
  let i: number = 0,
    j: number = 0;
  const haystackLen: number = haystack.length,
    needleLen: number = needle.length;
  while (i < haystackLen && j < needleLen) {
    if (haystack[i + j] === needle[j]) {
      j++;
    } else {
      i++;
      j = 0;
    }
  }

  return i < haystackLen ? i : -1;
}
```
