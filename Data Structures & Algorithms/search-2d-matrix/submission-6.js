class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // Found a way to de-optimisation by flattening the array
        let flat = matrix.flat();

        for (let i = 0; i < flat.length; i++) {
            if (target === flat[i]) return true;
        }        
        return false;
    }
}
