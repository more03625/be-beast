const createNode = (data) => {
    return {
        data: data,
        left: null,
        right: null
    }
}

const insert = (node, data) => {
    if (!node) {
        return createNode(data);
    }

    if (data < node.data) {
        node.left = insert(node.left, data)
    } else {
        node.right = insert(node.right, data)
    }

    return node
}

const inOrderTraversal = (node, result = []) => {
    if (!node) {
        return result;
    }

    inOrderTraversal(node.left, result);
    result.push(node.data);
    inOrderTraversal(node.right, result);

    return result;
}

let node = null;
node = insert(node, 10);
node = insert(node, 5);
node = insert(node, 6);
node = insert(node, 3);
node = insert(node, 1);

// Perform an in-order traversal to get the sorted values
console.log(JSON.stringify(node));
const sortedValues = inOrderTraversal(node);
console.log(sortedValues);