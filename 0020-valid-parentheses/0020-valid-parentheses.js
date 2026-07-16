/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i]);
        }else{
            if(stack.length === 0){
                return false;
            }
            let top = stack.length-1;
            if( (s[i] === ')' && stack[top] !== '(' ) || 
            (s[i] === ']' && stack[top] !== '[' ) || (s[i] === '}' && stack[top] !== '{' )){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};