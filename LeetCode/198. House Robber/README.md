# [198. House Robber (Medium)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

<p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>nums = [1,2,3,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
</pre>

## Solution 1

```ts
function rob(nums: number[]): number {
    let oneBefore: number = 0, 
        twoBefore: number = 0,
        currentAmt: number;
    for(let i=0; i<nums.length; i++){
        currentAmt = Math.max(nums[i] + twoBefore, oneBefore)
        twoBefore = oneBefore;
        oneBefore = currentAmt;
    }
    return Math.max(oneBefore, twoBefore);
}
```