/*
     二叉树的层序遍历
        给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

        示例：
        二叉树：[3,9,20,null,null,15,7],

            3
        / \
        9  20
            /  \
        15   7
        返回其层次遍历结果：

        [
        [3],
        [9,20],
        [15,7]
        ]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const ret = [] //存放结果
    const queue = [root] //队列
    while (queue.length > 0) {
        let currentLevel = [] //层次等级数组
        let len = queue.length
        while (len) {
            let node = queue.shift()
            currentLevel.push(node.val)//存放值
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            len--
        }
        ret.push(currentLevel)

    }
    return ret

};