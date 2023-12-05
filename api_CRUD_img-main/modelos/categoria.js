const mongoose = require("mongoose")

// guarda as informações sobre a categoria 
const categoria = mongoose.Schema({
    
    pk_categoria:{
        type: String,
        required: true
    }
})