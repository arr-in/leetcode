/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    let result = Infinity;
    function solve(index, children){
        if(index >= cookies.length){
            let unfairness = Math.max(...children);
            result = Math.min(unfairness, result);
            return;
        }
        for(let i = 0 ; i < k ; i++){
            children[i] += cookies[index];
            solve(index+1, children);
            children[i] -= cookies[index];
        }
    }
    let children = Array(k).fill(0);
    solve(0, children);
    return result;
};