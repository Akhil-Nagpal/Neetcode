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
     * @return {void}
     */
    reorderList(head) {
        // Optimised Code 
        // First find the middle of list and break it into 2 parts
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            // move the pointers forward
            slow = slow.next;
            fast = fast.next.next;
        }

        // now when fast pointer reaches the null the slow will be itting in the middle 
        // cut the list from the middle
        let second = slow.next;
        slow.next = null;

        // Reverse the second list 
        let prev = null;
        let curr = second;

        while (curr !== null) {
            // save the next node temporarily 
            let temp = curr.next;

            // now flip the current with prev
            curr.next = prev;

            // move prev forward 
            prev = curr;
            curr = temp;
        }
        
        // Merge the both list alternatively
        // initialize two pointers 
        let first = head;
        let sec = prev;

        while (first !== null && sec !== null) {
            // save the first element to the list 
            let firstNext = first.next;
            let secNext = sec.next;

            first.next = sec;
            sec.next = firstNext; 

            first = firstNext;
            sec = secNext;
        }
    }
}
