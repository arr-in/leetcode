/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxjump = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(i > maxjump) return false;
        maxjump = Math.max(i + nums[i], maxjump);
    }
    return true;
};