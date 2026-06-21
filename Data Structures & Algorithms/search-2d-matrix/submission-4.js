class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // Revision Brute Force
        for (let i = 0; i < matrix.length; i++) {
            
            for (let j = 0; j < matrix[i].length; j++) {
                if (target === matrix[i][j]) return true;
            }
        }
        return false;
    }
}
