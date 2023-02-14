# [15. 3Sum (Medium)](https://leetcode.com/problems/3sum/)

<p>Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]
<strong>Explanation:</strong> nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
</pre>

## Solution 1

```ts
function threeSum(nums: number[]): number[][] {
    const results = [];
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length - 2 ; i++){
        if( i > 0 && nums[i] === nums[i-1]) continue;
        
        let j = i + 1;
        let k = nums.length - 1;
         
        while(j < k){
            let sum = nums[i] + nums[j] + nums [k];
            if(sum === 0){
                results.push([nums[i], nums[j], nums [k]]);
                while(nums[j]===nums[j+1]) j++;
                while(nums[k]===nums[k-1]) k--;

                j++;
                k--;
            }else if(sum < 0){
                j++;
            }else{
                k--;
            }
        }
    }

    return results;
};
```