
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