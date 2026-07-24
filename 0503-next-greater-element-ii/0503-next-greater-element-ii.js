/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let n = nums.length;
    let ans = new Array(n);
    for(let i = 2*n - 1 ; i >= 0 ; i--){
        while(stack.length > 0 && stack[stack.length-1] <= nums[i%n]){
            stack.pop();
        }
        if(i < n){
            if(stack.length === 0){
                ans[i] = -1
            }else{
                ans[i] = stack[stack.length-1];
            }
        }
        stack.push(nums[i%n]);
    }
    return ans;
};