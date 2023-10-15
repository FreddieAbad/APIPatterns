// app.js

// Función para obtener y llenar la lista de empresas desde la API
function fillEmpresaSelect() {
    fetch('URL_DE_TU_API_EMPRESAS')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('empresa');
            data.forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa.id; // Asigna un valor adecuado
                option.textContent = empresa.nombre; // Ajusta la propiedad adecuada para el nombre de la empresa
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener la lista de empresas:', error);
        });
}

// Llama a la función para llenar el campo de selección cuando se cargue la página
fillEmpresaSelect();
