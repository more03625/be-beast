type Queue<T> = T[];

const display = <T>(queue: Queue<T>) => {
    return queue;
}

const enqueue = <T>(queue: Queue<T>, item: T): void => {
    queue.push(item)
}

const dequeue = <T>(queue: Queue<T>): T | undefined => {
    return queue.shift()
}

const peek = <T>(queue: Queue<T>): T | undefined => {
    return queue[0]
}

const isEmpty = <T>(queue: Queue<T>): boolean => {
    return queue.length > 0 ? false : true
}

const size = <T>(queue: Queue<T>): number => {
    return queue.length
}

const myQueue: Queue<string> = []

enqueue(myQueue, "a")
enqueue(myQueue, "b")
enqueue(myQueue, "c")
enqueue(myQueue, "d")

console.log('display ====> ', display(myQueue));
console.log('dequeue ====> ', dequeue(myQueue));
console.log('display ====> ', display(myQueue));
console.log('peek ====> ', peek(myQueue));
console.log('isEmpty ====> ', isEmpty(myQueue));
console.log('size ====> ', size(myQueue));

/*
    Steps to understand the concepts of Queue using array
        i. Clear the concepts of array.
        ii. Clear the rules of Queue.
        iii. Draw it on whiteboard
        iv. refer to notes.
        v. Solve few problems.
*/