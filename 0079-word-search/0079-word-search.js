/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let rows = board.length;
    let cols = board[0].length;

    function solve(x, y, index){
        if( x < 0 || y < 0 || x >= rows || y >= cols || board[x][y] === '$') return false;

        if(board[x][y] !== word[index]){
            return false;
        }

        if(index === word.length - 1){
            return true;
        }

        let temp = board[x][y];

        board[x][y] = '$';

        let down  = solve(x + 1, y, index + 1);
        let up    = solve(x - 1, y, index + 1);
        let right = solve(x, y + 1, index + 1);
        let left  = solve(x, y - 1, index + 1);

        board[x][y] = temp;
        return down || up || right || left;
    }
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(board[i][j] === word[0]){
                if(solve(i, j, 0)){
                    return true;
                }
            }
        }
    }
    return false;
};