# [53. Maximum Subarray (Medium)](https://leetcode.com/problems/maximum-subarray/)

<p>Given an integer array nums, find the subarray with the largest sum, and return its sum.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The subarray [4,-1,2,1] has the largest sum 6.
</pre>

## Solution 1

```ts
function maxSubArray(nums: number[]): number {
  let maxSum: number = nums[0],
    currentSum: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
```
