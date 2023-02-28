# [112. Path Sum (Easy)](https://leetcode.com/problems/path-sum/)

<p>Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.</p>

<p><strong>Example 1:</strong></p>

<img src="images/Example1.jpg">  

<pre>
<strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
<strong>Output:</strong> true
<strong>Explanation:</strong> The root-to-leaf path with the target sum is shown.
</pre>

<p><strong>Example 2:</strong></p>

<img src="images/Example2.jpg">  

<pre>
<strong>Input:</strong> root = [1,2,3], targetSum = 5
<strong>Output:</strong> true
<strong>Explanation:</strong> There two root-to-leaf paths in the tree:
    (1 --> 2): The sum is 3.
    (1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
</pre>

## Solution 1

```ts
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    const validPath = (root: TreeNode | null, sum: number) => {
        if(!root){
            return false;
        }

        sum += root.val;

        if(root.left === null && root.right === null){ //if it's a leaf node
            return sum === targetSum; 
        }

        return validPath(root.left, sum) || validPath(root.right, sum);
    }

    return validPath(root, 0);
};
```