/**
 * 给定一个 n × n 的二维矩阵表示一个图像。

    将图像顺时针旋转 90 度。

    说明：

    你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

    示例 1:

    给定 matrix = 
    [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ],

    原地旋转输入矩阵，使其变为:
    [
    [7,4,1],
    [8,5,2],
    [9,6,3]
    ]
    示例 2:

    给定 matrix =
    [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
    ], 

    原地旋转输入矩阵，使其变为:
    [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
    ]
 * 
 * 
*/

//解法一
var rotate = function (matrix) {
    let newArr = [];
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        //在这里，j是遍历的，i是不变的，所以我用arr[j][i]可以取到矩阵每列的值
        let colArr = [];
        for (let j = 0; j < len; j++) {
            colArr.push(matrix[j][i]);
        }
        //然后反序
        colArr.reverse();
        //最后放到新数组中
        newArr[i] = colArr;
    }
    //将新矩阵中的每个值赋给旧矩阵
    for (let m = 0; m < len; m++) {
        for (let n = 0; n < len; n++) {
            matrix[m][n] = newArr[m][n]
        }
    }
    return matrix
};

//解法二
var rotate = function (matrix) {
    let newArr = [];
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        let colArr = [];
        for (let j = 0; j < len; j++) {
            colArr.push(matrix[j][i]);
        }
        colArr.reverse();
        newArr[i] = colArr;
    }
    console.log(newArr)
    return newArr;
};
