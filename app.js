const express = require('express');
const dicionarioData  = require('./data/dicionario.json');
const fs = require('fs');
const path = require('path');
const dicionarioRoutes = require('./src/routes/dicRoutes');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const BinarySearchTree = require('./src/bst/Bst');
const { MostrarPorLetra, dicionarioPosOrdem, dicionarioPreOrdem, mostrarDicionario, buscarPorLetra, buscarNoDic, removerPalavra, removerDoDicionario, adicionarAoDicionario} = require('./src/controllers/dicioControllers');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')))

//Rotas de exibição: em ordem, pre-ordem e pós ordem
app.use('/inOrder', mostrarDicionario)
app.use('/PreOrder', dicionarioPreOrdem)
app.use('/PosOrdem', dicionarioPosOrdem)
app.use('/buscaLetra', buscarPorLetra)
app.use('/buscaPalavra', buscarNoDic)
//app.use('/remover', removerDoDicionario)

//configuração do handlebars
app.set('views', path.join(__dirname, './', 'views'));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
express.urlencoded({ extended: true })

// Carrega o dicionário e insere na BST
const bst = new BinarySearchTree();


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


 
//rederizando a da home
  app.get('/', (req, res) => {
    res.render('home', null);

 });
 //Renderizando a view adicionar
 app.get('/adiciona', (req, res) =>{
  res.render('adiciona', null)
 });

 //renderizando view remove
 app.get('/remove', (req, res)=>{
  res.render('remove', null)
 })
//removendo do dicionario 
app.delete('/remover', (req, res) => {
  console.log(req.body)
  let palavra = req.query.palavra;
  removerDoDicionario(palavra);
  bst.remove(palavra)
  res.send(`${palavra} removida com sucesso do dicionário!`);
});
//adicionando no dicionario 
app.post("/adicionar", (req, res) => {
  console.log(req.body)
  let palavra = req.body.palavra;
  let valor = req.body.valor;
  dicionarioData[palavra] = valor;
  bst.insert(palavra);
  res.send(`Palavra ${palavra} adicionada com sucesso ao dicionário.`);
});



