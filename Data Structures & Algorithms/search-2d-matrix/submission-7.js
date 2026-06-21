class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // Optimisation using binary search 
        let rows = matrix.length;
        let cols = matrix[0].length;
        let left = 0; 
        let right = rows * cols - 1;

        while (left <= right) {
            // calculate the mid 
            let mid = Math.floor((left + right) / 2);

            // get the value of the mid
            let row = Math.floor(mid / cols);
            let col = mid % cols;

            // check if the target is the mid 
            if (target === matrix[row][col]) return true;

            // if target is bigger then mid then move left to mid
            if (target > matrix[row][col]) {
                left = mid + 1;
            }

            // if target is leser then move right to mid
            if (target < matrix[row][col]) {
                right = mid - 1;
            }
        }
        return false;
    }
}
