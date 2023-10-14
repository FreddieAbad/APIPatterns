const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const empresa_schema = new Schema({
    nombre: req_string,
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    },
})

const model = mongoose.model('empresa', empresa_schema)
module.exports = model
