/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let sum = -Infinity;

    function solve(root) {
        if (!root) {
            return 0;
        }

        let l = solve(root.left);
        let r = solve(root.right);

        let neeche = l + r + root.val;
        let ek_branch = Math.max(l, r) + root.val;
        let sirf_root = root.val;

        sum = Math.max(
            sum,
            neeche,
            ek_branch,
            sirf_root
        );

        return Math.max(ek_branch, sirf_root);
    }

    solve(root);

    return sum;
};