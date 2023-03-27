# [48. Rotate Image (Medium)](https://leetcode.com/problems/rotate-image/)

<p>You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
<strong>Output:</strong> [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</pre>

## Solution 1

```ts
function rotate(matrix: number[][]): void {
  const n: number = matrix.length;

  function transpose(matrix: number[][]): void {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  function reverse(matrix: number[][]): void {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = temp;
      }
    }
  }

  transpose(matrix);
  reverse(matrix);
}
```
