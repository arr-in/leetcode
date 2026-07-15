/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    function swap(i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    function solve(index){
        if(index === nums.length){
            ans.push([...nums]);
            return;
        }
        for(let i = index ; i < nums.length ; i++){
            swap(i, index);
            solve(index+1);
            swap(i, index);
        }
    }
    solve(0);
    return ans;
};