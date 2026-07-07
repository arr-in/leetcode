/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length;
    if(nums.length == 1) return 0;
    if(nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;
    let f = 1;
    let l = n-2;
    while(f<=l){
        let mid = Math.floor((f+l)/2);
        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]){
            return mid;
        }
        if(nums[mid] > nums[mid+1]){
            l = mid - 1;
        }else{
            f = mid + 1;
        }
    }
    return -1;
};