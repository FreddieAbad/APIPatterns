const storage = require('./storage')

function get_usuario( filtro_usuario ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_usuario ) )
    })
}

function add_usuario( usuario ) {
    return new Promise((resolve, reject) => {
        if (!usuario.nombre) {
            return reject('No existen datos.')
        }
        storage.add( usuario )
        resolve( usuario )        
    })
}



module.exports = {
    get_usuario,
    add_usuario
}