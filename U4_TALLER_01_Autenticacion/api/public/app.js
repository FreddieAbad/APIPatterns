


window.addEventListener('load', function () {
    fetch('http://localhost:4001/empresa')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('empresa');
            data["body"].forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa._id;
                option.textContent =  empresa.nombre + " || RUC: " + empresa.ruc;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API REST:', error);
        });



    fetch('http://localhost:4001/replegal')
        .then(response => response.json())
        .then(data => {
            const repLegalTable = document.getElementById('repLegalTable');
            repLegalTable.innerHTML = '';
            data["body"].forEach(repLegal => {
                const newRow = repLegalTable.insertRow();
                const cells = Array.from({ length: 3 }, () => newRow.insertCell());

                const representanteDetalleText = repLegal.representante_detalle.map(obj => {
                    return `<br><b>Empresa:</b> ${obj._id}`;
                  }).join('\n');
                  

                cells[0].innerHTML = "<br><b>Identificador:</b> " + repLegal._id;


                cells[1].innerHTML = "<br><b>RUC:</b> " + repLegal.rucrep +
                    "<br><b>Cedula:</b> " + repLegal.cedula +
                    "<br><b>Nombre:</b> " + repLegal.nombre +
                    "<br><b>Apellido:</b> " + repLegal.apellido +
                    "<br><b>Email:</b> " + repLegal.email +
                    "<br><b>Domicilio:</b> " + repLegal.domicilio +
                    "<br><b>Telefono:</b> " + repLegal.telefono;
                cells[2].innerHTML = representanteDetalleText;
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API REST:', error);
        });

});




function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 900000000 + 100000000).toString();
}
function nombreAlAzar() {
    const nombres = [
        "Luis",
        "Ana",
        "Juan",
        "María",
        "Carlos",
        "Laura",
        "Pedro",
        "Isabel",
        "José",
        "Sofía",
        "Andrés",
        "Lucía",
        "Javier",
        "Valentina",
        "Miguel",
        "Camila",
        "Ricardo",
        "Lorena",
        "Fernando",
        "Elena",
        "Gabriel",
        "Carmen",
        "David",
        "Julia",
        "Manuel",
        "Beatriz",
        "Raúl",
        "Natalia",
        "Alejandro",
        "Patricia",
        "Daniel",
        "Rosa",
        "Alberto",
        "Luisa",
        "Víctor",
        "Susana",
        "Óscar",
        "Martha",
        "Roberto",
        "Teresa",
        "Pablo",
        "Claudia",
        "Héctor",
        "Liliana",
        "Diego",
        "Adriana",
        "Fabián",
        "Paula"
    ];

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    return nombres[indiceAleatorio];
}
function apellidoAlAzar() {
    const apellidos = [
        "González",
        "Rodríguez",
        "López",
        "Martínez",
        "Pérez",
        "García",
        "Fernández",
        "Sánchez",
        "Ramírez",
        "Torres",
        "Flores",
        "Vásquez",
        "Díaz",
        "Jiménez",
        "Morales",
        "Romero",
        "Hernández",
        "Silva",
        "Muñoz",
        "Ortiz",
        "Castro",
        "Ruiz",
        "Núñez",
        "Vargas",
        "Mendoza",
        "Guerrero",
        "Rojas",
        "Soto",
        "Luna",
        "Ortega",
        "Cabrera",
        "Navarro",
        "Solís",
        "Zamora",
        "Sosa",
        "Espinoza",
        "Villanueva",
        "Aguilar",
        "Giménez",
        "Paredes",
        "Arias",
        "Campos",
        "Cortez",
        "Figueroa",
        "Estrada",
        "Reyes",
        "Vega",
        "Valenzuela",
        "Salazar"
    ];

    const indiceAleatorio = Math.floor(Math.random() * apellidos.length);
    return apellidos[indiceAleatorio];
}
function emailAlAzar(nombre, apellido) {
    const dominios = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "example.com"];
    const nombreSinEspacios = nombre.toLowerCase().replace(/\s/g, "");
    const apellidoSinEspacios = apellido.toLowerCase().replace(/\s/g, "");
    const dominioAleatorio = dominios[Math.floor(Math.random() * dominios.length)];
    const numeroAleatorio = Math.floor(Math.random() * 1000);

    const email = `${nombreSinEspacios}.${apellidoSinEspacios}${numeroAleatorio}@${dominioAleatorio}`;
    return email;
}

function direccionDomicilioEcuador() {
    const ciudades = ["Quito", "Guayaquil", "Cuenca", "Manta", "Ambato", "Loja", "Esmeraldas", "Santo Domingo", "Portoviejo", "Ibarra"];
    const barrios = ["Centro", "La Floresta", "Kennedy", "San Blas", "Los Alamos", "El Bosque", "La Mariscal", "Las Orquídeas", "La Carolina", "San Isidro"];
    const calles = ["Avenida Principal", "Calle Secundaria", "Calle de Ejemplo", "Avenida Principal Norte", "Avenida de los Pájaros", "Calle del Sol", "Avenida del Río"];
    
    const ciudadAleatoria = ciudades[Math.floor(Math.random() * ciudades.length)];
    const barrioAleatorio = barrios[Math.floor(Math.random() * barrios.length)];
    const calleAleatoria = calles[Math.floor(Math.random() * calles.length)];
    const numeroAleatorio = Math.floor(Math.random() * 100);
  
    const direccion = `${numeroAleatorio} ${calleAleatoria}, ${barrioAleatorio}, ${ciudadAleatoria}, Ecuador`;
    return direccion;
  }

