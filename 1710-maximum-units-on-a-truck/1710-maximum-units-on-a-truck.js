/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1]);
    let ans = 0;
    let size = 0;
    for(let i = 0 ; i < boxTypes.length ; i++){
        let take = Math.min(truckSize - size , boxTypes[i][0]);
        size += take;
        ans = ans + take * boxTypes[i][1];
        if(truckSize === size){
            break;
        }    
    }
    return ans;
};