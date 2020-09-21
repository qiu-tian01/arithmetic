/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 解法一 ： 迭代
var reverseList = function (head) {
    [cur, pre] = [head, null]
    while (cur) {
        [cur.next, cur, pre] = [pre, cur.next, cur]
    }
    return pre
};


// 解法二：递归
var reverseList = function (head) {
    if (!head || !head.next) { // 这里是递归的结束条件，最终会到原链表的最后一个节点
        return head
    }
    let newList = reverseList(head.next)
    let cur = head.next
    cur.next = head // 这里就是 head 的下一个节点指向head ，就是5.next = 4
    //防止链表循环，需要将head.next设置为空
    head.next = null
    //每层递归函数都返回cur，也就是最后一个节点
    return newList;
};