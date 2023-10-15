const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const empresa_detalle_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    }
}, {
    timestamps: true,
})
const replegal_schema = new Schema({

    rucrep: req_string,
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    domicilio: req_string,
    telefono: req_string,

    representante_detalle: [empresa_detalle_schema]
}, {
    timestamps: true,
})

const model = mongoose.model('replegal', replegal_schema)
module.exports = model
