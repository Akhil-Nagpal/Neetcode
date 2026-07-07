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
        // Revising Optimal Code 
        // no need to convert linked list into array 
        // find the middle of the linked list 
        // then break that list into 2 parts 
        // reverse the second list 
        // then reorder while merging them 
        
        // to find the middle we use fast and slow pointers
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // now slow will be in middle so we cut the list from middle 
        let secHead = slow.next; // this will be the head oif second list
        slow.next = null;

        // Reverse the second list 
        let prev = null;
        let curr = secHead;

        while (curr !== null) {
            // save the next node 
            let temp = curr.next;

            // flip the curre node with next node 
            curr.next = prev;

            prev = curr; 
            curr = temp;
            
        }

        // merge both lists using two pointers while alternating 
        let first = head;
        let sec = prev;

        while (first !== null && sec !== null) {
            // save the next node of first list 
            let firstNext = first.next;
            // save the next node of second list
            let secNext = sec.next;
            // now set the next node of head of first list to the head of second list 
            first.next = sec;
            // now set the next node of first list as head of second list 
            sec.next = firstNext;

            // Now move both pointers to the next node
            first = firstNext;
            sec = secNext;
        }
        
    }
}
