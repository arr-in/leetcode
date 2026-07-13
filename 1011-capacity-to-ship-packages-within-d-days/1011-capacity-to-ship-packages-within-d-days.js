/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let f = Math.max(...weights);
    let l = 0;
    for(let i = 0 ; i < weights.length ; i++){
        l = l + weights[i];
    }
    let ans = l;
    function decide(mid){
        let day = 1;
        let weight = 0;
        for(let i = 0 ; i < weights.length ; i++){
            weight = weight + weights[i];
            if(weight > mid){
                day++;
                weight = weights[i];
            } 
        }
        if(day <= days){
            return true;
        }
        return false;
    }
    while(f <= l){
        let mid = Math.floor((f+l)/2);
        if(decide(mid) === true){
            ans = mid;
            l = mid - 1;
        }else{
            f = mid + 1;
        }
    }
    return ans;
};