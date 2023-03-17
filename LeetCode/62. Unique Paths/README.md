# [62. Unique Paths (Medium)](https://leetcode.com/problems/unique-paths/)

<p>There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 \* 109.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> m = 3, n = 7
<strong>Output:</strong> 28
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> m = 3, n = 2
<strong>Output:</strong> 3
</pre>

## Solution 1

```ts
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = [...new Array(m)].map(() => Array(n).fill(1));
  let left: number, above: number;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      left = dp[i - 1][j];
      above = dp[i][j - 1];
      dp[i][j] = left + above;
    }
  }

  return dp[m - 1][n - 1];
}
```
