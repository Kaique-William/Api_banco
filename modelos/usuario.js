const mongoose = require("mongoose")

// guarda as informações à abela "usuario"
const usuarios = mongoose.Schema({

    nome:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        required: true   // campo obrigatório
    },

    sobrenome:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        required: false   // campo opcional
    },

    email:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        unique: true,   // valor único na tabela
        lowercase: true,   // transformar em minúsculo
        trim: true,   // remove espaços antes e depois do texto
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,3})+$/], // expressão regular para verificação
        require: true // campo obrigatorio
    },

    senha:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        select: false,   // não mostrar a senha quando for retornada da consulta
        match:[/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/], // analise de senha forte
        required: true   // campo obrigatório
    },

    telefone:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:15,   // limite máximo de caracteres
        minlength:10,   // limite mínimo de caracteres
        required: true,   // campo obrigatório
        trim: true   // remove espaços antes e depois do texto
    },

    cpf:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:14,   // limite máximo de caracteres
        minlength:11,   // limite mínimo de caracteres
        required: true,   // campo obrigatório
        trim: true   // remove espaços antes e depois do texto
    },

    usuario:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:12,   // limite máximo de caracteres
        minlength:6,   // limite mínimo de caracteres
        required: true,   // campo obrigatório
        trim: true   // remove espaços antes e depois do texto
    },

    sobre:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:500,   // limite máximo de caracteres
        required: false,   // campo opcional
        trim: true   // remove espaços antes e depois do texto
    }
})

module.exports = mongoose.model('usuario', usuario);
