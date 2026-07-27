/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let temp1 = head;
    let head2 = head.next;
    let temp2 = head.next;
    while(temp1 != null && temp1.next != null && temp2 != null && temp2.next != null){
        temp1.next = temp1.next.next;
        temp1 = temp1.next;
        temp2.next = temp2.next.next;
        temp2 = temp2.next;
    }
    temp1.next = head2;
    return head;
};