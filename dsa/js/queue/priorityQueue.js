const createPriorityQueue = () => {
    const heap = [];

    const enqueue = (element, priority) => {
        const node = {
            element, priority
        }
        heap.push(node);
    }

    const dequeue = () => {
        if (isEmpty()) {
            return null;
        }


        const rootNode = heap[0];
        const lastNode = heap.pop();

        if (isEmpty()) {
            return rootNode.element;
        }

        heap[0] = lastNode;
    }

    const isEmpty = () => {
        return heap.length === 0;
    }

    return {
        heap,
        enqueue,
        dequeue,
        isEmpty,
    };
}

const priorityQueue = createPriorityQueue();

priorityQueue.enqueue("A", 3);
priorityQueue.enqueue("B", 1);
priorityQueue.enqueue("D", 5);
priorityQueue.enqueue("C", 2);

console.log('After Enqueue ===> ', priorityQueue.heap);

priorityQueue.dequeue()
priorityQueue.dequeue()
console.log('After Dequeue ===> ', priorityQueue.heap);
