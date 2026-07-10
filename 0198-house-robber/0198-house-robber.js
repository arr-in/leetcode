/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length).fill(-1);
    function solve(index){

        if(index >= nums.length){
            return 0;
        }
        if(dp[index] !== -1){
            return dp[index];
        }
        // Include current house
        let include = nums[index] + solve(index + 2);
        // Exclude current house
        let exclude = solve(index + 1);
        dp[index] = Math.max(include, exclude);
        return dp[index];
    }

    return solve(0);
};