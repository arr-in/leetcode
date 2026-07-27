/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length === k){
        return "0";
    }
    let stack = [];
    for(let i = 0 ; i < num.length ; i++){
        while(stack.length > 0 && k > 0 && stack[stack.length-1] > num[i]){
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while(k > 0){
        stack.pop();
        k--;
    }
    let result = stack.join("");
    let i = 0;
    while(i < result.length && result[i] === '0'){
        i++;
    }
    result = result.slice(i);
    return result === "" ? "0" : result;
};