const replegal = require('../components/replegal/interface')
const empresa = require('../components/empresa/interface')

const routes = function(server) {
    server.use('/replegal', replegal)
    server.use('/empresa', empresa)
}

module.exports = routes