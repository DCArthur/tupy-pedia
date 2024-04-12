const BinarySearchTree = require('../bst/Bst');
const bst = new BinarySearchTree();
const dicionarioData  = require('../../data/dicionario.json');

//Mostrar dicionario em ordem
const mostrarDicionario = (req, res) => {
    const palavrasEmOrdem = bst.inOrder(); 
    lerDicionario()
    res.render('index', { palavras: palavrasEmOrdem});
};
//Mostrar dicionario Pre-ordem
const dicionarioPreOrdem = (req, res) => {
    const palavrasPreOrdem = bst.preOrder();
    lerDicionario()
    res.render('index', {palavras : palavrasPreOrdem});
}
//Mostra dicionario Pos-ordem
const dicionarioPosOrdem = (req, res) => {
    const palavrasPreOrdem = bst.preOrder();
    lerDicionario()
    res.render('index', {palavras : palavrasPreOrdem});
}

const lerDicionario = () =>{
    Object.entries(dicionarioData).forEach(([key, value]) => {
        bst.insert(key, value);
    })
}




module.exports = {
    mostrarDicionario,
    dicionarioPreOrdem,
    lerDicionario,
    dicionarioPosOrdem
    
};
