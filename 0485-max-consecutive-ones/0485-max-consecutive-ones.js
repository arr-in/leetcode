/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let maxcnt = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == 1){
            cnt++;
        }else{
            cnt = 0;
        }
        maxcnt = Math.max(cnt,maxcnt);

    }
    return maxcnt;
};