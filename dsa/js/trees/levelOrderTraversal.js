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

const levelOrderTraversal = (root) => {
    if (!root) {
        return [];
    }

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const current = queue.shift(); // Removes the first element from an array and returns it.

        result.push(current.data);

        if (current.left) {
            queue.push(current.left)
        }

        if (current.right) {
            queue.push(current.right)
        }
    }
    return result;
}

const countNode = (root) => {
    let x, y;

    if (root) {
        x = countNode(root.left);
        y = countNode(root.right);

        return x + y + 1
    } else {
        return 0;
    }
}

const countHeight = (root) => {
    let x = 0, y = 0;

    if (root === 0) {
        return 0;
    }

    x = countHeight(root.left || 0);
    y = countHeight(root.right || 0);

    if (x > y) {
        return x + 1;
    } else {
        return y + 1
    }

}
const root = createNode(1);
const node2 = addLeftChild(root, 2);
const node3 = addRightChild(root, 3);

const node4 = addLeftChild(node2, 4);
const node5 = addRightChild(node2, 5);

const node6 = addLeftChild(node3, 6);
const node7 = addRightChild(node3, 7);

// const result = levelOrderTraversal(root);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]

const result = countNode(root);
console.log("Count Nodes ====>", result);

const countHeightResult = countHeight(root);
console.log("countHeightResult ====>", countHeightResult);