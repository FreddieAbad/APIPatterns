const replegal = require('../components/replegal/interface')
const empresa = require('../components/empresa/interface')
const usuario = require('../components/usuario/interface')

const routes = function(server) {
    server.use('/replegal', replegal)
    server.use('/empresa', empresa)
    server.use('/usuario', usuario)
}

module.exports = routes