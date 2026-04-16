class MinStack {
    constructor() {
        // Optimised Solution using stack

        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let value = this.stack.push(val);

        if (value <= this.minStack) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let value = this.stack.pop();

        if (value === this.minStack.at(-1)) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}
