/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let roww = new Array(rows).fill(0);
    let coll = new Array(cols).fill(0);
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(matrix[i][j] === 0){
                roww[i] = 1;
                coll[j] = 1;
            }
        }
    }
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(roww[i] === 1 || coll[j] === 1){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};