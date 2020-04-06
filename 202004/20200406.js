/*
    给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    说明：

    你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
    示例 1:
    输入: [2,2,1]
    输出: 1
    示例 2:
    输入: [4,1,2,1,2]
    输出: 4
*/

//解法一
var singleNumber = function(nums) {
    let arr = nums.sort()
    if(arr.length === 1){
        return arr[0]
    }
    for(let i = 1;i<arr.length;i++){
        if(i === arr.length && arr[i] != arr[i-1]){
            return arr[i]
        }else if((i === 1)&&(arr[i-1] !== arr[i])){
            return arr[i-1]
                 
        }else if((arr[i-1] !== arr[i])&&(arr[i] !== arr[i+1])){
            return arr[i]
        }
    }
    return false
};

//解法二  
/**
 * 思路：异或运算
 * 参与运算的两个值，如果两个相应位相同，则结果为0，否则为1。
 * 
 */


var singleNumber = function(nums) {
    let num = 0;
    for(let i = 0;i<nums.length;i++){
        num = num ^ nums[i]
    }
    return num
};