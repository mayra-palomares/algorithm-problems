
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
 

function isSymmetric(root: TreeNode | null): boolean {
    const isSymmetricFn = (leftNode: TreeNode | null, rightNode: TreeNode | null) => {
        if(!leftNode || !rightNode){
            return !leftNode && !rightNode;
        }else{
            return leftNode.val === rightNode.val && isSymmetricFn(leftNode.left, rightNode.right) && isSymmetricFn(leftNode.right, rightNode.left);
        } 
    }

    return isSymmetricFn(root!.left, root!.right);
};