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
        // Brute forece but using less space - build only 1 array 

        let values = [];
        let curr1 = list1;
        let curr2 = list2;

        while (curr1 !== null) {
            // push values to array
            values.push(curr1.val);
            // move the pointer forward 
            curr1 = curr1.next;
        }

        while (curr2 !== null) {
            values.push(curr2.val);
            curr2 = curr2.next;
        }

        // sort the array in ascending order
        values.sort((a,b) => a - b);

        // convert the array into new linked list
        let merLinkedList = new ListNode();
        let build = merLinkedList;

        for (let val of values) {
            // store the current value in new node 
            build.next = new ListNode(val);
            // move pointer forward 
            build = build.next;
        }
        // return the merged Linked List
        return merLinkedList.next;
    }
}
