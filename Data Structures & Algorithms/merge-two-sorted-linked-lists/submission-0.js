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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Brute Force 
        // make both lists into arrays 
        // list1 
        let val1 = [];
        let curr1 = list1;

        while (curr1 !== null) {
            // push values to array 
            val1.push(curr1.val);
            // move forward 
            curr1 = curr1.next;
        }

        // list2
        let val2 = [];
        let curr2 = list2;

        while (curr2 !== null) {
            // push values to array 
            val2.push(curr2.val);
            // move forward
            curr2 = curr2.next;
        }

        // merge the arrays 
        let merged = val1.concat(val2);
        // sort the merghed array 
        let sorted = merged.sort((a, b) => a - b);

        // convert the sorted array into new linked list 
        let merLinkedList = new ListNode();
        let build = merLinkedList;

        for (let val of sorted) {
            // store the current value to new next node 
            build.next = new ListNode(val);
            // move the pointer forward 
            build = build.next;
        }
        // return the merged Linked List
        return merLinkedList.next;
    }
}
