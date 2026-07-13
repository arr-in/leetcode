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
            result = Math.min(result, unfairness);
            return;
        }
        for(let i = 0 ; i < k ; i++){
            let cookie = cookies[index];
            children[i] = children[i] + cookie;
            solve(index+1, children);
            children[i] = children[i] - cookie;
        }
    }
    let children = Array(k).fill(0);
    solve(0, children);
    return result;
};