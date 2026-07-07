/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Brute Force 
        // step 1 - Iterate till the end of the list 
        let curr = head;
        // count the length
        let length = 0;

        while (curr !== null) {
            curr = curr.next;
            length++;
        }

        // check if the n is on head already then remove the head 
        if (n === length) return head.next; // return head.next will return null

        let curr2 = head;
        // now iterate till the node before the nth node
        for (let i = 0; i < length - n - 1; i++) {
            curr2 = curr2.next;
        } 
        curr2.next = curr2.next.next;

        return head;
    }
}
