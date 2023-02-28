
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


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