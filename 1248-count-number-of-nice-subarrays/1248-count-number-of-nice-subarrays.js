/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    function nice(nums, k){
        let l = 0 ;
        let sum = 0;
        let count = 0;
        for(let r = 0 ; r < nums.length ; r++){
            sum = sum + (nums[r]%2);
            while(sum > k){
                sum = sum - (nums[l]%2);
                l++;
            }
            count = count + r-l+1;
        }
        return count;
    }
    let ans = nice(nums, k) - nice(nums, k-1);
    return ans;
};