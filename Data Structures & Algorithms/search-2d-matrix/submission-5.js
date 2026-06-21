class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // optimisation using flatten the array 
        let flat = matrix.flat();

        for (let i = 0; i < flat.length; i++) {
            if (target === flat[i]) return true;
        }        
        return false;
    }
}
