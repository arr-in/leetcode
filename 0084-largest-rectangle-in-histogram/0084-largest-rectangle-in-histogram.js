/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length;
    function pse(heights){
        let left = [];
        let stack = [];
        for(let i = 0 ; i < n ; i++){
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
        return left;
    }
    function nse(heights){
        let right = [];
        let stack = [];
        for(let i = n-1 ; i >= 0 ; i--){
            while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
                stack.pop()
            }
            if(stack.length === 0){
                right[i] = n;
            }else{
                right[i] = stack[stack.length-1];
            }
            stack.push(i);
        }
        return right;
    }
    let lse = pse(heights);
    let rse = nse(heights);
    let maxarea = -Infinity;
    for(let i = 0 ; i < n ; i++){
        let width = rse[i] - lse[i] - 1;
        let height = heights[i];
        let area = width * height;
        maxarea = Math.max(maxarea , area);
    }
    return maxarea;
};