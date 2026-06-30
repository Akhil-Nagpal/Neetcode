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
        // Brute Force 
        // use Hashset to detect the duplicate node, if it appears that mean the list has a cycle
        
        let seen = new Set();
        // pointer to traverse through the list, starts from head 
        let current = head;

        // iterate the pointer untill it hits null 
        while (current !== null) {
            // check if the current node is seen or not, if yes then its a cycle
            if (seen.has(current)) return true;
            // if not then add the current to set 
            seen.add(current);
            // then move pointer forward
            current = current.next;
        }
        return false;
    }
}
