/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    function getnextnumber(n){
        let number = 0;
        while(n>0){
            let digit = n%10;
            number = number + digit * digit;
            n = Math.floor(n/10);
        }
        return number;
    }
    while(!set.has(n)){
        set.add(n);
        n = getnextnumber(n);
        if(n === 1){
            return true;
        }
    }
    return false;

};