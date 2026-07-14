/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    function nextnum(n, sum){
        while(n>0){
            let digit = n%10;
            sum += digit*digit;
            n = Math.floor(n/10);
        }
        return sum;
    }
    while(n != 1){
        if(set.has(n)){
            return false;
        }
        set.add(n);
        n = nextnum(n, 0);
    }
    return true;
};