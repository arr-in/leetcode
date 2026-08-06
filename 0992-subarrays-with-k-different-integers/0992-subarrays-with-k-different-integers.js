/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    function subarray(nums, k){
        let l = 0;
        let count = 0;
        let map = new Map();
        for(let r = 0 ; r < nums.length ; r++){
            map.set(nums[r] , (map.get(nums[r]) || 0) + 1);
            while(map.size > k){
                map.set(nums[l] , map.get(nums[l]) - 1);
                if(map.get(nums[l]) <= 0){
                    map.delete(nums[l]);
                }
                l++;
            }
            count += r-l+1;
        }
        return count;
    }
    let ans = subarray(nums,k) - subarray(nums, k-1);
    return ans;
};