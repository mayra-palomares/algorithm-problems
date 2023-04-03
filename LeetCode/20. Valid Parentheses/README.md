# [20. Valid Parentheses (Easy)](https://leetcode.com/problems/valid-parentheses/)

<p>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "()"
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = "()[]{}"
<strong>Output:</strong> true
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = "(]"
<strong>Output:</strong> false
</pre>

## Solution 1

```ts
function isValid(s: string): boolean {
  let isValid: boolean = true,
    i: number = 0;
  const stack: string[] = [];

  while (isValid && i < s.length) {
    let char: string = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let topChar = stack.pop();
      isValid =
        (topChar === "(" && char === ")") ||
        (topChar === "{" && char === "}") ||
        (topChar === "[" && char === "]");
    }
    i++;
  }

  isValid = isValid && stack.length === 0;

  return isValid;
}
```
