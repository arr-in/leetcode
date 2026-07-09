/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    function solve(current, index, target){
        if(target === 0){
            ans.push([...current]);
            return;
        }
        if(target < 0 || index === candidates.length){
            return;
        }
        current.push(candidates[index]);
        solve(current, index, target - candidates[index]); //take

        current.pop();
        solve(current, index+1, target);
    }
    solve([], 0, target);
    return ans;
};