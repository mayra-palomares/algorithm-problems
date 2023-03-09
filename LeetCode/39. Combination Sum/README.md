# [39. Combination Sum (Medium)](https://leetcode.com/problems/combination-sum/)

<p>Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,3,6,7], target = 7
<strong>Output:</strong> [[2,2,3],[7]]
<strong>Explanation:</strong> 
- 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
- 7 is a candidate, and 7 = 7.
These are the only two combinations.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,3,5], target = 8
<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2], target = 1
<strong>Output:</strong> []

## Solution 1

```ts
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    const rec = (index: number, combination: number[], total: number): void => {
        if(total === target) {
            result.push(combination);
            return;
        }

        if(index >= candidates.length || total > target) {
            return;
        }

        rec(index + 1, combination, total);
        rec(index, [...combination, candidates[index]], total + candidates[index]);
    }

    rec(0, [], 0);

    return result;
};
```
