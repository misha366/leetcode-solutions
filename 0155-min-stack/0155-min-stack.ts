class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(value: number): void {
        this.stack.push(value);
        this.minStack.push(Math.min(this.minStack.at(-1) ?? Number.MAX_SAFE_INTEGER, value));
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack.at(-1);
    }

    getMin(): number {
        return this.minStack.at(-1);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */