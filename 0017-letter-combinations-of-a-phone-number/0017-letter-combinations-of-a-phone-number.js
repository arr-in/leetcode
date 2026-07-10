/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits.length === 0) return [];
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    let ans = [];
    function solve(index, current){
        if(index === digits.length){
            ans.push(current);
            return;
        }
        let ch = map[digits[index]];
        for(let i = 0; i < ch.length; i++){
            solve(index + 1, current + ch[i]);
        }
    }
    solve(0, "");
    return ans;
};