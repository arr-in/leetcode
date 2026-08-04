/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0; 
    let r = 0;
    let zero = 0;
    let maxlen = 0;
    while(r < nums.length){
        if(nums[r] === 0) zero++;
        while(zero > k){
            if(nums[l] === 0) zero--;
            l++;
        }
        if(zero <= k){
            let len = r-l+1;
            maxlen = Math.max(len, maxlen);
        }
        r++;
    }
    return maxlen;
};