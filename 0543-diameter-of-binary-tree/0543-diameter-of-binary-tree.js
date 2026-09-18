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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    function height(node){
        if(!node){
            return 0;
        }
        return 1 + Math.max(height(node.left) , height(node.right))  
    }
    if(!root){
        return 0;
    }
    let left = height(root.left);
    let right = height(root.right);
    let diameter = left+right;
    let leff_diameter = diameterOfBinaryTree(root.left);
    let right_diameter = diameterOfBinaryTree(root.right);
    return Math.max(diameter, leff_diameter, right_diameter);
};