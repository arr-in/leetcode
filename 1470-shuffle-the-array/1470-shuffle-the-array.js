/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let i = 0;
    let j = (nums.length)/2;
    let ans = [];
    while(j < nums.length){
        ans.push(nums[i]);
        i++;
        ans.push(nums[j]);
        j++;
    }
    return ans;
};