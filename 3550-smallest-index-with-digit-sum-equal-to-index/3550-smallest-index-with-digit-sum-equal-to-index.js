/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    function sum(num){
        let sum = 0;
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num/10);
        }
        return sum;
    }
    for(let i = 0 ; i < nums.length ; i++){
        let summ = sum(nums[i]);
        if(i === summ) return i; 
    }
    return -1;
};