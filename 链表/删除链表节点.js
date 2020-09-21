/*
    给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

    返回删除后的链表的头节点。

    注意：此题对比原题有改动

    示例 1:

    输入: head = [4,5,1,9], val = 5
    输出: [4,1,9]
    解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
    示例 2:

    输入: head = [4,5,1,9], val = 1
    输出: [4,5,9]
    解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 方法一 : 递归
var deleteNode = function (head, val) {
    if (head.val === val) {
        return head.next
    }
    head.next = deleteNode(head.next, val)
    return head
};

// 方法二 : 双指针
var deleteNode = function (head, val) {
    let preNode = head
    let curNode = head
    if (head.val === val) {
        head = head.next
    }
    while (curNode) {
        if (curNode.val === val) {
            preNode.next = curNode.next
        }
        preNode = curNode
        curNode = curNode.next
    }
    return head
};
// 方法三： 单指针
var deleteNode = function (head, val) {
    let curr = head
    // 如果头节点就是要删除的，直接删除
    if (head.val === val) {
        return head.next
    }
    // 找出当前节点的下一个节点为val
    while (curr.next && curr.next.val !== val) {
        curr = curr.next
    }
    curr.next = curr.next.next
    return head

};