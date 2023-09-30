interface INode<T> {
    data: T,
    next: INode<T> | null
}

const createLLNode = <T>(data: T): INode<T> => {
    return {
        data: data,
        next: null
    }
}

const appendNodeInLL = <T>(list: INode<T> | null, data: any): INode<T> => {
    const newNode: INode<T> = createLLNode(data);

    if (!list) {
        return newNode;
    }

    let current: INode<T> = list;
    while (current.next) {
        current = current.next
    }

    current.next = newNode
    return list;
}

const display = <T>(list: INode<T> | null): void => {
    let current: INode<T> | null = list;

    while (current) {
        current = current.next
    }
}

const createStackUsingLL = <T>(list: INode<T> | null) => {
    let current = list;
    return {
        list,
        push(x: T): INode<T> | null {
            const newNode = createLLNode(x);
            newNode.next = list;
            list = newNode
            return list;
        },
        pop(): INode<T> | null {
            list = list ? list.next : null
            return list
        },
        peek(position: number): T | null {
            let currentPosition = 0;
            while (current && currentPosition < position) {
                current = current.next
                currentPosition++
            }
            return current ? current.data : null;
        },
        stackTop(): T | null {
            return list ? list.data : null
        },
        isEmpty(): boolean {
            return list ? false : true;
        },
        isFull(x: T): boolean | null {
            const newNode = createLLNode(x);
            return newNode ? false : true;
        }
    }
}

let list: INode<number> | null = null
// list = appendNodeInLL(list, 5);
// list = appendNodeInLL(list, 6);
// list = appendNodeInLL(list, 7);
// list = appendNodeInLL(list, 8);
// list = appendNodeInLL(list, 9);
// list = appendNodeInLL(list, 10);

// display(list)
const theStack = createStackUsingLL(list)
// console.log("Linked List ===>", theStack.list);
// console.log("Linked List after pushed ===>", JSON.stringify(theStack.push(11)));
// console.log("Linked List after POP ===>", JSON.stringify(theStack.pop()));
// console.log("Linked List after Peak ===>", theStack.peek(3));
// console.log("Stack Top ===>", theStack.stackTop());
// console.log("Is Empty ===>", theStack.isEmpty());
// console.log("Is Full ===>", theStack.isFull(30));

export {
    appendNodeInLL,
    display,
    theStack,
}