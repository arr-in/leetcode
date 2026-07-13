/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = Array(n+1).fill(-1);
    function solve(n){
        if(n==1){
            return 1;
        }
        if(n==2){
            return 2;
        }
        if(dp[n] != -1){
            return dp[n];
        }
        dp[n] = solve(n-1) + solve(n-2);
        return dp[n];
    }
    return solve(n);
};