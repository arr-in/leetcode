/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = Array.from(
        { length: coins.length },
        () => Array(amount + 1).fill(-1)
    );
    function solve(index, target){
        if(target === 0){
            return 1;
        }
        if(index >= coins.length || target < 0){
            return 0;
        }
        if(dp[index][target] !== -1){
            return dp[index][target];
        }
        let take = solve(index, target - coins[index]);
        let nottake = solve(index+1, target);
        dp[index][target] = take + nottake;
        return dp[index][target];
    }
    return solve(0, amount);
};