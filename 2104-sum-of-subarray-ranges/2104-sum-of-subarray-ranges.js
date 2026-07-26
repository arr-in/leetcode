/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    function sumOfMin() {
        function nse(nums) {
            let next = new Array(nums.length);
            let stack = [];
            for (let i = nums.length - 1; i >= 0; i--) {
                while (
                    stack.length > 0 &&
                    nums[stack[stack.length - 1]] >= nums[i]
                ) {
                    stack.pop();
                }
                next[i] = stack.length === 0 ? nums.length : stack[stack.length - 1];
                stack.push(i);
            }
            return next;
        }
        function pse(nums) {
            let prev = new Array(nums.length);
            let stack = [];
            for (let i = 0; i < nums.length; i++) {
                while (
                    stack.length > 0 &&
                    nums[stack[stack.length - 1]] > nums[i]
                ) {
                    stack.pop();
                }
                prev[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
                stack.push(i);
            }
            return prev;
        }

        let next = nse(nums);
        let prev = pse(nums);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            let left = i - prev[i];
            let right = next[i] - i;
            sum += left * right * nums[i];
        }
        return sum;
    }
    function sumOfMax() {
        function nge(nums) {
            let next = new Array(nums.length);
            let stack = [];
            for (let i = nums.length - 1; i >= 0; i--) {
                while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
                    stack.pop();
                }
                next[i] = stack.length === 0 ? nums.length : stack[stack.length - 1];
                stack.push(i);
            }
            return next;
        }

        function pge(nums) {
            let prev = new Array(nums.length);
            let stack = [];

            for (let i = 0; i < nums.length; i++) {

                while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
                    stack.pop();
                }
                prev[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
                stack.push(i);
            }
            return prev;
        }
        let next = nge(nums);
        let prev = pge(nums);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            let left = i - prev[i];
            let right = next[i] - i;
            sum += left * right * nums[i];
        }
        return sum;
    }
    return sumOfMax() - sumOfMin();
};