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
var levelOrder = function(root) {
    if(root === null) return [];
    let queue = [root];
    let result = [];

    while(queue.length > 0){
        let levelsize = queue.length;
        let level = [];

        for(let i = 0 ; i < levelsize ; i++){
            let current = queue.shift();
            level.push(current.val);
            if(current.left !== null){
                queue.push(current.left);
            }
            if(current.right !== null){
                queue.push(current.right);
            }
        }
        
        result.push(level);
    }
    return result;
};