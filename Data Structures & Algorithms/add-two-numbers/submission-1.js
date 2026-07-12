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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // Brute Force as well as optimised 

        // initialize the pointer to start on both lists 
        let curr1 = l1;
        let curr2 = l2;

        // initializea variable for carrying the extra integer if the sum is greater or qual than 10
        let carry = 0;

        // store the result in new list 
        let result = new ListNode();
        let build = result;

        // iterate untill all both list reach null and carry number is not equal to 0
        while (curr1 !== null || curr2 !== null || carry !== 0) {
            // add both lists first node values
            let sum = (curr1 ? curr1.val : 0) + (curr2 ? curr2.val : 0) + carry;

            // now check if the sum is greater then or equal to 10, if yes then carry the first number
            carry = Math.floor(sum / 10);

            // after getting the carry number take remaining number and store it to current node 
            let digit = sum % 10;

            // store the digit to new list 
            build.next = new ListNode(digit);
            // move build forward 
            build = build.next;

            // move both pointers forward only if the next node is not null
            curr1 = curr1 ? curr1.next : null;
            curr2 = curr2 ? curr2.next : null;

        }
        return result.next;
    }
}
