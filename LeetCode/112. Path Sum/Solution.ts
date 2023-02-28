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