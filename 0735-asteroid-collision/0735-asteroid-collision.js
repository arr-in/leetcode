/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let asteroid of asteroids){
        while(stack.length > 0 && asteroid < 0 && stack[stack.length-1] > 0){
            let sum = stack[stack.length-1] + asteroid;
            if(sum < 0){
                stack.pop();
            }else if(sum === 0){
                stack.pop()
                asteroid = 0;
            }else{
                asteroid = 0;
            }
        }
        if(asteroid !== 0){
            stack.push(asteroid);
        }
    }
    return stack;
};