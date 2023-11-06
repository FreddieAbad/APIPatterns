function loginUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        mostrarAlertaRL('Campos Vacíos', 'Por favor, complete todos los campos antes de enviar.', 'alert-warning');
    }
    else {
        const formData = {
            username: username,
            password: password
        };

        fetch('http://localhost:4001/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    // encerarValores();
                    mostrarAlertaRL('Login Correcto', 'Validacion exitosa', 'alert-success');
                    setTimeout(function() {                    
                        window.location.href = "http://localhost:4001/index.html";
                    }, 4000);
                    return response.json();

                } if (response.status == 401) {
                    mostrarAlertaRL('Datos incorrectos', 'Validar datos ingresados', 'alert-warning');
                    return response.json();
                } else {
                    mostrarAlertaRL('Error de Login', 'Valide los valores ingresados.', 'alert-danger');
                    throw new Error('Error en la solicitud POST');
                }
            })
            .then(data => {
                console.log('Respuesta de la API:', data);
            })
            .catch(error => {
                console.error('Error al enviar la solicitud POST:', error);
                mostrarAlertaRL('Error de Validacion', 'Hubo errores al realizar la Validacion.', 'alert-danger');
            });
    }
}

function mostrarAlertaRL(titulo, mensaje, tipo) {
    const alertaHTML = `
        <div class="alert ${tipo} alert-dismissible fade show" role="alert">
            <strong>${titulo}</strong> ${mensaje}
        </div>
    `;
    alertContainer2.innerHTML = alertaHTML;
}