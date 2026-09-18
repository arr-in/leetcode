/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(root){
        if(!root){
            return 0;
        }
        return 1 + Math.max(height(root.left) , height(root.right));
    }
    if(!root){
        return true;
    }
    let left = height(root.left);
    let right = height(root.right);
    if(Math.abs(left - right) > 1){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};