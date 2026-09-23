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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0){
        let levelsize = queue.length;
        let level = [];
        for(let i = 0 ; i < levelsize ; i++){
            let current = queue.shift();
            level.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        if(result.length % 2 === 1){
            level.reverse();
        }
        result.push(level);
    }
    return result;
};