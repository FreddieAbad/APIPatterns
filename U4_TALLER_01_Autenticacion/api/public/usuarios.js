function nombreAlAzar() {
    const nombres = [
        "Luis",
        "Ana",
        "Juan",
        "Maria",
        "Carlos",
        "Laura",
        "Pedro",
        "Isabel",
        "Jose",
        "Sofia",
        "Andres",
        "Lucia",
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
        "Raul",
        "Natalia",
        "Alejandro",
        "Patricia",
        "Daniel",
        "Rosa",
        "Alberto",
        "Luisa",
        "Victor",
        "Susana",
        "Oscar",
        "Martha",
        "Roberto",
        "Teresa",
        "Pablo",
        "Claudia",
        "Hector",
        "Liliana",
        "Diego",
        "Adriana",
        "Fabian",
        "Paula"
    ];

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    return nombres[indiceAleatorio];
}
function apellidoAlAzar() {
    const apellidos = [
        "Gonzalez",
        "Rodriguez",
        "Lopez",
        "Martinez",
        "Perez",
        "Garcia",
        "Fernandez",
        "Sanchez",
        "Ramirez",
        "Torres",
        "Flores",
        "Vasquez",
        "Diaz",
        "Jimenez",
        "Morales",
        "Romero",
        "Hernandez",
        "Silva",
        "Munoz",
        "Ortiz",
        "Castro",
        "Ruiz",
        "Nunez",
        "Vargas",
        "Mendoza",
        "Guerrero",
        "Rojas",
        "Soto",
        "Luna",
        "Ortega",
        "Cabrera",
        "Navarro",
        "Solis",
        "Zamora",
        "Sosa",
        "Espinoza",
        "Villanueva",
        "Aguilar",
        "Gimenez",
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

function generarValoresUsuario() {
    nombre = nombreAlAzar();
    apellido = apellidoAlAzar();
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    const usuario = emailAlAzar(nombre, apellido);
    document.getElementById('email').value = usuario;
    const user = usuario.split("@");
    document.getElementById('username').value = user[0];
    document.getElementById('password').value = user[0];

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
function encerarValores() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";

}

function registrarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const selectElement = document.getElementById("rol");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const rol = selectedOption.value;

    if (nombre === '' || apellido === '' || email === '' || rol === '' || username === '' || password === '') {
        mostrarAlertaRL('Campos Vacíos', 'Por favor, complete todos los campos antes de enviar.', 'alert-warning');
    }
    else {
        const formData = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            rol: rol,
            username: username,
            password: password
        };

        fetch('http://localhost:4001/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    encerarValores();
                    // notiAlerta();
                    mostrarAlertaRL('Inserción Correcta', 'Guardado en Base', 'alert-success');
                    // Redirigir a otra página HTML
                    setTimeout(function() {                    
                        window.location.href = "http://localhost:4001/login.html";
                    }, 5000);
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

}