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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subroot) {
    function isSame(root , subroot){
        if(!root && !subroot){
            return true;
        }
        if(root && subroot && root.val == subroot.val){
            return isSame(root.left, subroot.left) && isSame(root.right, subroot.right);
        }
        return false;
    }
    if(!root || !subroot){
        return false;
    }
    if(isSame(root, subroot)) return true

    return isSubtree(root.left, subroot) || isSubtree(root.right, subroot);
};