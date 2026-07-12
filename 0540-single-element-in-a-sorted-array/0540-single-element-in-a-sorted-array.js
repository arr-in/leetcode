/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let f = 0;
    let l = nums.length-1;
    while(f<=l){
        let mid = Math.floor((f+l)/2);
        if(nums[mid] != nums[mid+1] && nums[mid] != nums[mid-1]) return nums[mid];
        if((mid % 2 === 1 && nums[mid] == nums[mid-1]) || mid % 2 === 0 && nums[mid] === nums[mid+1]){
            f = mid+1;
        }else{
            l = mid-1;
        }
    }
    
};