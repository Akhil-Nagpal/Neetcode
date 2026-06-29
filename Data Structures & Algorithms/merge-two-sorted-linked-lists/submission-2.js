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
        // Optimised Code 
        let curr1 = list1;
        let curr2 = list2;

        let result = new ListNode();
        let build = result;

        while (curr1 !== null && curr2 !== null) {
            // check which pointer is samller 
            if (curr1.val <= curr2.val) {
                build.next = curr1;
                curr1 = curr1.next;
            } else {
                build.next = curr2
                curr2 = curr2.next;
            }
            build = build.next;
        }

        // check if the which list is empty then merged the other list after that
        // if curr1 is not null then remaing list1 node attach those to result
        if (curr1 !== null) build.next = curr1; 
        if (curr2 !== null) build.next = curr2; 

        return result.next;
    }
}
