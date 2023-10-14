const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const replegal_schema = new Schema({
    nombre: req_string,
})

const model = mongoose.model('replegal', replegal_schema)
module.exports = model
