class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // Optimised but flattening the array and binary search
        let flatArr = matrix.flat();

        // Now apply the binary search
        let left = 0;
        let right = flatArr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (target === flatArr[mid]) return true;

            if (target < flatArr[mid]) {
                right = mid - 1;
            }

            if (target > flatArr[mid]) {
                left = mid + 1;
            }
        }
        return false;
        
    }
}
