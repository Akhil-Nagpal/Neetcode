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
        // Revision 
        // first we convert the linked list into array 

        let values = [];

        for (let i = 0; i < lists.length; i++) {
            // get the current sub list  
            let node = lists[i];

            // then iterate until every sub list till null 
            while (node !== null) {
                // push the node to the array 
                values.push(node.val);
                // move the pointer forward 
                node = node.next;
            }
            
        }
        
        // after that sort the array in ascending order
        let sorted = values.sort((a, b) => a - b);

        // now conver the array into linked list
        let newList = new ListNode();
        let curr = newList;

        for (let value of sorted) {
            // assign the value of cuurent element to newNode 
            curr.next = new ListNode(value);

            // move the pointer forward
            curr = curr.next;
        }

        return newList.next;
    }
}
