function createNode(data) {
    return {
        data: data,
        next: null,
        prev: null,
    };
}

function appendToDoublyLinkedList(list, data) {
    const newNode = createNode(data);
    if (!list.head) {
        list.head = newNode;
        list.tail = newNode;
    } else {
        newNode.prev = list.tail;
        list.tail.next = newNode;
        list.tail = newNode;
    }
}

function prependToDoublyLinkedList(list, data) {
    // This is used to add node at the beginning

    const newNode = createNode(data);
    if (!list.head) {
        list.head = newNode;
        list.tail = newNode;
    } else {
        newNode.next = list.head;
        list.head.prev = newNode;
        list.head = newNode;
    }
}

function printDoublyLinkedListForward(list) {
    let current = list.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

function printDoublyLinkedListBackward(list) {
    let current = list.tail;
    while (current) {
        console.log(current.data);
        current = current.prev;
    }
}

// Example usage:
const doublyLinkedList = {
    head: null,
    tail: null,
};

const insertInDoublyLinkedList = (list, position = 0, data) => {
    if (!data) {
        return { success: false, message: "Data is required" }
    }

    const newNode = createNode(data);

    if (position === 0) {
        if (!list) {
            list.head = newNode;
            list.tail = newNode;
        } else {
            newNode.prev = null;
            newNode.next = list.head;
            list.head.prev = newNode;
            list.head = newNode
        }

        return printDoublyLinkedListForward(list)
    } else if (position > 0) {
        let currentPosition = 0;
        let current = list.head;
        let previousNode = null;

        while (currentPosition < position && current) {
            previousNode = current;
            current = current.next;
            currentPosition++;
        }

        if (currentPosition === position) {
            newNode.next = current;
            newNode.prev = previousNode;

            if (previousNode) {
                previousNode.next = newNode;
            }

            if (current) {
                current.prev = newNode;
            }

            return printDoublyLinkedListForward(list);
        } else {
            return { success: false, message: "Invalid Position" }
        }
    } else {
        return { success: false, message: "Invalid Position" }
    }
}

const deleteFromDoublyLinkedList = (list, position = 0) => {

    if (!list.head) {
        return { success: false, message: "List is empty" };
    }

    if (position === 0) {
        list.head = list.head.next;

        if (list.head) {
            list.head.prev = null
        } else {
            list.tail = null;
        }
        return printDoublyLinkedListForward(list)
    } else if (position > 0) {

        let currentPosition = 1;
        let current = list.head;

        while (current && currentPosition < position) {
            current = current.next;
            currentPosition++
        }

        if (!current) {
            return { success: false, message: "Invalid position" };
        }

        if (current.prev) {
            current.prev.next = current.next;
        }

        if (current.next) {
            current.next = current.prev.next;
        }
        return printDoublyLinkedListForward(list);
    } else {
        return { success: false, message: "Invalid position!" };
    }

}

const displayLinkedList = (list) => {
    let current = list.head
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

const reverseLinkedList = (list) => {
    let current = list.head
    let temp;
    while (current) {
        // Swap next and prev pointers
        temp = current.next
        current.next = current.prev;
        current.prev = temp;

        // Move Current to Next node in the list
        current = current.prev;

        // Update list.head if we reach the end of the reversed list
        if (current && current.next === null) {
            list.head = current
        }
    }

    return displayLinkedList(list)
}

appendToDoublyLinkedList(doublyLinkedList, 6);
appendToDoublyLinkedList(doublyLinkedList, 9);
appendToDoublyLinkedList(doublyLinkedList, 3);
appendToDoublyLinkedList(doublyLinkedList, 7);
appendToDoublyLinkedList(doublyLinkedList, 2);
// prependToDoublyLinkedList(doublyLinkedList, 0);

// console.log("Doubly Linked List (Forward):");
// printDoublyLinkedListForward(doublyLinkedList);

// console.log("\nDoubly Linked List (Backward):");
// printDoublyLinkedListBackward(doublyLinkedList);

// console.log('insertInDoublyLinkedList =======> ', insertInDoublyLinkedList(doublyLinkedList, 0, 10));
// console.log('deleteFromDoublyLinkedList ====>', deleteFromDoublyLinkedList(doublyLinkedList, 10));

// console.log('displayLinkedList', displayLinkedList(doublyLinkedList));
console.log('reverseLinkedList', reverseLinkedList(doublyLinkedList));

