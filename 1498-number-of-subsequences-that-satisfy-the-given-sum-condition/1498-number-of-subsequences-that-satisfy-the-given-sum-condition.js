/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let ans = 0;
    nums.sort((a,b) => a-b);
    let n = nums.length;
    let power = new Array(n);
    const MOD = 1000000007;
    power[0] = 1;
    for(let i = 1 ; i < n ; i++){
        power[i] = (power[i-1] * 2) % MOD;
    }
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        if(nums[left] + nums[right] <= target){
            ans = (ans + power[right-left] ) % MOD;
            left++;
        }else{
            right--;
        }
    }
    return ans;
};