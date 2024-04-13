const BinarySearchTree = require('../bst/Bst');
const dicionarioData  = require('../../data/dicionario.json');
const bst = new BinarySearchTree();
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

}

//Buscar pela letra inicial

const buscarPorLetra = (req, res) =>{
    lerDicionario()
    const buscarPorLetrav = bst.startsWith('a', 'A')
    res.render('home', {palavras: buscarPorLetra})
}

//Buscando valor na arvore 
const buscarNoDic = (req, res) => {
    lerDicionario()
    const buscar = bst.search('Abaré')
    res.render('busca', {palavras:buscar})
    return {palavras: buscar}
}








module.exports = {
    mostrarDicionario,
    dicionarioPreOrdem,
    lerDicionario,
    dicionarioPosOrdem,
    buscarPorLetra, 
    buscarNoDic
    
};
