/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:

    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]

 * 说明:

    必须在原数组上操作，不能拷贝额外的数组。
    尽量减少操作次数。
*/

var moveZeroes = function(nums) {
    let len = nums.length
    for(let i = 0;i<len;i++){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0)
            len--;//需要将长度减一，否则会死循环
            i--;//退一位继续比较
        }
    }
    return nums
};