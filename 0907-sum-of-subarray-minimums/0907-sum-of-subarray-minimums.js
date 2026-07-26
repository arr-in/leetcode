/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const MOD = 1000000007;
    function nse(arr) {
        let stack = [];
        let ans = new Array(arr.length);
        for (let i = arr.length - 1; i >= 0; i--) {
            while (
                stack.length > 0 &&
                arr[stack[stack.length - 1]] >= arr[i]
            ) {
                stack.pop();
            }
            if (stack.length === 0) {
                ans[i] = arr.length;
            } else {
                ans[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        return ans;
    }

    function pse(arr) {
        let stack = [];
        let ans = new Array(arr.length);

        for (let i = 0; i < arr.length; i++) {
            while (
                stack.length > 0 &&
                arr[stack[stack.length - 1]] > arr[i]
            ) {
                stack.pop();
            }
            if (stack.length === 0) {
                ans[i] = -1;
            } else {
                ans[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        return ans;
    }

    let next = nse(arr);
    let prev = pse(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let left = i - prev[i];
        let right = next[i] - i;
        sum = (sum + (arr[i] * left * right)) % MOD;
    }

    return sum;
};