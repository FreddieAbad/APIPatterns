const model = require('./model')

function get_representantelegal( filtrorepresentantelegal ) {
    let filtro = {}
    if (filtrorepresentantelegal) {
        filtro = { cedula: filtrorepresentantelegal }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_representantelegal( representantelegal ) {
    const objeto = new model( representantelegal )
    objeto.save()
}

async function update_representantelegal( representantelegal ) {
    const objeto = await model.findOne( {cedula: representantelegal.cedula} )

    if ( objeto ) {
        objeto.ruc = representantelegal.ruc
        objeto.nombre = representantelegal.nombre
        objeto.apellido = representantelegal.apellido
        objeto.email = representantelegal.email
        objeto.domicilio = representantelegal.domicilio
        objeto.telefono = representantelegal.telefono

        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_representantelegal( cedula ) {
    return await model.deleteOne({cedula: cedula})
}

module.exports = {
    add: add_representantelegal,
    get: get_representantelegal,
    update: update_representantelegal,
    delete: delete_representantelegal,
}