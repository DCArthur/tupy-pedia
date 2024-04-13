const BinarySearchTree = require('../bst/Bst');
const bst = new BinarySearchTree();
const dicionarioData  = require('../../data/dicionario.json');

//Mostrar dicionario em ordem
const mostrarDicionario = (req, res) => {
    lerDicionario()
    const palavrasEmOrdem = bst.inOrder(); 
    res.render('index', { palavras: palavrasEmOrdem});
    return {palavras: palavrasEmOrdem}

};

//Mostrar dicionario Pre-ordem
const dicionarioPreOrdem = (req, res) => {
    lerDicionario()
    const palavrasPreOrdem = bst.preOrder();
    res.render('index',  {palavras : palavrasPreOrdem});
}


//Mostra dicionario Pos-ordem
const dicionarioPosOrdem = (req, res) => {
    lerDicionario()
    const palavrasPosOrdem = bst.postOrder();
    res.render('index', {palavras : palavrasPosOrdem});
    return {palavras: palavrasPosOrdem}
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
