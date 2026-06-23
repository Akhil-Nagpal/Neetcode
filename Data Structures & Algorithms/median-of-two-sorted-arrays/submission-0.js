class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Brute Force

        // merge both arrays 
        let merged = nums1.concat(nums2);
        
        // sort the arrays in ascending order
        let sortedArr = merged.sort((a, b) => a - b);

        // get the middle element
        let mid = Math.floor(sortedArr.length / 2);

        // check if the mid is the median, if the array length is odd then middle is the median 
        if (sortedArr.length % 2 === 1) {
            return sortedArr[mid];
        } else {
            // if the array is even then return the average of 2 elements from mid 
            return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
        }

        
    }
}
