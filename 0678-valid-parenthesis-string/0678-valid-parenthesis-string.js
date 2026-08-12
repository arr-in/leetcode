/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftmin = 0;
    let leftmax = 0;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === "("){
            leftmin++;
            leftmax++;
        }else if(s[i] === ")"){
            leftmax--;
            leftmin--;
        }else{
            leftmax++;
            leftmin--;
        }
        if(leftmax < 0){
            return false;
        }
        if(leftmin < 0){
            leftmin = 0;
        }
    }
    return leftmin === 0;
};