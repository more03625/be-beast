const createNode = (data) => {
    return {
        data: data,
        left: null,
        right: null
    }
}

const addLeftChild = (node, data) => {
    const newNode = createNode(data);
    node.left = newNode;
    return newNode;
}

const addRightChild = (node, data) => {
    const newNode = createNode(data);
    node.right = newNode;
    return newNode
}

const root = createNode(1);
const node2 = addLeftChild(root, 2);
const node3 = addRightChild(root, 3);

const node4 = addLeftChild(node2, 4);
const node5 = addRightChild(node2, 5);

const node6 = addLeftChild(node3, 6);
const node7 = addRightChild(node3, 7);

console.log("node7 ========> ", root);