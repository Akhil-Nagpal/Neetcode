class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Revisison Brute Force
        let merged = nums1.concat(nums2);

        let sorted = merged.sort((a, b) => a - b);

        let mid = Math.floor(sorted.length / 2);

        if (sorted.length % 2 === 1) {
            return sorted[mid]
        } else {
            return (sorted[mid - 1] + sorted[mid]) / 2;
        }
    }
}
