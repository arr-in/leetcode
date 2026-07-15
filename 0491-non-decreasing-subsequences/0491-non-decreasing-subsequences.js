/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let ans = [];
    function solve(current, index){
        if(current.length > 1){
            ans.push([...current]);
        }
        let set = new Set();
        for(let i = index ; i < nums.length ; i++){
            if(set.has(nums[i])){
                continue;
            }
            if (current.length === 0 || nums[i] >= current[current.length - 1]) {

                set.add(nums[i]);
                current.push(nums[i]);
                solve(current, i + 1);
                current.pop();
                
            }
        }
    }
    solve([], 0);
    return ans;
};