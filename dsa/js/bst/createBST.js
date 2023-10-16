const createNode = (data) => {
    return {
        data: data,
        left: null,
        right: null
    }
}

const insertInBST = (node, key) => {
    let current = node;
    let prev = null;

    if (!key) {
        return {
            success: false,
            msg: "Please provide key"
        }
    }

    const newNode = createNode(key);

    if (!node) {
        return newNode;
    }

    while (current) {
        prev = current;

        if (current.data === key) {
            return current;
        } else if (key < current.data) {
            current = current.left;
        } else {
            current = current.right
        }
    }

    if (key < prev.data) {
        prev.left = newNode
    } else {
        prev.right = newNode;
    }

    return node;
}

const createBSTRecursively = (node, key) => {
    let current = node;

    if (!current) {
        const newNode = createNode(key);
        return newNode;
    }

    if (key < current.data) {
        current.left = createBSTRecursively(current.left, key)
    } else if (key > current.data) {
        current.right = createBSTRecursively(current.right, key)
    }

    return node;
}

const searchInBST = (node, key) => {

    if (!key) {
        return { success: false, msg: 'Please provide key to be searched!' }
    }

    if (!node) {
        return -1;
    }

    while (node) {
        if (key === node.data) {
            return node;
        } else if (key < node.data) {
            node = node.left
        } else {
            node = node.right
        }
    }

    return -1;
}

let node = null;
node = insertInBST(node, 30);
node = insertInBST(node, 20);
node = insertInBST(node, 10);
node = insertInBST(node, 40);
console.log("insertInBST ===========> ", node);

let bstNode = null;
bstNode = createBSTRecursively(bstNode, 30);
bstNode = createBSTRecursively(bstNode, 20);
bstNode = createBSTRecursively(bstNode, 10);
bstNode = createBSTRecursively(bstNode, 40);
console.log("createBSTRecursively ===========> ", bstNode);

const searchResult = searchInBST(bstNode, 37);
console.log('searchResult ===> ', searchResult);
