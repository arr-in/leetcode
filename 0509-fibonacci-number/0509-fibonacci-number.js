/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = Array(n+1).fill(-1); 
    function fib(n){
        if(n == 0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        if(dp[n] != -1){
            return dp[n];
        }

        dp[n] = fib(n-1) + fib(n-2);
        return dp[n];

    }
    return fib(n);
};