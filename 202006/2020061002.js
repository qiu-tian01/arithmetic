/*
对称二叉树

给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */
//递归实现
var isSymmetric = function(root) {
    return isMirror (root,root)
};

const isMirror = (t1,t2) =>{
    if(t1 === null && t2 === null) return true
    if(t1 === null || t2 === null || t1.val !== t2.val) return false
    return isMirror(t1.left,t2.right) && isMirror(t1.right,t2.left)
}

//迭代
var isSymmetric = function(root) {
    if(!root) return true
    let queue = [root.left,root.right]
    while(queue.length > 0){
        let t1 = queue.shift(), t2 = queue.shift()
        if (t1 === null && t2 === null) continue
        if (t1 === null || t2 === null || t1.val != t2.val) return false
        queue.push(t1.left, t2.right, t1.right, t2.left)
    }
    return true
};