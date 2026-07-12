/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = Array.from(
        { length: coins.length },
        () => Array(amount + 1).fill(-1)
    );

    function solve(target, index){

        if(target === 0){
            return 0;
        }

        if(target < 0){
            return Infinity;
        }

        if(index >= coins.length){
            return Infinity;
        }

        if(dp[index][target] !== -1){
            return dp[index][target];
        }

        let take = 1 + solve(target - coins[index], index);

        let notTake = solve(target, index + 1);
        dp[index][target] = Math.min(take, notTake);
        return dp[index][target];
    }
    let ans = solve(amount, 0);
    return ans === Infinity ? -1 : ans;
};