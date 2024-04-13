const BinarySearchTree = require('../bst/Bst');
const bst = new BinarySearchTree('a', 'A');
const dicionarioData  = require('../../data/dicionario.json');


const lerDicionario = () =>{
    Object.entries(dicionarioData).forEach(([key, value]) => {
        bst.insert(key, value);
    })
}

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

//Buscar pela letra inicial

const buscarPorLetra = (req, res) =>{
    //lerDicionario()
    const buscarPorLetrav = bst.startsWith()
    //res.render({palavras:buscarPorLetrav })
    return {palavras:buscarPorLetrav}
}








module.exports = {
    mostrarDicionario,
    dicionarioPreOrdem,
    lerDicionario,
    dicionarioPosOrdem,
    buscarPorLetra
    
};
