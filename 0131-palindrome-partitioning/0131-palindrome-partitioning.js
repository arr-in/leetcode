/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function palindromecheck(n){
        let i = 0;
        let j = n.length-1;
        while(i < j){
            if(n[i] != n[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    let ans = [];
    function solve(index, current){
        if(index === s.length){
            ans.push([...current]);
            return;
        }
        for(let i = index ; i < s.length ; i++){
            let string = s.substring(index, i+1);
            if(palindromecheck(string)){
                current.push(string);
                solve(i+1, current);
                current.pop();
            }
        }
    }
    solve(0, []);
    return ans;
};