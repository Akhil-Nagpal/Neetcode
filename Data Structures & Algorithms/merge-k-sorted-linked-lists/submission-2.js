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
        // Optimised Code 



    }
}

class Minheap {
    constructor() {
        this.arr = [];
    }

    // this method will take the ith value
    bubbleDown(i) {
        
        // iterate untill you swap or loop exists 
        while (true) {
            // initialize root (parent), left child, right child
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            // check if the left smaller then arr.length and left value is smaller then ith value both must be true, in that case ith value is not smallest 
            if (left < this.arr.length && this.arr[left] < this.arr[smallest]) smallest = left;
            // same for right 
            if (right < this.arr.length && this.arr[right] < this.arr[smallest]) smallest = right;

            // check if the ith values is the smallest then break the loop 
            if (smallest === i) break;

            // if all conditions are false then swap the smallest with ith value
            [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];
            // then update the parent(i) where ever the swap happened
            i = smallest;

        }

    }

    bubbleUp(i) {
        // iterate untill i goes at top means i becomes 0
        while (i > 0) {
            // get the parent 
            let parent = Math.floor((i - 1) / 2);

            // check if the parent is greater than current value, if yes then swap
            if (this.arr[parent] > this.arr[i]) {
                [this.arr[parent], this.arr[i]] = [this.arr[i], this.arr[parent]];
                // chnage i to prent 
                i = parent;
            } else {
                break;
            }
        }
    }

    push(val) {
        this.bubbleUp(this.arr.length - 1);
    }

    pop(val) {
        this.bubbleDown(this.arr.length - 1)
    }

}
