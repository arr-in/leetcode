/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ans = [];
    candidates.sort((a,b)=>a-b);
    function solve(index, current, target){
        if(target === 0){
            ans.push([...current]);
            return;
        }
        if(index === candidates.length || candidates[index] > target){
            return;
        }
        current.push(candidates[index]);
        solve(index+1, current, target - candidates[index]);
        current.pop();
        while(index + 1 < candidates.length && candidates[index] === candidates[index + 1]){
            index++;
        }
        solve(index+1, current, target);
    }
    solve(0, [], target);
    return ans;
};