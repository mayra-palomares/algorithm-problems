# [101. Symmetric Tree (Easy)](https://leetcode.com/problems/symmetric-tree/)

<p>Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).</p>

<p><strong>Example 1:</strong></p>

<img src="images/Example1.jpg">  

<pre>
<strong>Input:</strong>root = [1,2,2,3,4,4,3]
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<img src="images/Example2.jpg">  

<pre>
<strong>Input:</strong>root = [1,2,2,null,3,null,3]
<strong>Output:</strong> false
</pre>

## Solution 1

```ts
function isSymmetric(root: TreeNode | null): boolean {
    const isSymmetricFn = (leftNode: TreeNode | null, rightNode: TreeNode | null) => {
        if(!leftNode || !rightNode){
            return !leftNode && !rightNode; // Return true if both nodes are null
        }else{
            return leftNode.val === rightNode.val &&
                isSymmetricFn(leftNode.left, rightNode.right) &&
                isSymmetricFn(leftNode.right, rightNode.left);
        } 
    }

    return isSymmetricFn(root!.left, root!.right);
};
```