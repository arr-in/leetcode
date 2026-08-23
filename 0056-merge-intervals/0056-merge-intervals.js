/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let i = 0;
    while (i < intervals.length) {
        let merge = intervals[i];
        i++;
        while (i < intervals.length && merge[1] >= intervals[i][0]) {
            merge = [
                Math.min(merge[0], intervals[i][0]),
                Math.max(merge[1], intervals[i][1])
            ];
            i++;
        }
        result.push(merge);
    }
    return result;
};