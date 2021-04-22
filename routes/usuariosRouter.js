const express = require('express');
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')
const validarCadastro = require("../middlewares/ValidarCadastro")

router.get('/', usuariosController.index)

router.get('/registro', usuariosController.registro)
// http://localhost:3000/usuarios/registro


router.post('/:id?', validarCadastro, usuariosController.create)
router.put('/:id?', usuariosController.update)
router.delete('/:id', usuariosController.delete)


module.exports = router;