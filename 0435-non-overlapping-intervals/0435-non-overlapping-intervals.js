/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let cnt = 0;
    intervals.sort((a,b)=> a[1] - b[1]);
    let previnterval = intervals[0][1];
    for(let i = 1 ; i < intervals.length ; i++){
        if(intervals[i][0] < previnterval){
            cnt++;
        }else{
            previnterval = intervals[i][1];
        }
    }
    return cnt;
};