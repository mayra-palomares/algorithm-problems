# [49. Group Anagrams (Medium)](https://leetcode.com/problems/combination-sum/)

<p>Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = ["eat","tea","tan","ate","nat","bat"]
<strong>Output:</strong> [["bat"],["nat","tan"],["ate","eat","tea"]]
</pre>

## Solution 1

```ts
function groupAnagrams(strs: string[]): string[][] {
  const anagramsMap: Map<string, string[]> = new Map();

  for (let str of strs) {
    const sortedAnagram = str.split("").sort().join("");
    if (anagramsMap.has(sortedAnagram)) {
      anagramsMap.get(sortedAnagram)?.push(str);
    } else {
      anagramsMap.set(sortedAnagram, [str]);
    }
  }

  return Array.from(anagramsMap.values());
}
```
