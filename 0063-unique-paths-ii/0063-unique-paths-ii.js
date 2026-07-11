/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(-1));
    function solve(i, j){
        if(i >= rows || j >= cols){
            return 0;
        }
        if(obstacleGrid[i][j] === 1){
            return 0;
        }
        if(i === rows - 1 && j === cols - 1){
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