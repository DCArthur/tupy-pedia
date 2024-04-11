const express = require('express');
const dicionarioController = require('../controllers/dicioControllers');

const router = express.Router();

router.get('/buscar/:palavra', dicionarioController.buscarPalavra);

module.exports = router;