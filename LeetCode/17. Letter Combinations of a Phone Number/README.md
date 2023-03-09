# [17. Letter Combinations of a Phone Number (Medium)](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

<p>Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> digits = "23"
<strong>Output:</strong> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> digits = ""
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> digits = "2"
<strong>Output:</strong> ["a","b","c"]
</pre>

## Solution 1

```ts
function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  const phoneLetters: string[] = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  const rec = (index: number, combination: string) => {
    if (digits.length === index) {
      result.push(combination);
      return;
    }

    const letters: string = phoneLetters[+digits[index]];
    for (let i: number = 0; i < letters.length; i++) {
      rec(index + 1, combination + letters[i]);
    }
  };

  if (digits) {
    rec(0, "");
  }

  return result;
}
```
