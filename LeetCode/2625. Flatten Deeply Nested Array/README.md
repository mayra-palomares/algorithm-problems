# [2625. Flatten Deeply Nested Array (Medium)](https://leetcode.com/problems/flatten-deeply-nested-array/)

<p>Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
<strong>Output:</strong> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
</pre>

## Solution 1

```ts
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];

  const flatRec = (array, level: number) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && level > 0) {
        flatRec(array[i], level - 1);
      } else {
        result.push(array[i]);
      }
    }
  };

  flatRec(arr, n);
  return result;
};
```
