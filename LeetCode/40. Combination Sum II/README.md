# [40. Combination Sum II (Medium)](https://leetcode.com/problems/combination-sum-ii/)

<p>Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> candidates = [10,1,2,7,6,1,5], target = 8
<strong>Output:</strong> [
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,5,2,1,2], target = 5
<strong>Output:</strong> [
[1,2,2],
[5]
]

## Solution 1

```ts
function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort();

    const rec = (index: number, combination: number[], total: number): void => {
        if(total === target) {
            result.push([...combination]);
            return;
        }

        if(total > target || index >= candidates.length) {
            return;
        }

        combination.push(candidates[index]);
        rec(index + 1, combination, total + candidates[index]);
        combination.pop();

        while(candidates[index] === candidates[index + 1]) index++;
        rec(index + 1, combination, total);
    }

    rec(0, [], 0)
    return result;
};
```
