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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Brute force 
        // first we convert the linked list into array
        let values = [];
        
        // iterate through all the lists 
        for (let i = 0; i < lists.length; i++) {
            // get the current node 
            let node = lists[i];
            // iterate through current list
            while (node !== null) {
                // push the node value to the array
                values.push(node.val);
                // move th pointer forward
                node = node.next;
            }
        }

        // now sort the array 
        let sortedValues = values.sort((a, b) => a - b);
        
        // convert the array into linked list
        let newList = new ListNode();
        let curr = newList;

        for (let val of sortedValues) {
            // set the value to next node 
            curr.next = new ListNode(val);
            // move the pointer forward
            curr = curr.next;
        }

        // return the list
        return newList.next;
    }
}
