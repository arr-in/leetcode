/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let f = 0;
    let l = nums.length-1;
    while(f<=l){
        let mid = Math.floor((f+l)/2);
        if(nums[mid] === target) return true;
        if(nums[mid] === nums[f] && nums[mid] === nums[l]){
            f++;
            l--;
            continue;
        }
        if(nums[mid] >= nums[f]){
            if(nums[f] <= target && nums[mid] > target){
                l = mid - 1;
            }else{
                f = mid + 1;
            }
        }else{
            if(nums[mid] < target && nums[l] >= target){
                f = mid + 1;
            }else{
                l = mid - 1;
            }
        }
    }
    return false;
};