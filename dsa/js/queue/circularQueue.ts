type CircularQueue<T> = {
    data: Array<T | undefined>
    front: number,
    rear: number,
    size: number
}

const createCircularQueue = <T>(size: number): CircularQueue<T> => {
    return {
        data: new Array(size),
        front: -1,
        rear: -1,
        size,
    }
}

const isCircularQueueEmpty = <T>(queue: CircularQueue<T>): boolean => {
    return queue.front === queue.rear;
}

const isCircularQueueFull = <T>(queue: CircularQueue<T>) => {
    return (
        ((queue.rear + 1) % queue.size) === queue.front ||
        (queue.front === 0 && queue.rear === queue.size - 1)
    );
}

const enqueueCircularQueue = <T>(queue: CircularQueue<T>, item: T): boolean => {
    if (isCircularQueueFull(queue)) {
        return false; // Queue is full
    }

    queue.rear = (queue.rear + 1) % queue.size;
    queue.data[queue.rear] = item;
    return true;
}

const dequeueCircularQueue = <T>(queue: CircularQueue<T>): T | undefined => {
    if (isCircularQueueEmpty(queue)) {
        return undefined; // Queue is empty
    }

    const item = queue.data[queue.front];
    if (queue.front === queue.rear) {
        // Case: If front reached at the end of the queue.
        queue.front = -1;
        queue.rear = -1;
    } else {

        // queue.rear = (0+1) % 5 = 1
        // queue.rear = (1+1) % 5 = 2
        // queue.rear = (2+1) % 5 = 3
        // queue.rear = (3+1) % 5 = 4
        // queue.rear = (4+1) % 5 = 0

        queue.front = (queue.front + 1) % queue.size;
        queue.data[queue.front] = undefined; // Mark as removed
    }
    return item;
}

const peekCircularQueue = <T>(queue: CircularQueue<T>): T | undefined => {
    if (isCircularQueueEmpty(queue)) {
        return undefined; // Queue is empty
    }
    return queue.data[queue.front];
}

// Understand this code later.

const queue = createCircularQueue(5)

enqueueCircularQueue(queue, 1)
enqueueCircularQueue(queue, 5)
enqueueCircularQueue(queue, 5)
enqueueCircularQueue(queue, 5)
enqueueCircularQueue(queue, 10)

console.log(dequeueCircularQueue(queue));
console.log('queue ==>', queue);
