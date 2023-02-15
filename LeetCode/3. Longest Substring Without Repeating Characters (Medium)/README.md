# [3. Longest Substring Without Repeating Characters (Medium)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

<p>Given a string s, find the length of the longest substring without repeating characters.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.
</pre>

## Solution 1

```ts
function lengthOfLongestSubstring(s: string): number {
    let length : number = 0,
        maxLength: number = 0,
        j: number = 0,
        counter = new Map<string, number>();

    for(let i:number = 0 ; i < s.length; i++) {
        let currentChar = s[i];

        //Update counters
        let charCounter = counter.get(currentChar) || 0;
        charCounter += 1;
        counter.set(currentChar, charCounter);
        length++;

        //Remove characters if repeated are found
        while(charCounter > 1) {
            let startChar = s[j];
            let startCharCounter = counter.get(startChar) || 0;
            counter.set(startChar, startCharCounter - 1);
            j += 1;
            length -= 1;

            charCounter = counter.get(currentChar)  || 0;
        }

        //Save max length
        maxLength = Math.max(maxLength, length);
    }

    return maxLength;
}
```