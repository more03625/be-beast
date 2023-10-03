const createQueueUsingTwoStack = () => {
    const enqueueStack = [];
    const dequeueStack = [];

    const getStackData = () => {
        return {
            enqueueStack,
            dequeueStack
        }
    }

    const isEmpty = () => {
        return enqueueStack.length === 0 && dequeueStack.length === 0
    }

    const enqueue = (x) => {
        enqueueStack.push(x)
    }

    const dequeue = () => {
        if (isEmpty()) {
            return null;
        }

        if (dequeueStack.length === 0) {
            while (enqueueStack.length > 0) {
                dequeueStack.push(enqueueStack.pop()) // remove last element from enqueueStack & push to dequeueStack
            }
        }

        return dequeueStack.pop();
    }

    return {
        getStackData,
        isEmpty,
        enqueue,
        dequeue
    }
}

const queue = createQueueUsingTwoStack();
queue.enqueue(10)
queue.enqueue(10)
queue.enqueue(10)
queue.enqueue(10)

console.log('After Enqueue', queue.getStackData());

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log('After Dequeue', queue.getStackData());
console.log("Are Stacks Empty ====> ", queue.isEmpty());