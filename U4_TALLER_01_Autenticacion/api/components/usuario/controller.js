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
            return reject({ status: 400, message: 'Nombre de usuario y contraseña son requeridos.' });
        }

        try {
            var nombre = username.toString();
            console.log("## " + nombre + "- " + username.toString());
            const usuario = await storage.find(nombre);
            if (!usuario) {
                return reject({ status: 404, message: 'Usuario no encontrado.' });
            }
            const passwordMatch = await comparePassword(password, usuario.password);
            if (!passwordMatch) {
                return reject({ status: 405, message: 'Contraseña incorrecta.' });
            }
            if (usuario.rol != "admin") {
                return reject({ status: 406, message: 'Credenciales correctas, rol usuario.' });
            }
            resolve({ status: 200, message: 'Inicio de sesión exitoso' });
        } catch (error) {
            reject({ status: 401, message: 'Error en la autenticación: ' + error });

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