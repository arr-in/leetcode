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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const preorderHelper = (node) => {
        if (!node) {
            return;
        }
        preorderHelper(node.left);
        result.push(node.val);
        preorderHelper(node.right);
    };
    preorderHelper(root);
    return result;
};