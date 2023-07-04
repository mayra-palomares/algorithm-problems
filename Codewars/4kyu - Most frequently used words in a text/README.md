# [4kyu - Most frequently used words in a text](https://www.codewars.com/kata/51e056fe544cf36c410000fb)

<p><strong>Description:</strong></p>

<p>Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.</p>

<p><strong>Assumptions:</strong></p>

<p>

- A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
- Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
- Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
- Matches should be case-insensitive, and the words in the result should be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>"In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
<strong>Output:</strong> ["a", "of", "on"]
</pre>

## Solution 1

```ts
function topThreeWords(text) {
  text = text.replace(/[^\w']+/g, " ").toLowerCase();
  const words = text.match(/\b[a-z']+\b/g) || [];
  const count = {};
  words.forEach((w) => {
    count[w] = (count[w] || 0) + 1;
  });

  const sortedWords = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sortedWords.splice(0, 3).map(([w]) => w);
}
```
