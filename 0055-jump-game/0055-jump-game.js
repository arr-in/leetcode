/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxindex = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(i > maxindex){
            return false;
        }
        maxindex = Math.max(maxindex , i + nums[i]);
    }
    return true;
};