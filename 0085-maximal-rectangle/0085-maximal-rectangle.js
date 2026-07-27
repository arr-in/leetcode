/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {

    if (matrix.length === 0) return 0;

    let rows = matrix.length;
    let cols = matrix[0].length;

    let heights = new Array(cols).fill(0);

    let maxArea = 0;

    for (let i = 0; i < rows; i++) {

        // Build histogram
        for (let j = 0; j < cols; j++) {

            if (matrix[i][j] === "1") {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

function largestRectangleArea(heights) {

    let n = heights.length;

    let left = new Array(n);
    let right = new Array(n);

    let stack = [];

    // Previous Smaller
    for (let i = 0; i < n; i++) {

        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

        stack.push(i);
    }

    stack = [];

    // Next Smaller
    for (let i = n - 1; i >= 0; i--) {

        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let width = right[i] - left[i] - 1;
        let area = width * heights[i];
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}