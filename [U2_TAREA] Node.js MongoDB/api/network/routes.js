const representantelegal = require('../components/representantelegal/interface')
const empresa = require('../components/empresa/interface')

const routes = function(server) {
    server.use('/representantelegal', representantelegal)
    server.use('/empresa', empresa)
}

module.exports = routes