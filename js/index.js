window.addEventListener('storage', (event) => {
    console.log('Storage event detected:', event); 
    if (event.key === 'listaServiciosKey') {
        cargarServicios();
    }
});

function verServicio(id) {
  // Redirige a la página de detalles con el parámetro id en la URL
  window.location.href = `/pages/detalleServicio.html?id=${id}`;}

function cargarServicios() {
    const listaServicios = JSON.parse(localStorage.getItem('listaServiciosKey')) || [];
    const tabla = document.querySelector('#padre1');
    
  

    tabla.innerHTML = ''; 

    listaServicios.forEach(servicio => {
        const fila = document.createElement('div');
        fila.classList.add('card', 'mb-3', 'sombra-violeta', 'my-5');

        fila.innerHTML = `
          <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
              <img
                src="${servicio.imagenServicio}" 
                class="img-fluid imagenes-de-servicios"
                alt="${servicio.nombreServicio}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body me-3">
                <h5 class="card-title color-de-titulo-servicios">
                  ${servicio.nombreServicio}
                </h5>
                <p class="card-text">
                  <mark>Categoría: </mark> ${servicio.tipoServicio}<br />
                  <br />
                  ${servicio.descripcionServicio}.<br />
                  <mark> Precio: </mark> ${servicio.precioServicio}<br />
                   <mark>Tiempo de entrega: </mark> ${servicio.tiempoServicio}
                </p>
                <button class="btn btn-secondary botones-generales btn botones-servicios " onclick="verServicio('${servicio.id}')">Ver más...</button>
              </div>
            </div>
          </div>
        `;
        tabla.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', cargarServicios);