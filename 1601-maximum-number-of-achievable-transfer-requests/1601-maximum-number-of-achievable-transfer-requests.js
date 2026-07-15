/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    let buildings = Array(n).fill(0);
    let ans = 0;
    function netsumbuilding(buildings){
        for(let i = 0 ; i < buildings.length ; i++){
            if(buildings[i] != 0){
                return false;
            }
        }
        return true;
    }

    function solve(buildings, index, count){
        if(index == requests.length){
            if(netsumbuilding(buildings) === true){
                ans = Math.max(count, ans);
                return;
            }
            return;
        }
        let from = requests[index][0];
        let to = requests[index][1];
        buildings[from]--;
        buildings[to]++;
        solve(buildings, index+1, count+1);

        buildings[from]++;
        buildings[to]--;
        solve(buildings, index+1, count);
    }
    solve(buildings, 0, 0);
    return ans;
};