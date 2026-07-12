/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let first = 0;
    let last = cols - 1;
    function maxElementInColumn(mid){
        let max = -Infinity;
        let rowIndex = -1;
        for(let i = 0; i < rows; i++){
            if(mat[i][mid] > max){
                max = mat[i][mid];
                rowIndex = i;
            }
        }
        return rowIndex;
    }
    while(first <= last){

        let mid = Math.floor((first + last) / 2);

        let row = maxElementInColumn(mid);

        let left = -Infinity;
        if(mid > 0){
            left = mat[row][mid - 1];
        }
        let right = -Infinity;
        if(mid < cols - 1){
            right = mat[row][mid + 1];
        }
        if(mat[row][mid] > left && mat[row][mid] > right){
            return [row, mid];
        }
        else if(right > mat[row][mid]){
            first = mid + 1;
        }
        else{
            last = mid - 1;
        }
    }
    return [-1, -1];
};