const express = require('express');
const fs = require('fs');
const path = require('path');
const dicionarioRoutes = require('./src/routes/dicRoutes');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const BinarySearchTree = require('./src/bst/Bst');
const { MostrarPorLetra, dicionarioPosOrdem, dicionarioPreOrdem, mostrarDicionario} = require('./src/controllers/dicioControllers');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')))

//Rotas de exibição: em ordem, pre-ordem e pós ordem
app.use('/inOrder', mostrarDicionario)
app.use('/PreOrder', dicionarioPreOrdem)
app.use('/PosOrdem', dicionarioPosOrdem)


//configuração do handlebars
app.set('views', path.join(__dirname, './', 'views'));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Carrega o dicionário e insere na BST
const bst = new BinarySearchTree();


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

  
 
//rederizando a view
  app.get('/', (req, res) => {
    res.render('index', {dicionarioData});


});

app.get('/inOrder', (req, res) => {
  res.render('emordem')
})
