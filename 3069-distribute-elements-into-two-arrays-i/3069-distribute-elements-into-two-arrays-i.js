/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let n = nums.length;
    let i = 0;
    let arr1 = [];
    let arr2 = [];
    while(i < n){
        if(arr1.length === 0){
            arr1.push(nums[i]);
            i++;
        }
        if(arr2.length === 0){
            arr2.push(nums[i]);
            i++;
        }
        if(arr1.length > 0 && arr2.length > 0){
            if(arr1[arr1.length-1] > arr2[arr2.length-1]){
                arr1.push(nums[i]);
                i++;
            }else{
                arr2.push(nums[i]);
                i++;
            }
        }
    }
    let result = [...arr1 , ...arr2];
    return result;
};