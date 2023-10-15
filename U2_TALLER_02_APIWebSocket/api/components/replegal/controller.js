const storage = require('./storage')

function get_replegal( filtro_replegal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_replegal ) )
    })
}

function add_replegal( replegal ) {
    return new Promise((resolve, reject) => {
        if (!replegal.rucrep) {
            return reject('No existen datos.')
        }
        storage.add( replegal )
        resolve( replegal )        
    })
}

function update_replegal( replegal ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( replegal )
        if (resultado) {
            return resolve( replegal )
        } else {
            return reject('No existe el replegal.')
        }
    })
}

function delete_replegal( replegal ) {
    return new Promise((resolve, reject) => {
        storage.delete( replegal )
        resolve( replegal )
    })
}

module.exports = {
    get_replegal,
    add_replegal,
    update_replegal,
    delete_replegal,
}