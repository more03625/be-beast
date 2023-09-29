interface LinkedListNode {
    data: any,
    next: LinkedListNode | any
}

const createNode = (data: any): LinkedListNode => {
    return {
        data: data,
        next: null
    };
}

const append = (head: LinkedListNode | null, data: any): LinkedListNode => {
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

const findMiddleElementInLinkedList = (list: LinkedListNode): LinkedListNode => {

    let current: LinkedListNode = list
    let previous: LinkedListNode = list

    while (previous) {
        previous = previous.next;

        if (previous) {
            previous = previous.next;
        }

        if (previous) {
            current = current.next;
        }
    }

    return current;
}

const getLength = (list: LinkedListNode): number => {

    let length = 0;
    let current = list;

    while (current) {
        length++
        current = current.next;
    }

    return length;
}

const findInterSectionElement = (headA: LinkedListNode, headB: LinkedListNode): LinkedListNode => {
    const lengthA = getLength(headA);
    const lengthB = getLength(headB);

    // Move the head of the longer linked list by the difference in lengths
    let currentA = headA;
    let currentB = headB;

    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentA = currentA.next;
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentB = currentB.next;
        }
    }

    // Traverse both linked lists simultaneously until a common node is found
    // This should have Unique elements only.

    while (currentA.data !== currentB.data) {
        currentA = currentA.next;
        currentB = currentB.next;
    }

    // Return the intersection node (or null if there is no intersection)
    return currentA.data;
}

// Example usage:
let head: LinkedListNode | null = null;
head = append(head, 8);
head = append(head, 6);
head = append(head, 3);
head = append(head, 9);
head = append(head, 10);
head = append(head, 4);
head = append(head, 2);


let head2: LinkedListNode | null = null;
head2 = append(head2, 30);
head2 = append(head2, 6);
head2 = append(head2, 3);
head2 = append(head2, 9);
head2 = append(head2, 10);
head2 = append(head2, 4);
head2 = append(head2, 2);

console.log('head', head);

// console.log('Middle Element is ====> ', findMiddleElementInLinkedList(head));
console.log('Intersection Point ====> ', findInterSectionElement(head, head2));

