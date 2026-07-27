/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp1 = headA;
    let temp2 = headB;
    while(temp1 != temp2){
        if(temp1 === null){
            temp1 = headB;
        }else{
            temp1 = temp1.next;
        }
        if(temp2 === null){
            temp2 = headA;
        }else{
            temp2 = temp2.next;
        }
    }
    return temp1;
};