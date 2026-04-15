class MinStack {
    constructor() {
        this.MinStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.MinStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.MinStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.MinStack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {

        let min = Infinity;

        for (let i = 0; i < this.MinStack.length; i++) {
            if (this.MinStack[i] < min) {
                min = this.MinStack[i];
            }
        }

        return min;
    }
}
