/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
    示例:

    现有矩阵 matrix 如下：

    [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。

    给定 target = 20，返回 false。

 */

//  方法一: 暴力法
/*
    执行用时：80 ms 在所有 JavaScript 提交中击败了83.17%的用户
    内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了72.29%的用户
*/
var findNumberIn2DArray = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true
            }
        }
    }
    return false
};

//方法二,比较预期值与右上角数字的大小，从而确认行列数
//判断边界值
var findNumberIn2DArray = function (matrix, target) {

    //判断边界值
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false
    }
    // 定义行列数
    let m = matrix.length,
        n = matrix[0].length
    // 找到右上角的数
    let i = 0,
        j = n - 1;
    while (i < m && j >= 0) {
        //如果target比右上角值小，则列下标减一
        if (target < matrix[i][j]) j--;
        //如果target比右上角值大，则行下标加一
        else if (target > matrix[i][j]) i++;
        else return true;
    }
    return false
};