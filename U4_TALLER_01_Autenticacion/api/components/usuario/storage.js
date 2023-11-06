const model = require('./model')

function get_usuario(filtro_usuario) {
    let filtro = {}
    if (filtro_usuario) {
        filtro = { nombre: filtro_usuario }
    }
    const objeto = model.find(filtro)
    return objeto
}

function add_usuario(usuario) {
    const objeto = new model(usuario)
    objeto.save()
}
function findUserByUsername(username) {
    console.log("3- "+username);
    return model.findByUsername({ username });
}

module.exports = {
    add: add_usuario,
    get: get_usuario,
    find: findUserByUsername
}