# [113. Path Sum II (Medium)](https://leetcode.com/problems/path-sum-ii/)

<p>Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.</p>

<p><strong>Example 1:</strong></p>  

<img src="images/Example1.jpg">  

<pre>
<strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>Output:</strong> [[5,4,11,2],[5,8,4,5]]
<strong>Explanation:</strong> There are two paths whose sum equals targetSum:
    5 + 4 + 11 + 2 = 22
    5 + 8 + 4 + 5 = 22
</pre>

<p><strong>Example 2:</strong></p>

<img src="images/Example2.jpg">  

<pre>
<strong>Input:</strong> root = [1,2,3], targetSum = 5
<strong>Output:</strong> []
</pre>

## Solution 1

```ts
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];
    const validPath = (root: TreeNode | null, sum: number, path: number[]): void => {
        if(!root){
            return;
        }

        sum += root.val;
        path.push(root.val);

        if(root.left === null && root.right === null) { // if it's a leaf node
            if(targetSum === sum) {
                result.push([...path]);
            }
            return;
        }

        validPath(root.left, sum, [...path]);
        validPath(root.right, sum, [...path]);
    }
    validPath(root, 0, []);
    return result;
};
```