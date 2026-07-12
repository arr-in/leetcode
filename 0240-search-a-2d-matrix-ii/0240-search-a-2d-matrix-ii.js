/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let mr = 0 ;
    let mc = cols-1;
    while(mr < rows && mc >= 0){
        if(matrix[mr][mc] === target) return true;
        if(matrix[mr][mc] > target){
            mc = mc - 1;
        }else{
            mr = mr + 1;
        }
    }
    return false;
};