/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    function subarr(nums, goal){
        if(goal < 0) return 0;
        let l = 0;
        let sum = 0;
        let count = 0;
        for(let r = 0 ; r < nums.length ; r++){
            sum = sum + nums[r];
            while(sum > goal){
                sum = sum - nums[l];
                l++;
            }
            count += r-l+1;
        }
        return count;
    }
    let ans = subarr(nums, goal) - subarr(nums, goal-1);
    return ans;
};