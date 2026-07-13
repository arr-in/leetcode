/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    let j = 1;
    for (let i = 0 ; i < arr.length - 1; i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i+1];
            j++;
        }
    }
    return j;
};