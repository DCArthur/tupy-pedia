const express = require('express');
const fs = require('fs');
const path = require('path');
const dicionarioRoutes = require('./src/routes/dicRoutes');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const BinarySearchTree = require('./src/bst/Bst');
const { mostrarDicionario } = require('./src/controllers/dicioControllers');



const app = express();
app.use(express.json());
app.use('/', mostrarDicionario);

//configuração do handlebars
app.set('views', path.join(__dirname, './', 'views'));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Carrega o dicionário e insere na BST
const bst = new BinarySearchTree();

const dicionarioPath = path.join(__dirname, './','data', 'dicionario.json');
const dicionarioData = JSON.parse(fs.readFileSync(dicionarioPath, 'utf8'));
Object.entries(dicionarioData).forEach(([key, value]) => {
    bst.insert(key, value);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

  
  module.exports = dicionarioData;
//rederizando a view
  app.get('/', (req, res) => {
    res.render('index', {dicionarioData});
});
