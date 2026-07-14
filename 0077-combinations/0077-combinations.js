/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    function solve(index, current){
        if(current.length === k){
            ans.push([...current]);
            return;
        }
        for(let i = index ; i <= n ; i++){
            current.push(i);
            solve(i+1, current);
            current.pop();
        }
    }
    solve(1, []);
    return ans;
};