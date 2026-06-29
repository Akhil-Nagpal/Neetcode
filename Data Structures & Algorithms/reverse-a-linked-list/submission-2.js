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
        // Revision Brute Force
        // first covert the linked list into array 

        let current = head;
        let values = [];

        while (current !== null) {
            // first push the current value to the array
            values.push(current.val);
            // move current to next node 
            current = current.next;
        }

        // Reverse the array
        values.reverse();

        // now convert back this reversed array into a linked list 
        // So we amek a new linked list 
        let revLinkedList = new ListNode();
        // initialize the pointer for traversal 
        let curr = revLinkedList;

        // iterate through values of array 
        for (let val of values) {
            // set the current val into next new Node
            curr.next = new ListNode(val);
            // move the curr pointer to next node 
            curr = curr.next;
        }
        // return the reversed linked list without 0th node 
        return revLinkedList.next;
    }
}
