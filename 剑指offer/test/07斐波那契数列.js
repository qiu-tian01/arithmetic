/*
    写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：

    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
    斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

    答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

     
    示例 1：

    输入：n = 2
    输出：1
    示例 2：

    输入：n = 5
    输出：5
     

    提示：
    0 <= n <= 100

*/

//方法一: 递归

var fib = function (n) {
    if (n < 2) return n
    return (fib(n - 1) + fib(n - 2)) % 1000000007
}

// 方法二: 循环

var fib = function (n) {
    if (n < 2) return n
    let i = 1,
        pre = 0,
        cur = 1,
        result = 0
    while (i++ < n) {
        result = (pre + cur) % 1000000007
        pre = cur
        cur = result
    }
    return result
}

// 动态规划
var fib = function(n) {
    const dp = [0, 1]
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % (1e9+7)
    }
    return dp[n]
};