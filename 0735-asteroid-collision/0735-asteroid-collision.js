/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let asteroid of asteroids){
        while(stack.length > 0 && stack[stack.length-1] > 0 && asteroid < 0){
            // collision will happen
            let sum = asteroid + stack[stack.length-1];
            if(sum < 0){
                stack.pop();
            }else if(sum > 0){
                asteroid = 0;
            }else{
                stack.pop();
                asteroid = 0;
            }
        }
        if(asteroid !== 0){
            stack.push(asteroid);
        }
    }
    return stack;
};