interface BrowserHistoryNode {
    val: string,
    prev: BrowserHistoryNode | null,
    next: BrowserHistoryNode | null
}

class BrowserHistory {
    private current: BrowserHistoryNode;

    constructor(homepage: string) {
        this.current = { val: homepage, prev: null, next: null };
    }

    visit(url: string): void {
        let prev = this.current;
        this.current = { val: url, prev, next: null };
        prev.next = this.current;
    }

    back(steps: number): string {
        while (steps > 0 && this.current.prev !== null) {
            steps--;
            this.current = this.current.prev;
        }
        return this.current.val;
    }

    forward(steps: number): string {
        while (steps > 0 && this.current.next !== null) {
            steps--;
            this.current = this.current.next;
        }
        return this.current.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */