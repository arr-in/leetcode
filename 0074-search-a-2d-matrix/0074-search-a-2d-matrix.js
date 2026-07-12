/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let cols = matrix[0].length;
    let f = 0;
    let l = matrix.length-1;
    let target_row = -1;
    while(f<=l){
        let mid = Math.floor((f+l)/2);
        if(matrix[mid][0] <= target && matrix[mid][cols-1] >= target){
            target_row = mid;
        }
        if(matrix[mid][0] > target){
            l = mid - 1;
        }else{
            f = mid + 1;
        }
    }
    if(target_row == -1) return false;
    let ff = 0;
    let ll = cols-1;
    while(ff<=ll){
        let mid = Math.floor((ff+ll)/2);
        if(matrix[target_row][mid] === target){
            return true;
        }
        if(matrix[target_row][mid] > target){
            ll = ll - 1;
        }else{
            ff = ff + 1;
        }
    }
    return false;
};