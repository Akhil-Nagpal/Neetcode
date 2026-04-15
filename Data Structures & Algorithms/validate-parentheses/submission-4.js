class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // Optimised Code 
        // Intuition - 
        // create a stack 
        // store the closing parantheses and it's coressponding opening poarantheses in a map for fast lookup
        // itrate through every element 
        // check if the opening paranthese exists or not if yes then pop the closing ones
        // check if the stack is empty return otherwise return false

        let stack = [];
        let map = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        for (let char of s) {
            // check if the char is equals to opening parantheses 
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                // check if the stack empty or not, if empty return false
                if (stack.length === 0) return false;

                // pop the top element fro mthe stack if we got closing poarantheses
                let top = stack.pop();

                // check if the top element is equal to given character if not return false
                if (top !== map[char]) return false;
            }
        }
        // check if the stack is empty then return true cause all the paranthese are valid and removed from the stack 
        if (stack.length === 0) return true;

    }
}
