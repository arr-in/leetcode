/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    function solve(i, j, index){
        if(index === word.length){
            return true;
        }
        if(i < 0 || j < 0 || i >= rows || j >= cols){
            return false;
        }
        if(board[i][j] === '$'){
            return false;
        }
        if(board[i][j] != word[index]){
            return false;
        }
        let temp = board[i][j];
        board[i][j] = '$';

        let up = solve(i, j-1, index+1)
        let down = solve(i, j+1, index+1)
        let right = solve(i+1, j, index+1)
        let left = solve(i-1, j, index+1)

        board[i][j] = temp;
        return up || down || right || left;
    }
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(board[i][j] === word[0]){
                if(solve(i,j,0) === true){
                    return true;
                }
            }
        }
    }
    return false;
};