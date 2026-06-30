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
        // Brute Force

        // First convert the list into array 
        let curr = head;
        let values = [];

        while (curr !== null) {
            // push the current value to the array
            values.push(curr.val);
            // move the pointer
            curr = curr.next;
        }
        
        // Reorder the elements of array
        // In order to alternate we need to opposite pointers

        let left = 0;
        let right = values.length - 1;

        let result = [];
        let toggle = true; // this helps to determine how to alternate

        while (left <= right) {
            // check if the toggle is true then take the element from left and push to array
            if (toggle) {
                result.push(values[left]);
                // move pointer forward
                left++;
            } else {
                result.push(values[right]);
                right--;
            }
            // toggle the toggler if the if statment fails
            toggle = !toggle;
        }

        // convert the array into linked list but here use the original linked list and replace the values of node with new one 
        let build = head;

        // iterate through every value of result
        for (let val of result) {
            // replace the value of current node to new val
            build.val = val;
            // move pointer forward
            build = build.next;
        }
    }
}
