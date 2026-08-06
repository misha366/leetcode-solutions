interface BrowserHistoryNode {
    val: string,
    prev: BrowserHistoryNode | null,
    next: BrowserHistoryNode | null
}

class BrowserHistory {
    private tail: BrowserHistoryNode;
    private head: BrowserHistoryNode;
    private current: BrowserHistoryNode;

    constructor(homepage: string) {
        this.tail = { val: homepage, prev: null, next: null };
        this.head = this.tail;
        this.current = this.tail;
    }

    visit(url: string): void {
        let prev = this.current;
        this.current = { val: url, prev, next: null };
        prev.next = this.current;
        this.tail = this.current;
    }

    back(steps: number): string {
        let current = this.current;
        for (let i = 0; i < steps; i++) {
            if (current.prev === null) {
                this.current = current;
                return current.val;
            }
            current = current.prev;
        }
        this.current = current;
        return current.val;
    }

    forward(steps: number): string {
        let current = this.current;
        for (let i = 0; i < steps; i++) {
            if (current.next === null) {
                this.current = current;
                return current.val;
            }
            current = current.next;
        }
        this.current = current;
        return current.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */