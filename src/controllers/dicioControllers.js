const BinarySearchTree = require('../bst/Bst');
const bst = new BinarySearchTree();
const dicionarioData = require('../../data/dicionario.json')
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
    bst.value1 = req.query.busca
    lerDicionario()
    const buscarPorLetrav = bst.startsWith()
    res.render('index', {palavras: buscarPorLetrav})
}
//Remover valor
const removerDoDicionario = (palavra) => {
    delete dicionarioData[palavra];
    bst.remove(palavra);
  };

//Buscando valor na arvore 
const buscarNoDic = (req, res) => {
  const palavra = req.query.buscaPalavra;
  lerDicionario();
  const buscar = bst.search(palavra);
  if (buscar) {
    res.render("busca", { palavras: buscar, notFound: false, found: true });
  } else {
    res.render("busca", {
      message: "Palavra não encontrada!",
      notFound: true,
      found: false,
    });
  }
};
//add no dicionario
const adicionarAoDicionario = (palavra, valor) => {
    dicionarioData[palavra] = valor;
    bst.add(palavra);
};



//lerDicionario()
//bst.remove('Macaúba')
//console.log(bst.search('Macaúba'))


module.exports = {
    mostrarDicionario,
    dicionarioPreOrdem,
    lerDicionario,
    dicionarioPosOrdem,
    buscarPorLetra, 
    buscarNoDic,
    removerDoDicionario,
    adicionarAoDicionario
    
};
