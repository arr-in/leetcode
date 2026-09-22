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
var isSymmetric = function(root) {
    invert(root.right);
    if(isSame(root.left , root.right)) return true;
    return false;

};
function invert(root){
    if(!root){
        return;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invert(root.left);
    invert(root.right);
}
function isSame(p , q){
    if(!p && !q){
        return true;
    }
    if(!p || !q){
        return false;
    }

    if(p.val != q.val){
        return false;
    }
    return isSame(p.left , q.left) && isSame(p.right , q.right);
}