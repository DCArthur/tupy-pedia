const express = require('express');
const dicionarioController = require('../controllers/dicioControllers');

const router = express.Router();

// Adiciona uma rota para renderizar a view do dicionário
router.get('/', dicionarioController.mostrarDicionario);

module.exports = router;
