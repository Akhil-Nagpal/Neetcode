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
         // STEP 1: Find middle using fast/slow pointers
        // slow moves 1 step, fast moves 2 steps
        // when fast hits null, slow is at the middle
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // STEP 2: Cut list at middle and save second half head
        // slow.next is the start of second half
        // setting slow.next = null detaches the two halves
        let secHead = slow.next;
        slow.next = null;

        // STEP 3: Reverse second half in-place
        // prev starts null because the new tail points to null
        // after loop, prev = new head of reversed second half
        let prev = null;
        let curr = secHead;

        while (curr !== null) {
            let temp = curr.next;   // save next before destroying reference
            curr.next = prev;       // flip pointer backward
            prev = curr;            // advance prev
            curr = temp;            // advance curr using saved reference
        }

        // STEP 4: Merge both halves alternating
        // first = head of first half (1->2->3)
        // sec = prev = head of reversed second half (5->4)
        // each iteration: wire first->sec->firstNext, then advance both
        let first = head;
        let sec = prev;

        while (first !== null && sec !== null) {
            let firstNext = first.next; // save before overwriting first.next
            let secNext = sec.next;     // save before overwriting sec.next
            first.next = sec;           // 1->5
            sec.next = firstNext;       // 5->2 (completing 1->5->2)
            first = firstNext;          // advance to node 2
            sec = secNext;              // advance to node 4
        }
        
    }
}
