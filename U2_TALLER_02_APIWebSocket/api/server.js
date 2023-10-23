const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./network/routes');
const db = require('./db');

var app = express();
db(config.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static('public'));

routes(app);

const server = app.listen(config.PORT, () => {
    console.log(`La app está lista en http://localhost:${config.PORT}/`);
});

const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('Cliente conectado');

    socket.on('agregar', function (data) {
        socket.emit('respuesta', { mensaje: 'Una nueva empresa se ha agregado' });
    });

    socket.on('agregarEmpresa', function (data) {
        io.emit('repLegalAgregado', { mensaje: 'Una nueva empresa se ha agregado' });
    });

});

module.exports = io;

