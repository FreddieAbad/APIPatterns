const storage = require('./storage')

function get_usuario(filtro_usuario) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filtro_usuario))
    })
}

function add_usuario(usuario) {
    return new Promise((resolve, reject) => {
        if (!usuario.nombre) {
            return reject('No existen datos.')
        }
        storage.add(usuario)
        resolve(usuario)
    })
}

async function login(username, password) {
    return new Promise(async (resolve, reject) => {
        if (!username || !password) {
            return reject('Nombre de usuario y contraseña son requeridos.');
        }

        try {
            var nombre = username.toString();
            console.log("## " + nombre + "- " + username.toString());
            const usuario = await storage.find(nombre);
            if (!usuario) {
                return reject('Usuario no encontrado.');
            }
            const passwordMatch = await comparePassword(password, usuario.password);
            if (!passwordMatch) {
                return reject('Contraseña incorrecta.');
            }
            resolve('Inicio de sesión exitoso');
        } catch (error) {
            reject('Error en la autenticación: ' + error);
        }
    });
}


function comparePassword(texto1, texto2) {
    return new Promise((resolve, reject) => {
        if (texto1 === texto2) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}


module.exports = {
    get_usuario,
    add_usuario,
    login
}