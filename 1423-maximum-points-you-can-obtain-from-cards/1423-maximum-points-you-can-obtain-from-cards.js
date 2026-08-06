/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let lsum = 0;
    let rsum = 0;
    let maxsum = 0;
    for(let i = 0 ; i < k ; i++){
        lsum += cardPoints[i];
    }
    maxsum = lsum;
    let l = cardPoints.length-1;
    for(let j = k-1 ; j >= 0 ; j--){
        lsum = lsum - cardPoints[j];
        rsum = rsum + cardPoints[l];
        l--;
        maxsum = Math.max(maxsum , lsum + rsum);
    }
    return maxsum;
};