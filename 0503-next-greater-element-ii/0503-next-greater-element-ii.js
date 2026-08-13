/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let ans = [];
    let n = nums.length;
    for(let i = 2*n - 1 ; i >= 0 ; i--){
        while(stack.length > 0 && stack[stack.length-1] <= nums[i%n]){
            stack.pop();
        }
        if(stack.length === 0){
            ans[i%n] = -1; 
        }else{
            ans[i%n] = stack[stack.length-1];
        }
        stack.push(nums[i%n]);
    }
    return ans;
};