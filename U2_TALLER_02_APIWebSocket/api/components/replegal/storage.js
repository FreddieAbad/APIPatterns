const model = require('./model')

function get_replegal( filtro_replegal ) {
    let filtro = {}
    if (filtro_replegal) {
        filtro = { nombre: filtro_replegal }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_replegal( replegal ) {
    const objeto = new model( replegal )
    objeto.save()
}

async function update_replegal( replegal ) {
    const objeto = await model.findOne( {_id: replegal.id} )

    if ( objeto ) {
        objeto.nombre = replegal.nombre
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_replegal( replegal ) {
    return await model.deleteOne({_id: replegal.id})
}

module.exports = {
    add: add_replegal,
    get: get_replegal,
    update: update_replegal,
    delete: delete_replegal,
}