/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    let dp = Array.from({ length: triangle.length }, () => []);
    function solve(i, j) {
        if (i == triangle.length - 1) {
            return triangle[i][j];
        }
        if (dp[i][j] != undefined) {
            return dp[i][j];
        }
        let left = solve(i + 1, j);
        let right = solve(i + 1, j + 1);
        dp[i][j] = triangle[i][j] + Math.min(left, right);
        return dp[i][j];
    }
    return solve(0, 0);
};