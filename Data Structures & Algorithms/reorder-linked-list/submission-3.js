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
     * @return {void}
     */
    reorderList(head) {
        // Revision Brute Force 
        // first convert hte linked into array 
        let curr = head;
        let values = [];

        while (curr !== null) {
            values.push(curr.val);
            curr = curr.next;
        }

        // Reorder the list using 2 pointers 
        let left = 0
        let right = values.length - 1;

        let result = [];
        let toggler = true;

        while (left <= right) {
            if (toggler) {
                result.push(values[left]);
                left++;
            } else {
                result.push(values[right]);
                right--;
            }
            toggler = !toggler
        }

        // add the values of reult array into linked list values 
        let build = head;

        for (let val of result) {
            build.val = val;
            build = build.next;
        }
    }
}
