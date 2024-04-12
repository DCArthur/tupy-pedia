const express = require('express');
const dicionarioController = require('../controllers/dicioControllers');

const router = express.Router();

// Adiciona uma rota para renderizar a view do dicionário
router.get('/', dicionarioController.mostrarDicionario)
router.get('InOrder', dicionarioController.mostrarDicionario)
router.get('PreOrder', dicionarioController.dicionarioPreOrdem)
router.get('PosOrdem', dicionarioController.dicionarioPosOrdem)


module.exports = router;
