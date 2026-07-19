/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    function solve(index){
        if(index === nums.length){
            ans.push([...nums]);
            return;
        }
        for(let i = index ; i < nums.length ; i++){
            [nums[i] , nums[index]] = [nums[index], nums[i]];
            solve(index+1);
            [nums[i] , nums[index]] = [nums[index], nums[i]];
        }
    }
    solve(0);
    return ans;
};