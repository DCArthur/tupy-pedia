const BinarySearchTree = require('../bst/Bst');
const bst = new BinarySearchTree();

const mostrarDicionario = (req, res) => {
    const palavrasEmOrdem = bst.inOrder(); 
    res.render('index', { palavras: palavrasEmOrdem });
};
const lerDicionario = () =>{
    const dicionarioData  = require('../../data/dicionario.json');
    Object.entries(dicionarioData).forEach(([key, value]) => {
        bst.insert(key, value);
    })
}

lerDicionario()

module.exports = {
    mostrarDicionario 
};
