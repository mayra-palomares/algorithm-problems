# [125. Valid Palindrome (Easy)](https://leetcode.com/problems/valid-palindrome/)

<p>A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "A man, a plan, a canal: Panama"
<strong>Output:</strong> true
<strong>Explanation:</strong> "amanaplanacanalpanama" is a palindrome.
</pre>

## Solution 1

```ts
    function isPalindrome(s: string): boolean {
    const text:Array<string> = s.toLowerCase().replace(/[^a-z0-9]/gi,'').split('')

    for(let i=0, j= text.length -1; i<=j; i++, j--){
        if(text[i] !== text[j]){
            return false
        }
    }
    return true
};
```