function generarValorAlfanumerico() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < 8; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}
function generarValores() {
    const nombreAleatorio = nombreAlAzar();
    const apellidoAleatorio = apellidoAlAzar();

    document.getElementById('ruc').value = generarNumeroAleatorio();
    document.getElementById('cedula').value = generarNumeroAleatorio();
    document.getElementById('nombre').value = nombreAleatorio;
    document.getElementById('apellido').value = apellidoAleatorio;
    document.getElementById('email').value = emailAlAzar(nombreAleatorio, apellidoAleatorio);
    document.getElementById('telefono').value = generarNumeroAleatorio();
    document.getElementById('domicilio').value = direccionDomicilioEcuador() ;
}
function encerarValores() {
    document.getElementById('ruc').value = "";
    document.getElementById('cedula').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('domicilio').value = "";
    const empresaTable = document.getElementById('empresaTable');

    while (empresaTable.rows.length > 0) {
        empresaTable.deleteRow(0);
    }

}
function mostrarAlertaRL(titulo, mensaje, tipo) {
    const alertaHTML = `
        <div class="alert ${tipo} alert-dismissible fade show" role="alert">
            <strong>${titulo}</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertContainer.innerHTML = alertaHTML;
}

function notifyServer(titulo, mensaje, tipo) {
    const alertaHTML = `
        <div class="alert ${tipo} alert-dismissible fade show" role="alert">
            <strong>${titulo}</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    noti.innerHTML = alertaHTML;
}
var socket = io.connect('http://localhost:4001', {
    forceNet: true
});

function notiAlerta() {
    socket.emit('agregar', { mensaje: 'Mensaje de prueba' });

    socket.on('respuesta', function (data) {
        mostrarAlertaRL('Inserción Correcta', 'Guardado en Base', 'alert-success');
        notifyServer('Mensaje Servidor:', data.mensaje, 'alert-warning');
        console.log('Respuesta del servidor:', data.mensaje);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.getElementById('enviarBtn');
    const empresaTable = document.getElementById('empresaTable');
    const filas = empresaTable.getElementsByTagName('tr');
    const agregarEmpresaBtn = document.getElementById('agregarEmpresaBtn');

    enviarBtn.addEventListener('click', function () {
        const valoresCeldas = [];

        for (let i = 0; i < filas.length; i++) {
            const fila = filas[i];
            const celdas = fila.getElementsByTagName('td');
            console.log('Fila ' + i + ': ' + celdas[0].textContent.toString());
            valoresCeldas.push({ "empresa_detalle": celdas[0].textContent.toString() });
        }

        const ruc = document.getElementById('ruc').value;
        const cedula = document.getElementById('cedula').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const domicilio = document.getElementById('domicilio').value;

        if (ruc === '' || cedula === '' || nombre === '' || apellido === '' || email === '' || telefono === '' || domicilio === '') {
            mostrarAlertaRL('Campos Vacíos', 'Por favor, complete todos los campos antes de enviar.', 'alert-warning');
        } else if (filas.length == 0) {
            mostrarAlertaRL('Campos Vacíos', 'Por favor, agregar al menos una empresa.', 'alert-warning');
        }
        else {
            const formData = {
                rucrep: ruc,
                cedula: cedula,
                nombre: nombre,
                apellido: apellido,
                email: email,
                domicilio: domicilio,
                telefono: telefono,
                representante_detalle: valoresCeldas
            };

            fetch('http://localhost:4001/replegal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) {
                        encerarValores();
                        notiAlerta();
                        return response.json();

                    } else {
                        mostrarAlertaRL('Error de Inserción', 'Hubo errores al realizar la inserción.', 'alert-danger');
                        throw new Error('Error en la solicitud POST');
                    }
                })
                .then(data => {
                    console.log('Respuesta de la API:', data);
                })
                .catch(error => {
                    console.error('Error al enviar la solicitud POST:', error);
                    mostrarAlertaRL('Error de Inserción', 'Hubo errores al realizar la inserción.', 'alert-danger');
                });
        }
    });

    agregarEmpresaBtn.addEventListener('click', function () {
        event.preventDefault();

        const combobox = document.getElementById("empresa");
        const selectedOption = combobox.options[combobox.selectedIndex];
        const selectedText = selectedOption.text;

        const nuevaEmpresa = {
            id: document.getElementById('empresa').value,
            nombre: `${selectedText}`
        };
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td style="padding-left: 20px;">${nuevaEmpresa.id}</td>
            <td>${nuevaEmpresa.nombre}</td>
        `;
        empresaTable.appendChild(newRow);
    });


});