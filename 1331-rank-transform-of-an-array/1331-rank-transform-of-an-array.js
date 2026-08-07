/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let set = new Set();
    for(let i = 0 ; i < arr.length ; i++){
        set.add(arr[i]);
    }
    let sortedarray = [...set].sort((a,b)=>a-b);
    let map = new Map();
    for(let i = 0 ; i < sortedarray.length ; i++){
        map.set(sortedarray[i] , i+1);
    }
    let ans = [];
    for(let i = 0 ; i < arr.length ; i++){
        ans.push(map.get(arr[i]));
    }
    return ans;
};