/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let asteroid of asteroids){
        while(stack.length > 0 && stack[stack.length-1] > 0 && asteroid < 0){
            let sum = stack[stack.length-1] + asteroid;
            if(sum > 0){
                asteroid = 0;
            }else if(sum == 0){
                asteroid = 0;
                stack.pop();
            }else{
                stack.pop();
            }   
        }
        if(asteroid !== 0){
            stack.push(asteroid);
        }
    }
    return stack;
};