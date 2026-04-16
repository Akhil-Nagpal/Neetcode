class Solution {
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */

  nextLargerElement(arr) {
    // Code Here
    // Brute Force

    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let found = -1;

      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          found = arr[j];
          break;
        }
      }
      result.push(found);
    }
    return result;
  }
}
