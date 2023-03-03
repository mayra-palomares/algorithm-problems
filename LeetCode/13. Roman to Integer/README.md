# [13. Roman to Integer (Easy)](https://leetcode.com/problems/roman-to-integer/)

<p>Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.</p>

<pre>
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
</pre>

<p>For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "III"
<strong>Output:</strong> 3
<strong>Explanation:</strong> III = 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = "LVIII"
<strong>Output:</strong> 58
<strong>Explanation:</strong> L = 50, V= 5, III = 3.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = "MCMXCIV"
<strong>Output:</strong> 1994
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre>

## Solution 1

```ts
function romanToInt(s: string): number {
  const conversionMap: Map<string, number> = new Map();
  conversionMap.set("CM", 900);
  conversionMap.set("CD", 400);
  conversionMap.set("XC", 90);
  conversionMap.set("XL", 40);
  conversionMap.set("IX", 9);
  conversionMap.set("IV", 4);
  conversionMap.set("M", 1000);
  conversionMap.set("D", 500);
  conversionMap.set("C", 100);
  conversionMap.set("L", 50);
  conversionMap.set("X", 10);
  conversionMap.set("V", 5);
  conversionMap.set("I", 1);
  let num: number = 0;

  for (let conversion of conversionMap.entries()) {
    const [numSymbol, value]: [string, number] = conversion;
    const regex = new RegExp(`${numSymbol}`, "g");
    let count = (s.match(regex) || []).length;
    s = s.replace(numSymbol, "");
    num += value * count;
  }

  return num;
}
```
