// requisição da framework
const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()


// conequição com o banco
function rec_banco (){
    mongoose.connect(`${process.env.conexao_banco}`)

    .then(() => {console.log("conectado")}).catch((err) => console.log("erro",  err))
}

// exporta a conecção
module.exports = rec_banco()