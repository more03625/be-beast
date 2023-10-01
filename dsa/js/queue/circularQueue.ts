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
    return queue.front === -1;
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
    if (isCircularQueueEmpty(queue)) {
        queue.front = 0;
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
        queue.front = queue.rear = -1;
    } else {
        queue.front = (queue.front + 1) % queue.size;
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