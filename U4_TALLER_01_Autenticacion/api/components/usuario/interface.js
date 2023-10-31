const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function (req, res) {
    const filtro_usuario = req.query.nombre || null
    controller.get_usuario(filtro_usuario)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.post('/', function(req, res) {
  console.log(req.body);
  controller.add_usuario( req.body )
      .then( (data) => response.success(req, res, data, 201) )
      .catch( (error) => response.error(req, res, error, 500) )
})

module.exports = route