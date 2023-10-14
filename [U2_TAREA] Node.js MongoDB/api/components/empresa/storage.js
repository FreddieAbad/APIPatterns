const model = require('./model')

// function get_empresa( filtroempresa ) {
//     return new Promise((resolve, reject) => {
//         let filtro = {}
//         if (filtroempresa) {
//             filtro = { nombre: filtroempresa }
//         }
//         model.find( filtro )
//             .populate('empresa')
//             .exec( (error, data) => {
//                 lista = []
//                 for (elemento of data) {
//                     lista.push( {id:elemento._id, empresa:elemento.nombre, empresa:elemento.empresa.nombre} )
//                 }
//                 if (error)
//                     reject(error)
//                 else 
//                     resolve(lista)
//             })
//     })
// }
// function get_empresa(filtroempresa) {
//     return new Promise((resolve, reject) => {
//         let filtro = {};
//         if (filtroempresa) {
//             filtro = { nombre: filtroempresa };
//         }

//         model.find(filtro)
//             .populate('empresa')
//             .exec()
//             .then(data => {
//                 const lista = data.map(elemento => ({
//                     id: elemento._id,
//                     empresa: elemento.nombre,
//                     empresaNombre: elemento.empresa.nombre,
//                 }));
//                 resolve(lista);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }

// function get_empresa(filtroempresa) {
//     return new Promise((resolve, reject) => {
//         let filtro = {};
//         if (filtroempresa) {
//             filtro = { nombre: filtroempresa };
//         }
//         model.find(filtro)
//             .populate('replegal')
//             .exec()
//             .then(data => {
//                 const lista = data.map(elemento => ({
//                     id: elemento._id,
//                     empresa: elemento.nombre,
//                     replegal: elemento.replegal,
//                 }));
//                 resolve(lista);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }

function get_empresa( filtroempresa ) {
    let filtro = {}
    if (filtroempresa) {
        filtro = { cedula: filtroempresa }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_empresa( empresa ) {
    const objeto = new model( empresa )
    objeto.save()
}

async function update_empresa( empresa ) {
    const objeto = await model.findOne( {_id: empresa.id} )

    if ( objeto ) {
        objeto.nombre = empresa.nombre
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_empresa( empresa ) {
    return await model.deleteOne({_id: empresa.id})
}

module.exports = {
    add: add_empresa,
    get: get_empresa,
    update: update_empresa,
    delete: delete_empresa,
}