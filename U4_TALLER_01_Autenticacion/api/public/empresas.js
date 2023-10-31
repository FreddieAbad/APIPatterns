function generarValoresEmpresa() {
    const nombreAleatorio = nombreAlAzarEmpresa();
    document.getElementById('rucEmpresa').value = generarNumeroAleatorio();
    document.getElementById('nombreEmpresa').value = nombreAleatorio;
    document.getElementById('telefonoEmpresa').value = generarNumeroAleatorio();
    document.getElementById('domicilioEmpresa').value = direccionDomicilioEcuador();
}

window.addEventListener('load', function () {
    fetch('http://localhost:4001/empresa')
        .then(response => response.json())
        .then(data => {
            const empresaListaTable = document.getElementById('empresaListaTable');
            empresaListaTable.innerHTML = '';
            data["body"].forEach(empresaLista => {
                const newRow = empresaListaTable.insertRow();
                const cells = Array.from({ length: 2 }, () => newRow.insertCell());

                cells[0].innerHTML = "<br><b>Identificador:</b> " + empresaLista._id;
                cells[1].innerHTML = "<br><b>RUC:</b> " + empresaLista.ruc +
                    "<br><b>Nombre:</b> " + empresaLista.nombre +
                    "<br><b>Domicilio:</b> " + empresaLista.domicilio +
                    "<br><b>Telefono:</b> " + empresaLista.telefono;
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API REST:', error);
        });

});

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 900000000 + 100000000).toString();
}
function nombreAlAzarEmpresa() {
    const nombres = [
        "Constructora Andina",
        "EcoPetroquímica",
        "ServiBanc",
        "Feria Exportadora SA",
        "Comestibles Delicias",
        "Tecnosoluciones Cía. Ltda.",
        "Inversiones Ecuatorianas",
        "AgroNaturaleza",
        "MegaTecnoGroup",
        "Industrias del Sur",
        "BioVerde S.A.",
        "Comercializadora Nacional",
        "EcoProcesos Ambientales",
        "ServiEnergía",
        "TechnoCorp C.A.",
        "Alimentos del Ecuador",
        "EcoFibra S.A.",
        "Inversiones Modernas",
        "AgroComercio",
        "Ingeniería Ecológica Ltda.",
        "AgroAgua C.A.",
        "Ferias Internacionales",
        "EcoInnovaciones S.A.",
        "ServiLogística",
        "Soluciones Industriales",
        "Comercio y Exportación",
        "BioEcoProductos",
        "Inversiones Rurales",
        "Tecnología Verde C.A.",
        "AgroDistribuidora",
        "BioAgro SA",
        "Industrias Verdes",
        "Nacional de Tecnología",
        "AgroSostenibilidad",
        "EcoEmpaques C.A.",
        "Inversiones Ecológicas",
        "Tecnologías del Sur",
        "Soluciones Agroindustriales",
        "AgroEco C.A.",
        "Inversiones Modernas",
        "Tecnoservicios Ambientales",
        "BioFuturo SA",
        "Comercializadora Agropecuaria",
        "EcoSoluciones C.A.",
        "Ferias del Ecuador",
        "ServiIndustrias",
        "Tecnología Verde S.A.",
        "AgroInnovadora C.A.",
        "BioIndustrias",
        "ServiAgropecuaria"
    ];

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    return nombres[indiceAleatorio];
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

function encerarValoresEmpresa() {
    document.getElementById('rucEmpresa').value = "";
    document.getElementById('nombreEmpresa').value = "";
    document.getElementById('telefonoEmpresa').value = "";
    document.getElementById('domicilioEmpresa').value = "";
}
function mostrarAlerta(titulo, mensaje, tipo) {
    const alertaHTML = `
        <div class="alert ${tipo} alert-dismissible fade show" role="alert">
            <strong>${titulo}</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertContainerEmpresa.innerHTML = alertaHTML;
}


document.addEventListener('DOMContentLoaded', function () {
    const enviarBtnEmpresa = document.getElementById('enviarBtnEmpresa');
    enviarBtnEmpresa.addEventListener('click', function () {
        const ruc = document.getElementById('rucEmpresa').value;
        const nombre = document.getElementById('nombreEmpresa').value;
        const telefono = document.getElementById('telefonoEmpresa').value;
        const domicilio = document.getElementById('domicilioEmpresa').value;

        if (ruc === '' || nombre === ''  || telefono === '' || domicilio === '') {
            mostrarAlerta('Campos Vacíos', 'Por favor, complete todos los campos antes de enviar.', 'alert-warning');
        }
        else {
            const formData = {
                ruc: ruc,
                nombre: nombre,
                domicilio: domicilio,
                telefono: telefono,
            };

            fetch('http://localhost:4001/empresa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) {
                        encerarValoresEmpresa();
                        mostrarAlerta('Empresa guardada', 'Insercion correcta.', 'alert-success');
                        return response.json();

                    } else {
                        mostrarAlerta('Error de Inserción', 'Hubo errores al realizar la inserción.', 'alert-danger');
                        throw new Error('Error en la solicitud POST');
                    }
                })
                .then(data => {
                    console.log('Respuesta de la API:', data);
                })
                .catch(error => {
                    console.error('Error al enviar la solicitud POST:', error);
                    mostrarAlerta('Error de Inserción', 'Hubo errores al realizar la inserción.', 'alert-danger');
                });
        }
    });
});