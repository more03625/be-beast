const createNode = (data) => {
    return {
        data: data,
        next: null
    };
}

const append = (head, data) => {
    const newNode = createNode(data);

    // It first checks if the head of the list is null. If it is, then the list is empty and the new node becomes the head of the list.
    if (!head) {
        return newNode;
    }

    /*
        * The function iterates over the list until it finds the last node (which is the node whose next property is null).
        * Then, the function sets the next property of the last node to point to the new node. 
    */

    let current = head; // Head is Object so it will be copied by reference.

    while (current.next) {
        current = current.next;
    }

    /*
        * NOTE: when you are setting `current.next` the `head` will be updated because `objects are passed by reference`
    */
    current.next = newNode; // Set the 'next' property of the last node to the new node.
    return head; // Return the updated head of the list.

}

const display = (head) => {
    let c = 0
    let current = head;
    while (current) {
        current = current.next;
        c++
    }
    console.log("Count of Element in LinkedList ====> ", c);
}

const recursiveDisplay = (head) => {

    if (head === null) {
        return;
    }

    console.log("recursiveDisplay ===> ", head.data);
    recursiveDisplay(head.next)
}

const sumOfElements = (node) => {

    let sum = 0;
    let current = node;

    while (current) {
        sum = sum + current.data;
        current = current.next
    }
    return sum;
}

const recursiveSumOfElements = (node) => {
    if (node) {
        return recursiveSumOfElements(node.next) + node.data
    } else {
        return 0
    }
}

const findMinMax = (node) => {
    console.log('All Elements of LinkedList ===> ', node);

    if (!node) {
        return null
    }

    let current = node;
    let maxElement = node.data, minElement = node.data;

    while (current) {
        if (current.data > maxElement) {
            maxElement = current.data;
        }

        if (current.data < minElement) {
            minElement = current.data
        }

        current = current.next;
    }

    return { maxElement, minElement }
}

const findMinMaxRecursivly = (node) => {
    if (!node) {
        return null
    }
    const valueInRest =  findMinMaxRecursivly(node.next);

    return Math.min(valueInRest, node.data)
}

// Example usage:
let head = null;
head = append(head, 1); // head = {data:1, next: null}
head = append(head, 92); //
head = append(head, 3);


recursiveDisplay(head)
display(head);
console.log('Sum Of elements ====>', sumOfElements(head));
console.log('recursiveSumOfElements ====>', recursiveSumOfElements(head));
console.log('findMinMax ====>', findMinMax(head));
console.log('findMinMaxRecursivly ===>', findMinMaxRecursivly(head));

