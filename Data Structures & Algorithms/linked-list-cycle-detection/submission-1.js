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
     * @return {boolean}
     */
    hasCycle(head) {
        // Optimised Code using Fast and slow pointer 
        // 1 pointer will move 1 step at a time and 2nd pointer will move 2 steps at a time
        let slow = head;
        let fast = head;

        // iterate until fast hit the null cause that one move faster 
        while (fast !== null && fast.next !== null) {
            // move both pointer first cause head is the same for both 
            slow = slow.next;
            fast = fast.next.next;
            // check if the slow and fast meet if yes then its a cycle
            if (fast === slow) return true;
        }
        // if not then its not a cycle
        return false;
    }
}
