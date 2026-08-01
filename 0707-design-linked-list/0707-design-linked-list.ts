class MyLinkedListNode {
    prev: MyLinkedListNode | null;
    next: MyLinkedListNode | null;
    val: number;
}

class MyLinkedList {
    private head: MyLinkedListNode | null = null;
    private tail: MyLinkedListNode | null = null;
    private length = 0;

    get(index: number): number {
        return this.getNodeAt(index)?.val ?? -1;
    }

    addAtHead(val: number): void {
        if (this.head === null && this.tail === null) {
            const newHead = { val, next: null, prev: null };
            this.head = newHead;
            this.tail = this.head;
            this.length = 1;
            return;
        }
        const newHead = { val, next: this.head, prev: null };
        this.head.prev = newHead;
        this.head = newHead;
        this.length++;
    }

    addAtTail(val: number): void {
        if (this.head === null && this.tail === null) {
            const newTail = { val, next: null, prev: null };
            this.tail = newTail;
            this.head = this.tail;
            this.length = 1;
            return;
        }
        const newTail = { val, next: null, prev: this.tail };
        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) return;
        if (index === 0) return this.addAtHead(val);
        if (index === this.length) return this.addAtTail(val);

        const current = this.getNodeAt(index - 1); // insert a node BEFORE this index
        const node = { val, next: current.next, prev: current };
        current.next.prev = node;
        current.next = node;
        this.length++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) return;
        const current = this.getNodeAt(index);
        
        if (current.prev !== null) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next !== null) current.next.prev = current.prev;
        else this.tail = current.prev
        
        this.length--;
    }

    private getNodeAt(index: number): MyLinkedListNode | null {
        if (index >= this.length || index < 0) return null;

        let current: MyLinkedListNode | null;
        if (index < this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) current = current.next;
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) current = current.prev;
        }

        return current;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */