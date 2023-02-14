# [74. Search a 2D Matrix (Medium)](https://leetcode.com/problems/search-a-2d-matrix/)

<p>You are given an m x n integer matrix matrix with the following two properties:

* Each row is sorted in non-decreasing order.
* The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>Output:</strong> true
</pre>

## Solution 1

```ts
function searchMatrix(matrix: number[][], target: number): boolean {
    let m: number = matrix.length,
        n: number = matrix[0].length,
        low: number = 0,
        high: number = m * n - 1,
        mid: number,
        row: number,
        column: number,
        guess: number;

    while(low <= high){
        mid = Math.round((low + high)/2);
        row = Math.floor(mid/n);
        column = mid%n
        guess = matrix[row][column];

        if(guess === target){
            return true
        }else if(guess < target){
            low = mid + 1;
        }else{
            high = mid -1;
        }
    }
    return false;
};
```