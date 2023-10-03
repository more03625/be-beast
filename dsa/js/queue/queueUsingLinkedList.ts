type ILinkedList = {
    data: number,
    next: ILinkedList | null
}

interface IReturn {
    success: boolean,
    msg: string
}

let front: ILinkedList | null = null;
let rear: ILinkedList | null = null;

const createNode = (data: number): ILinkedList => {
    return {
        data: data,
        next: null
    }
}

const enqueue = (data: number): IReturn => {
    const newNode = createNode(data);

    if (!newNode) {
        return { success: false, msg: 'Queue is full!' };
    }

    if (front === null) {
        front = newNode;
        rear = newNode;
    } else {
        rear!.next = newNode;
        rear = newNode;
    }

    return { success: true, msg: 'New node has been added to the list!' };
}

const dequeue = (): IReturn => {
    let x = -1;
    if (front === null) {
        return { success: false, msg: "queue is empty!" }
    } else {
        x = front.data
        front = front.next;

        return { success: true, msg: 'Node has been deleted from the list' };
    }
}

const display = () => {
    let current = front

    while (current) {
        console.log(current.data);
        current = current.next
    }
}

enqueue(10);
enqueue(5);
enqueue(20);
enqueue(30);
console.log('queue after enqueue:', JSON.stringify(front));
display();
console.log('dequeued item:', dequeue());
console.log('queue after dequeue:', front);


export {
    enqueue,
    dequeue,
    display
}