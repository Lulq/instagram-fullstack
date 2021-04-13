const { Usuario, sequelize } = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();

        return res.json(usuarios);
    },
    
    create: async (req, res) => {
        const user = req.body
        let novoUsuario = await Usuario.create({   
            nome: user.nome,
            email: user.email,
            senha: user.senha
        })
        return res.json(novoUsuario)
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
        
        let deletarUsuario = await Usuario.destroy({
            where: { id: req.params.id }
        })
        return res.json(deletarUsuario)
    }
}



module.exports = usuariosController;