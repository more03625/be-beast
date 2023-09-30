interface IStack<T> {
    items: T[],
    push(element: T): T[],
    pop(): T[] | undefined,
    peek(): T | undefined,
    size(): number,
    isEmpty(): Boolean,
    clear(): T[],
}


const createStack = <T>(): IStack<T> => {
    const items: T[] = [];

    return {
        items,
        push(element: T) {
            items.push(element)
            return items
        },
        pop() {
            if (this.isEmpty()) {
                return undefined;
            }
            items.pop();
            return items;
        },
        peek() {
            if (this.isEmpty()) {
                return undefined;
            }

            return items[items.length - 1];
        },
        size() {
            return items.length;
        },
        isEmpty() {
            return items.length === 0;
        },
        clear() {
            items.length = 0;
            return items;
        },
    }
}

const stack = createStack<number>();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log("Items ====> ", stack.items);
console.log("After Push ====> ", stack.push(90));
console.log("After POP ====> ", stack.pop());
console.log("Peek ====> ", stack.peek());
console.log("Size ====> ", stack.size());
console.log("isEmpty ====> ", stack.isEmpty());
console.log("clear ====> ", stack.clear());
