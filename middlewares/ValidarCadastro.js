const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let {email, nome, senha} = req.body
    
        if(!nome){
            res.status(400).json({ erro: "nome não informado" })
        }else{
            if(!senha){
                res.status(400).json({ erro: "senha não informada" })
            }else{
                if(!email){
                    res.status(400).json({ erro: "E-mail não informado"})
                }else{
                    let user = await Usuario.findAll({ where: {email} } )
                    if(user.length){
                        res.status(400).json({erro: "Email já cadastrado"})
                        return;
                    }else{
                        if(senha.length > 12){
                            res.status(400).json({ erro: "A senha deve conter no máximo 12 caracteres"})
                        }else{
                            if(senha.length < 6){
                                res.status(400).json({ erro: "A senha deve conter no mínimo 6 caracteres"})
                            }else{
                                 next()
                            }
                    }
                }
            }
            
        }
        
    }
}

// const { Usuario } = require('../models')
// ​
// module.exports = async (request, response, next) => {
//     let { email } = request.body;
//     let users = await Usuario.findAll({ where: { email } });
//     if (users.length) {
//         response.status(400).json({ erro: "Email já cadastrado" })
//         return;
//     } else {
//         next();
//     }
// ​
// }