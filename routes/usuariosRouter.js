const express = require('express');
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')
const validarCadastro = require("../middlewares/ValidarCadastro")

// pegar todos os usuários
router.get('/', usuariosController.index)

//rota pra a view registro
router.get('/registro', usuariosController.registro)
// http://localhost:3000/usuarios/registro

//rota para a view login
router.get('/login', usuariosController.login)

// rota para criar usuário com validação do middleware
router.post('/:id?', validarCadastro, usuariosController.create)

router.put('/:id?', usuariosController.update)
router.delete('/:id', usuariosController.delete)


module.exports = router;