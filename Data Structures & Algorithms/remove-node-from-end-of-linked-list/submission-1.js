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
        // Optimised Code 
        // step 1 - initialize fast and slow pointers 
        let slow = head;
        let fast = head;

        // step 2 - make fast move ahead till n from slow
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // Edge Case - if the fast reached the null that means after iterating till n that means list is exactly the n nodes or just head 
        if (fast === null) return head.next;
        
        // step 3 - now fast is n times ahead, and now iterate till fast till null
        while (fast.next !== null) {
            // move both pointers forward till slow reaches the node before the nth node
            slow = slow.next;
            fast = fast.next;
        } 
        // after slow reaches that node, connect the current node with next of nth node 
        slow.next = slow.next.next;

        return head;

    }
}
