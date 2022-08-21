// 题目链接： https://leetcode.cn/problems/add-two-numbers/

// 直接暴力解法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  if(l1.val === undefined) return l2;
  if(l2.val === undefined) return l1;
  let l3 = new ListNode((l1.val+l2.val)%10);
  let result = l3;
  let flag = l1.val+l2.val>9 ? true : false;
  while(l1.next&&l2.next){
      if(flag) {
          l3.next=new ListNode((l1.next.val+l2.next.val+1)%10)
          flag = l1.next.val+l2.next.val+1>9 ? true : false;
      }
      else {
          l3.next=new ListNode((l1.next.val+l2.next.val)%10)
          flag = l1.next.val+l2.next.val>9 ? true : false;
      }
      l1 = l1.next;
      l2 = l2.next;
      l3 = l3.next;
  }
  while(l1.next&&!l2.next) {
      if(flag){
          l3.next=new ListNode((l1.next.val+1)%10);
          flag = l1.next.val+1>9 ? true : false;
      }
      else{
          l3.next = l1.next;
          break;
      }
      l1 = l1.next;
      l3 = l3.next;
  }
  while(l2.next&&!l1.next) {
      if(flag){
          l3.next=new ListNode((l2.next.val+1)%10);
          flag = l2.next.val+1>9 ? true : false;
      }
      else{
          l3.next = l2.next;
          break;
      }
      l2 = l2.next;
      l3 = l3.next;
  }
  while(!l2.next&&!l1.next) {
      if(flag) {
          l3.next = new ListNode(1);
      }
      break;
  }
  return result
};
// l1.next===null代表当前为最后一个节点
// 最后一次的判断是看是否会有进位

// 官方解法会更加简洁
// 将超出的长度当作节点的值为0
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
      const n1 = l1 ? l1.val : 0;
      const n2 = l2 ? l2.val : 0;
      const sum = n1 + n2 + carry;
      if (!head) {
          head = tail = new ListNode(sum % 10);
      } else {
          tail.next = new ListNode(sum % 10);
          tail = tail.next;
      }
      carry = Math.floor(sum / 10);
      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }
  if (carry > 0) {
      tail.next = new ListNode(carry);
  }
  return head;
};