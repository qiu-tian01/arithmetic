/*
  回文链表
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let nums = [];
      while (head){
        nums.push(head.val);
        head = head.next;
      }

      while(nums.length > 1){
        if(nums.pop() != nums.shift()) return false;
      }
      return true;
};

//还有一种快慢指针的解法