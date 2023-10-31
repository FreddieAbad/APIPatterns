const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function (req, res) {
    const filtro_replegal = req.query.nombre || null
    controller.get_replegal(filtro_replegal)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.post('/', function (req, res) {
    console.log(req.body);
    controller.add_replegal(req.body)
        .then((data) => {
            const io = require('../../server.js');
            io.emit('repLegalAgregado', 'Se le ha asignado una nueva empresa.');
            response.success(req, res, data, 201);
        })
        .catch((error) => {
            console.error(error.stack);

            response.error(req, res, error, 500);
        })
})

route.put('/', function (req, res) {
    controller.update_replegal(req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.delete('/', function (req, res) {
    controller.delete_replegal(req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

module.exports = route