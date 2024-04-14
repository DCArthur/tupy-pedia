const express = require('express');
const dicionarioController = require('../controllers/dicioControllers');

const router = express.Router();

router.get('/', dicionarioController.mostrarDicionario)
router.get('InOrder', dicionarioController.mostrarDicionario)
router.get('PreOrder', dicionarioController.dicionarioPreOrdem)
router.get('PosOrdem', dicionarioController.dicionarioPosOrdem)
router.get('buscaLetra', dicionarioController.buscarPorLetra)
router.get('buscaPalavra', dicionarioController.buscarNoDic)
router.delete('romover', dicionarioController.removerDoDicionario)
router.post('adicionar', dicionarioController.adicionarAoDicionario)




module.exports = router;
