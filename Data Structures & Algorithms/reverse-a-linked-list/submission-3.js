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
     * @return {ListNode}
     */
    reverseList(head) {
        // Optimised Code 
        // initalize a prev variable to flip witrh current pointer
        let prev = null;
        // current variable starts fro mhead node 
        let current = head;

        // iterate until current reach null
        while (current !== null) {
            // save the next node in temp to free the current 
            let temp = current.next; // this is next node of head
            // now flip the next node prev
            current.next = prev;
            // move both forward
            prev = current;
            current = temp;
        } 
        return prev;
    }
}
