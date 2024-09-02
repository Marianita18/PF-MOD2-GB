document.addEventListener('DOMContentLoaded', () => {
    const barraBusqueda = document.getElementById('barraBusqueda');
    const resultadosBusqueda = document.getElementById('resultadosBusqueda');
    const listaServicios = JSON.parse(localStorage.getItem('listaServiciosKey')) || [];
  
    const mostrarResultados = (terminoBusqueda) => {
        resultadosBusqueda.innerHTML = ''; 

        const resultados = listaServicios.filter(servicio =>
            servicio.nombreServicio.toLowerCase().includes(terminoBusqueda.toLowerCase())
        );

        if (resultados.length > 0) {
            resultadosBusqueda.style.display = 'block'; // Mostrar contenedor de resultados
            resultados.forEach(servicio => {
                const divResultado = document.createElement('div');
                divResultado.className = 'item-result';
                divResultado.textContent = servicio.nombreServicio;
                divResultado.addEventListener('click', () => {
                    window.location.href = `/pages/detalleServicio.html?id=${servicio.id}`;
                });
                resultadosBusqueda.appendChild(divResultado);
            });
        } else {
            resultadosBusqueda.style.display = 'block'; 
            resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
        }
    };

    barraBusqueda.addEventListener('input', (e) => {
        const terminoBusqueda = e.target.value;
        if (terminoBusqueda.length === 0) {
            resultadosBusqueda.style.display = 'none'; 
            return;
        }
        mostrarResultados(terminoBusqueda);
    });

    document.addEventListener('click', (e) => {
        if (!document.querySelector('.contenedor-busqueda').contains(e.target)) {
            resultadosBusqueda.style.display = 'none';
        }
    });
});
