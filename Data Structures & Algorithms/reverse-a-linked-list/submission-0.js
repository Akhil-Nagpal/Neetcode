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
        // Brute Force 

        // first convert the linked list into an array 
        // take a variable to traverse through linked list
        // In linked List everything starts from first node that is head 
        let current = head;
        // we store the values of every node in an array 
        let values = [];
        
        // iterate untill the current node pointes towards null
        while (current !== null) {
            // now push the value of current to values array
            values.push(current.val);
            // after pushing the value move current to next node using next pointer
            current = current.next
        }

        // now we have the values array, now reverse this array 
        values.reverse();

        // now Make that reveresed array into linked list again 
        // In order to make the array into linked list 
        // we make a new linked list 
        let revLinkedList = new ListNode();
        let build = revLinkedList;

        // get every value from values array 
        for (let val of values) {
            // create the next new node from previous node (head) and add the current value to it 
            build.next = new ListNode(val);
            // then move the current to next node 
            build = build.next;
        }
        // return the Linkedlist but except 0th node
        return revLinkedList.next;
    }
}
