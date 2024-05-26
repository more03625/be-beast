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
}

const recursiveDisplay = (head) => {

    if (head === null) {
        return;
    }

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

const findMinMaxRecursively = (node) => {
    if (!node) {
        return null
    }
    const valueInRest = findMinMaxRecursively(node.next);

    return Math.min(valueInRest, node.data)
}

const linerSearch = (node, keyToSearch) => {

    if (!node) {
        return -1
    }

    if (!keyToSearch) {
        return 'Please provide key to search in linkedlist!'
    }

    let current = node;

    while (current) {
        if (current.data === keyToSearch) {
            return current
        }
        current = current.next
    }
    return -1;

}

const recursiveLinerSearch = (node, keyToSearch) => {
    if (!node) {
        return -1
    }

    if (!keyToSearch) {
        return 'Please provide key to search in linked list!'
    }

    if (node.data === keyToSearch) {
        return node
    }

    return recursiveLinerSearch(node.next, keyToSearch)
}

const moveNodeToFront = (node, keyToSearch) => {
    if (!node) {
        return -1
    }

    if (!keyToSearch) {
        return 'Please provide key to search in LinkedList'
    }

    if (node.data === keyToSearch) {
        return node;
    }

    let current = node;
    let previous = null;

    while (current && current.data !== keyToSearch) {
        previous = current;
        current = current.next;
    }

    if (!current) {
        return -1;
    }

    previous.next = current.next;
    current.next = node;

    return current;
}

const insertNewNode = (node, data, position) => {

    //  {"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}

    // Output: {"data":1,"next":{"data":2,"next":{"data":93,"next":{"data":3,"next":null}}}}

    if (!node || !data) {
        return node;
    }

    let newNode = createNode(data);

    if (position === 0) {
        newNode.next = node;
        return JSON.stringify(newNode);

    } else if (position > 0) {

        let current = node;
        let previous = null;
        let currentPosition = 1;

        while (currentPosition < position && current) {
            previous = current;
            current = current.next
            currentPosition++
        }

        if (currentPosition === position) {
            newNode.next = current;

            if (previous) {
                previous.next = newNode;
            } else {
                // If there's no previous node, it means we're inserting at the beginning.
                return JSON.stringify(newNode);;
            }
        } else {
            return { msg: 'Position Out Of Range!' };
        }

        return JSON.stringify(node);
    }
}

const insertAtLast = (node, data) => {

    const newNode = createNode(data);

    if (!node) {
        return newNode;
    }

    let current = node;

    while (current.next) {
        current = current.next
    }

    if (!current.next) {
        current.next = newNode;
    }

    return JSON.stringify(node);
}

const insertInSortedLinkedList = (node, data) => {

    // Draw diagram of LinkedList to Understand code & Logic Quickly.

    const newNode = createNode(data);

    if (!node) {
        return newNode;
    }

    let current = node;
    let previous = null;

    while (current && current.data < newNode.data) {
        previous = current;
        current = current.next;
    }

    if (!previous) {
        newNode.next = current;
        return JSON.stringify(newNode);
    }

    previous.next = newNode;
    newNode.next = current;

    return JSON.stringify(node);
}

const deleteNode = (node, position) => {
    if (!node) {
        return 'Linked List cannot be empty!';
    }

    // Delete first Node From LinkedList
    if (position === 0) {
        return node.next;
    } else if (position > 0) {
        let current = node;
        let previous = null;
        let currentPosition = 0;

        while (current && currentPosition < position) {
            previous = current;
            current = current.next;
            currentPosition++
        }

        if (!current) {
            return { msg: "Position cannot exceeds length of Linked List!" }
        }

        previous.next = current.next;

        return JSON.stringify(node);
    } else {
        return { msg: "Invalid Position!" }
    }
}

const checkIfLinkedListIsSorted = (node) => {

    if (!node) {
        return { msg: "Linked List is Empty!", success: false };
    }

    let current = node.next;
    let q = node;

    while (current) {
        if (current.data < q.data) { // Checks for isAscending Sorted Only.
            return { msg: "Linked List is UnSorted!", success: false };
        }

        q = current;
        current = current.next
    }

    return { msg: "Linked List is Sorted!", success: true }
}

const removeDuplicatesFromSortedLinkedList = (node) => {

    const isLinkedListSorted = checkIfLinkedListIsSorted(node);

    if (!isLinkedListSorted.success) {
        return isLinkedListSorted.msg;
    }

    if (!node) {
        return { msg: "Linked List is Empty!" };
    }

    let current = node.next;
    let previous = node;


    while (previous && current) {
        if (current.data !== previous.data) {
            previous = current;
            current = current.next;
        } else {
            previous.next = current.next;
            current = previous.next;
        }
    }

    return JSON.stringify(node);
}

const reverseLinkedList = (node) => {

    if (!node) {
        return { msg: "Linked List is Empty!", success: false };
    }

    let previous = null;
    let current = node;
    let next = null;

    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    node = previous;
    return JSON.stringify(node);
}

const recursiveReverseLinkedList = (node) => {
    // Base case: If the current node is null or the last node,
    // return it as it becomes the new head of the reversed list.
    if (!node || !node.next) {
        return node;
    }

    // Recursively reverse the rest of the list.
    const reversedList = recursiveReverseLinkedList(node.next);

    // Make the next node's next pointer point back to the current node,
    // effectively reversing the link.
    node.next.next = node;

    // Set the current node's next pointer to null to avoid cycles.
    node.next = null;

    // Return the new head of the reversed list (which was the last node).
    return reversedList;
}

const concatenateLinkedList = (nodeOne, nodeTwo) => {

    if (!nodeOne) {
        return nodeTwo;
    }

    if (!nodeTwo) {
        return nodeOne;
    }

    let current = nodeOne;

    while (current.next) {
        current = current.next
    }

    current.next = nodeTwo;

    return JSON.stringify(nodeOne);
}

const mergeLinkedList = (nodeOne, nodeTwo) => { // Revise
    if (!nodeOne) {
        return nodeTwo
    }

    if (!nodeTwo) {
        return nodeOne;
    }


    let mergedList = null;
    let tail = null;

    while (nodeOne && nodeTwo) {
        if (nodeOne.data < nodeTwo.data) {
            if (!mergedList) {
                mergedList = nodeOne;
                tail = nodeOne
            } else {
                tail.next = nodeOne;
                tail = tail.next;
            }

            nodeOne = nodeOne.next;
        } else {
            if (!mergedList) {
                mergedList = nodeTwo;
                tail = nodeTwo;
            } else {
                tail.next = nodeTwo;
                tail = tail.next;
            }
            nodeTwo = nodeTwo.next;
        }
    }

    if (nodeOne) {
        tail.next = nodeOne;
    } else if (nodeTwo) {
        tail.next = nodeTwo;
    }

    return JSON.stringify(mergedList);
}

const createLoopInLinkedList = () => {
    const head = createNode(1)
    const second = createNode(2)
    const third = createNode(3)
    const fourth = createNode(4)

    head.next = second;
    second.next = third;
    third.next = fourth

    // Creating Loop by pointing 4th Node to the 2nd Node.
    fourth.next = second;
    return head;
}

const checkLoopInLinkedList = (node) => {
    if (!node) {
        return false;
    }

    let current = node;
    let p = current;
    let q = current;

    do {
        p = p.next;
        q = q.next;
        q = q !== null ? q.next : null;

    } while (p && q && p !== q);

    return p === q ? true : false;
}

const circularLinkedList = () => {
    const head = createNode(8);
    const second = createNode(3);
    const third = createNode(9);
    const fourth = createNode(6);
    const fifth = createNode(2);

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    fifth.next = head;

    return head;
}

const displayCircularLinkedList = (node) => {

    let current = node;
    do {
        console.log(current, "InSide Circular LinkedList");
        current = current.next;
    } while (current !== node);
}

const displayCircularLinkedListRecursively = (node, initialNode, flag = 0) => {

    if (!node) {
        return { success: false, message: "Required node Parameter" }
    }

    if (!initialNode) {
        return { success: false, message: "Required initialNode Parameter" }
    }

    if (flag === 0 || node !== initialNode) {
        flag = 1;
        console.log(node.data);
        displayCircularLinkedListRecursively(node.next, initialNode, flag);
    }
    flag = 0;
}

const insertInCircularLinkedList = (node, position, data) => {

    if (!node) {
        return { success: false, message: "Required node Parameter" }
    }

    if (!data) {
        return { success: false, message: "Required data Parameter" }
    }
    const newNode = createNode(data);
    let current = node;

    if (position === 0) {
        newNode.next = node;

        while (current.next !== node) {
            current = current.next;
        }

        current.next = newNode; // Update the last node's next reference to the new node.
        return displayCircularLinkedListRecursively(node, node)
    } else {
        let currentPosition = 1

        while (currentPosition < position) {
            current = current.next
            currentPosition++
        }

        newNode.next = current.next;
        current.next = newNode;

        return displayCircularLinkedListRecursively(node, node)
    }
}

const deleteFromCircularLinkedList = (node, position) => {

    if (!node) {
        return { success: false, message: "Required node Parameter" }
    }

    if (position === 0) {
        let current = node;

        while (current.next !== node) {
            current = current.next;
        }
        current.next = node.next;
        return displayCircularLinkedListRecursively(node.next, node.next);

    } else {
        let current = node;
        let previous = null
        let currentPosition = 0

        while (currentPosition < position) {
            previous = current
            current = current.next;
            currentPosition++;

            if (current === node) {
                return { success: false, message: "Position exceeds the length of the circular list" };
            }
        }

        previous.next = current.next
        return displayCircularLinkedListRecursively(node, node)
    }
}

// Example usage:
let head = null;
head = append(head, 1);
head = append(head, 3);
head = append(head, 5);

// recursiveDisplay(head)
// display(head);
// console.log('Sum Of elements ====>', sumOfElements(head));
// console.log('recursiveSumOfElements ====>', recursiveSumOfElements(head));
// console.log('findMinMax ====>', findMinMax(head));
// console.log('findMinMaxRecursively ===>', findMinMaxRecursively(head));
// console.log('linerSearch ===> ', linerSearch(head, 92));
// console.log('recursiveLinerSearch ===> ', recursiveLinerSearch(head, 95));
// console.log('Original Node:', head);
// console.log('moveNodeToFront ===> ', moveNodeToFront(head, 92));
// console.log('insertNewNode ===> ', insertNewNode(head, 93, 3));
// console.log('insertAtLast', insertAtLast(null, 25));
// console.log('insertInSortedLinkedList', insertInSortedLinkedList(head, 0));
// console.log('deleteNode', deleteNode(head, 0));
// console.log('checkIfLinkedListIsSorted', checkIfLinkedListIsSorted(head));
// console.log('removeDuplicatesFromSortedLinkedList', removeDuplicatesFromSortedLinkedList(head));
// console.log('reverseLinkedList', reverseLinkedList(head));
// console.log('recursiveReverseLinkedList', recursiveReverseLinkedList(head));
const headTwo = {
    "data": 2,
    "next": {
        "data": 4,
        "next": {
            "data": 6,
            "next": null
        }
    }
}
// console.log('concatenateLinkedList', concatenateLinkedList(head, headTwo));
// console.log('mergeLinkedList', mergeLinkedList(head, headTwo));

// const hasLoopLinkedList = createLoopInLinkedList();
// console.log('checkLoopInLinkedList', checkLoopInLinkedList(hasLoopLinkedList));

const hasCircularLinkedList = circularLinkedList();
// console.log('displayCircularLinkedList', displayCircularLinkedList(hasCircularLinkedList));

// console.log('displayCircularLinkedListRecursively', displayCircularLinkedListRecursively(hasCircularLinkedList, hasCircularLinkedList));
// console.log('insertInCircularLinkedList', insertInCircularLinkedList(hasCircularLinkedList, 1, 20));
console.log('deleteFromCircularLinkedList', deleteFromCircularLinkedList(hasCircularLinkedList, 2));
