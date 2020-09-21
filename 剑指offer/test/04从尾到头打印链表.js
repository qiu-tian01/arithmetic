// 链表
//输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
/**
 * 示例 1：

    输入：head = [1,3,2]
    输出：[2,3,1]
 
 * /

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    //方法一:使用unshift方法
    let arr = []
    while (head) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
    //方法二:使用reverse()方法
    if (head === null) return []
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
    //方法三: 递归
    if (!head) return []
    let p = head;
    var arr = reversePrint(head.next);
    arr.push(p.val)
    return arr;
};