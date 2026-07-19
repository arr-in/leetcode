/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = "";
    for (let i = 0; i < strs[0].length; i++) {
        let current = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== current) {
                return common;
            }
        }
        common += current;
    }
    return common;
};