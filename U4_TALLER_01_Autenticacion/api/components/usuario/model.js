const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}


const usuario_schema = new Schema({
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    username: req_string,
    password: req_string,
    rol: req_string
})

const model = mongoose.model('usuario', usuario_schema)
module.exports = model
