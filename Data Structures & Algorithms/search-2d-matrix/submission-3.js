class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // Optimised code using binary search 
        
        // get the length row and column of the matrix
        let rows = matrix.length;
        let cols = matrix[0].length;
        // initialize the two poniters 
        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
            // get the middle index of the matrix
            let mid = Math.floor((left + right) / 2);
            // after the index get the value of mid index cause it's a matrix and we can't do matrix[mid]
            let row = Math.floor(mid/cols); // this gives the row of mid index
            let col = mid % cols // this gives the column of mid index

            // check if the mid is same as target 
            if (target === matrix[row][col]) return true;

            // check if the target is smaller then mid
            if (target < matrix[row][col]) {
                right = mid - 1;
            }

            // check if the target is bigger then mid
            if (target > matrix[row][col]) {
                left = mid + 1;
            }
        }
        return false;

    }
}
