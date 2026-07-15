/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let words = strs.length;
    let letters = strs[0].length;
    let ans = '';
    for(let j = 0 ; j < letters ; j++){
        let letter = strs[0][j];
        for(let i = 1 ; i < words ; i++){
            if(j > strs[i].length || letter != strs[i][j]){
                return ans;
            }
        }
        ans += letter;
    }
    return ans;
};