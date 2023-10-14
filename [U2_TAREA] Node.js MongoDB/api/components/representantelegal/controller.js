const storage = require('./storage')

function get_representantelegal( filtrorepresentantelegal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtrorepresentantelegal ) )
    })
}

function add_representantelegal( representantelegal ) {
    return new Promise((resolve, reject) => {
        if (!representantelegal.ruc || !representantelegal.cedula || !representantelegal.nombre || !representantelegal.apellido || !representantelegal.email|| !representantelegal.domicilio|| !representantelegal.telefono) {
            return reject('No hay datos suficientes.')
        }
        storage.add( representantelegal )
        resolve( representantelegal )        
    })
}

function update_representantelegal( representantelegal ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( representantelegal )
        if (resultado) {
            return resolve( representantelegal )
        } else {
            return reject('No existe el representantelegal.')
        }
    })
}

function delete_representantelegal( ruc ) {
    return new Promise((resolve, reject) => {
        storage.delete( ruc )
        resolve( ruc )
    })
}

module.exports = {
    get_representantelegal,
    add_representantelegal,
    update_representantelegal,
    delete_representantelegal,
}