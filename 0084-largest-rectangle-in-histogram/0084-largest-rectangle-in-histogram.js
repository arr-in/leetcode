/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let right = new Array(heights.length);  
    let left = new Array(heights.length);

    // left smaller element 
    for(let i = 0 ; i < heights.length ; i++){
        while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        if(stack.length === 0){
            left[i] = -1;
        }else{
            left[i] = stack[stack.length-1];
        }
        stack.push(i);
    }
    while(stack.length > 0){
        stack.pop();
    }
    // right smaller element
    for(let i = heights.length-1 ; i >= 0 ; i--){
        while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        if(stack.length === 0){
            right[i] = heights.length;
        }else{
            right[i] = stack[stack.length-1];
        }
        stack.push(i);
    }
    let maxarea = -Infinity;
    for(let i = 0 ; i < heights.length ; i++){
        let width = right[i] - left[i] - 1;
        let area = heights[i] * width;
        maxarea = Math.max(area, maxarea);
    }
    return maxarea;
};