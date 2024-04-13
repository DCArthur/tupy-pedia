const Node = require('../models/Node');


class BinarySearchTree {
    constructor(value1) {
        this.value1 = null
        this.root = null;
     
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(key) {
        return this._searchNode(this.root, key);
    }

    _searchNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            return this._searchNode(node.left, key);
        } else if (key > node.key) {
            return this._searchNode(node.right, key);
        } else {
            return key + ':' + node.value; // Encontrado
        }
    }

    inOrder() {
        const result = [];
        this._inOrderHelper(this.root, result);
        return result;
    }

    _inOrderHelper(node, result) {
        if (node !== null) {
            this._inOrderHelper(node.left, result);
            result.push({key: node.key, value: node.value});
            this._inOrderHelper(node.right, result);
        }
    }

    preOrder() {
        const result = [];
        this._preOrderHelper(this.root, result);
        return result;
    }

    _preOrderHelper(node, result) {
        if (node !== null) {
            result.push({key: node.key, value: node.value});
            this._preOrderHelper(node.left, result);
            this._preOrderHelper(node.right, result);
        }
    }

    postOrder() {
        const result = [];
        this._postOrderHelper(this.root, result);
        return result;
    }

    _postOrderHelper(node, result) {
        if (node !== null) {
            this._postOrderHelper(node.left, result);
            this._postOrderHelper(node.right, result);
            result.push({key: node.key, value: node.value});
        }
    }

    startsWith() {
        let result = [];
        this._startsWithHelper(this.root, result);
        return result;
    }
    
    _startsWithHelper(node, result) {
        if (node !== null) {
            if (node.key.startsWith(this.value1)) {
                result.push({ key: node.key, value: node.value });
            }
            this._startsWithHelper(node.left, result);
            this._startsWithHelper(node.right, result);
        }
    }
    
}
const bts = new BinarySearchTree();




module.exports = BinarySearchTree;
