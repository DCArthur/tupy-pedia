const express = require('express');
const dicionarioRoutes = require('./src/routes/dicRoutes');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')


const app = express();
app.use(express.json());
app.use('/api', dicionarioRoutes);

//configuração do handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//rederizando a view
app.get('/', (req, res) => {
    let Ola = `<h1> Hello World</h1>`
    res.render('index', { palavras: dicionarioData });
});