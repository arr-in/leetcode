/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

    let total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    if(total % 2 !== 0){
        return false;
    }
    let target = total / 2;
    let dp = Array.from(
        { length: nums.length },
        () => Array(target + 1).fill(-1)
    );
    function solve(index, target){

        if(target === 0){
            return true;
        }
        if(index === nums.length || target < 0){
            return false;
        }
        if(dp[index][target] !== -1){
            return dp[index][target];
        }
        let take = solve(index + 1, target - nums[index]);
        let notTake = solve(index + 1, target);
        dp[index][target] = take || notTake;
        return dp[index][target];
    }
    return solve(0, target);
};