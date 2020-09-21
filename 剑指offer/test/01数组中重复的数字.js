/**
找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
示例 1：
    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3 
限制：
    2 <= n <= 100000
 */

// 方法一 ： 先对数组进行排序，比较排序后数组元素前后值是否相同
var findRepeatNumber = function (nums) {
    if (nums.length === 0 || !Array.isArray(nums)) {
        return
    }
    if (nums.length === 1) {
        return nums[0]
    }
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], nums[i + 1])
        if (nums[i] === nums[i + 1]) {
            console.log(i)
            return nums[i]
        }
    }
};

// 方法二 ： hash表方法，表结构为nums - boolean,如果没有查到nums则存入，找到后返回nums
var findRepeatNumber = function (nums) {
    if (nums.length === 0 || !Array.isArray(nums)) {
        return
    }
    if (nums.length === 1) {
        return nums[0]
    }

    let map = {}
    for (let i of nums) {
        if (!map[i]) {
            map[i] = true
        } else {
            return i
        }
    }

};


// 方法三 ： 原地哈希  （推荐）
// 每次遍历时，检查当前元素是否放在了正确位置上（例如元素 i 应该放在下标为 i 的位置上）。如果放在了正确位置上，那么继续循环。否则：
// - 下标为 num 的元素 === num，说明当前元素 num 是重复的，直接返回
// - 下标为 num 的元素 !== num，交换当前元素和下标为 num 的元素，将当前元素放入到正确位置上

var findRepeatNumber = function(nums) {
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        if (num === i) {
            continue;
        }
        if (num === nums[num]) {
            return num;
        } else {
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
};

