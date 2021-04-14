const { Post, sequelize } = require('../models')

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll()

        return res.json(posts)
    },

    show: async (req, res) => {
        idUsuario = req.params.id
        let mostrarPosts = await Post.findAll({
            where: {usuarios_id: idUsuario}
        })
        return res.json(mostrarPosts)
    },


    create: async (req, res) => {
        const criar = req.body
        let novoPost = await Post.create({
            texto: criar.texto,
            img: null,  // TODO saber se é obrigatório
            usuarios_id: req.params.id,
            n_likes: null

        })
        return res.json(novoPost)
    },

    update: async (req, res) => {
        const mudar =  req.body
        let modificarPost = await Post.update({
            texto: mudar.texto
        },{
            where: { id: req.params.id }
        })
        return res.json(mudar)
    },

    delete: async (req, res) => {
        
        let deletarPost = await Post.destroy({
            where: { id: req.params.id }
        })
        return res.json(deletarPost)
    }
    
    
}

module.exports = postsController