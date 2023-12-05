const mongoose = require("mongoose")

// guarda as informações à abela "receitas"
const receitas = mongoose.Schema({

    id:{
        type: String,  //id da receita
        required: true
    },

    nome:{
        type:String,   //nome da receita
        required:true
    },

    apresentacao:{
        type:String,   //apresentação da receita
        required:false,
        maxlength:100 // maximo de caracteres para a apresentação
    },

    tempo_preparo:{
        type:Number,   //tempo de preparo em minutos
        required:true
    },

    ingredientes:{
        type:[{
            quantidade:{
                type: Number,     //quantidade do ingrediente
                required: false
                },
            unidade:{
                type: String,      //unidade do ingrediente
                required: false
                },
            descricao:{
                type: String,       //descrição do ingrediente
                required: true
                }
        }],
    required: true
    },

    modo_de_preparo:{
        type: [{
            passo:{
                type: String,         //passos para preparar a receita
                required: true
            }
        }] ,
         required: true
    },
    
    imagem:{
        type: String,                 //imagem da receita
        required: false
    },

    categoria:{
        type: mongoose.SchemaTypes.ObjectId,  //categoria da receita
        ref:'Categorias',              //referencia para o model Categorias
        required: true
    }
})

module.exports = mongoose.model('receitas', receitas);