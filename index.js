// servidor e rota

const { response } = require('express')
const express = require('express')
const app = express()
const usuariosController = require('./controllers/usuariosController') 
const postsController = require('./controllers/postsController')

app.use(express.json())


// app.get('/usuarios', (request, response) => {
        
//     return response.send(usuariosController.index());
        
// });

// app.post('/usuarios', (request, response) => {
            
//     const usuario = request.body

//     return response.json(usuariosController.create(usuario))
// });

// app.get('/pets/:nome', (request, response) => {
//     const nome = request.params; //recebe o dado da url
//     return response.send(petshop.buscarPet(nome));
// })


app.listen(3000, () => {
    console.log('Servidor Rodando!');
});


