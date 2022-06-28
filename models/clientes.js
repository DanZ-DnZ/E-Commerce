const mongoose = require("mongoose")
const Schema = mongoose.Schema

let clientesSchema = new Schema({
    name: String,
    email: String,
    senha: String,
    dataNascimento: Date,
    cpf: Number,
    endereco: {
        cep: Number,
        rua: String,
        complemento: String,
        numero: Number
    },
    telefone: Number
}, { collation: 'clientes' })

let Clientes = mongoose.model("clientes", clientesSchema)

module.exports = Clientes
