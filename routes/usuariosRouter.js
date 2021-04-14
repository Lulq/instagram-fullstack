const express = require('express');
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

router.get('/', usuariosController.index)
router.post('/:id?', usuariosController.create)
router.put('/:id?', usuariosController.update)
router.delete('/:id', usuariosController.delete)

//TODO
// router.get('/perfil/:id', usuariosController.show);


module.exports = router;