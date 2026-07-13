/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(m * k > bloomDay.length){
        return -1;
    }
    let f = 1;
    let l = Math.max(...bloomDay);
    let ans = -1;
    function isPossible(mid){
        let flower = 0;
        let bouquet = 0;
        for(let i = 0 ; i < bloomDay.length ; i++){
            if(mid >= bloomDay[i]){
                flower++;
            }else{
                flower = 0;
            }
            if(flower === k){
                bouquet++;
                flower = 0;
            }
        }
        if(bouquet >= m){
            return true;
        }
        return false;
    }
    while(f <= l){
        let mid = Math.floor((f+l)/2);
        if(isPossible(mid) === true){
            ans = mid;
            l = mid - 1;
        }else{
            f = mid + 1;
        }
    }
    return ans;
};