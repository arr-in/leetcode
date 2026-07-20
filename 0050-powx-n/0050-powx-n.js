/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 0) return 0.0;
    if (n === 0) return 1.0;
    if (x === 1) return 1.0;
    if (x === -1) return (n % 2 === 0) ? 1.0 : -1.0;
    let binForm = n;
    if (n < 0) {
        x = 1 / x;
        binForm = -binForm;
    }
    let ans = 1.0;
    while (binForm > 0) {
        if (binForm % 2 === 1) ans *= x;
        x *= x;
        binForm = Math.floor(binForm / 2);
    }
    return ans;
};