
const BinarySearchTree = require('../bst/Bst');

const bst = new BinarySearchTree();


exports.mostrarDicionario = (req, res) => {
    const palavrasEmOrdem = bst.inOrder(); 
    res.render('dicionario', { palavras: palavrasEmOrdem });
};

