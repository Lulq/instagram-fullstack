const { response } = require('express');
const { Usuario, sequelize } = require('../models');
const bcrypt = require('bcryptjs')

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();

        return res.render('usuarios', { listaUsuarios : usuarios});
    },

    registro : (req, res) => {
        return res.render('registro')

    },

    login: (req, res) => {
        return res.render('login')
    },

    auth: async (req, res) => {
        const { email, senha } = req.body

        const usuario = await Usuario.findOne({
            where: { email }
        })

        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
            req.session.usuarioLogado = usuario // criando atributo usuarioLogado na session
            return res.redirect('/') // redirecionando para a pagina inicial
            
        }else {
            return res.redirect('/usuarios/login')
        }
    },


    
    // create: async (req, res) => {
    //     const user = req.body
    //     let novoUsuario = await Usuario.create({   
    //         nome: user.nome,
    //         email: user.email,
    //         senha: user.senha
    //     })
    //     return res.json(novoUsuario)
    // },

    // forma otimizada
    create: async (req, res) => {
        let { nome, email, senha } = req.body;

        const senhaCrypt = bcrypt.hashSync(senha, 10)  //recebe a senha e o salt

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCrypt
        })

        return res.redirect('/usuarios/login')
    },
    
    update: async (req, res) => {
        const alteracao = req.body
        var alterarUsuario = await Usuario.update({
            nome: alteracao.nome,
            email: alteracao.email,
            senha: alteracao.senha
            },{
                where: { id : req.params.id }
            })
        return res.json(alterarUsuario)
    },

    delete: async (req, res) => {
        let { id } = req.params
        let deletarUsuario = await Usuario.destroy({
            where: { id }
        })
        return res.json(deletarUsuario)
    }
}

module.exports = usuariosController;