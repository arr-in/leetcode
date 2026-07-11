/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let dp = Array.from({ length: m }, () => Array(n).fill(-1));
    function solve(i, j){
        if(i >= m || j >= n){
            return 0;
        }
        if(i === m - 1 && j === n - 1){
            return 1;
        }
        if(dp[i][j] !== -1){
            return dp[i][j];
        }
        let down = solve(i + 1, j);
        let right = solve(i, j + 1);
        dp[i][j] = down + right;
        return dp[i][j];
    }
    return solve(0, 0);
};