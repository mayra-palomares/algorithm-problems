# [54. Spiral Matrix (Medium)](https://leetcode.com/problems/maximum-subarray/)

<p>Given an m x n matrix, return all elements of the matrix in spiral order.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
    matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]]
<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong>
    matrix = [[1,2,3,4],
              [5,6,7,8],
              [9,10,11,12]]
<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
</pre>

## Solution 1

```ts
function spiralOrder(matrix: number[][]): number[] {
  const spiral: number[] = [],
    m: number = matrix.length,
    n: number = matrix[0].length;
  let left: number = 0,
    right: number = n - 1,
    top: number = 0,
    bottom: number = m - 1;

  while (spiral.length < m * n) {
    for (let i = left; i <= right; i++) {
      spiral.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiral.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && top <= bottom; i--) {
      spiral.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && left <= right; i--) {
      spiral.push(matrix[i][left]);
    }
    left++;
  }

  return spiral;
}
```
