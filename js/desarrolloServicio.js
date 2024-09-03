const parametroId = new URLSearchParams(window.location.search).get("id");

const listaServicios =
  JSON.parse(localStorage.getItem("listaServiciosKey")) || [];

const servicioBuscado = listaServicios.find(
  (servicio) => servicio.id === parametroId
);

const seccionDeInformacion = document.querySelector("#padre");

seccionDeInformacion.innerHTML = ` 
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 mt-lg-4">
      <img
        src="${servicioBuscado.imagenServicio}"
        class="img-fluid sombra-violeta"
        alt="Imagen de ${servicioBuscado.nombreServicio}"
      />
    </div>
    <div class="col-md-6">
      <div class="service-card-body">
        <h2 class="service-title resaltado p-2 mb-4 mt-4">
          ${servicioBuscado.nombreServicio}
        </h2>
        <div class="highlight">
          <p>
            <mark class="text-decoration-underline">Precio:</mark>
            ${servicioBuscado.precioServicio}
          </p>
          <p>
            <mark class="text-decoration-underline">Tiempo de entrega:</mark>
            ${servicioBuscado.tiempoServicio}
          </p>
        </div>
        <p>
          <mark class="text-decoration-underline">Descripción:</mark>
          ${servicioBuscado.descripcionServicio}
        </p>
        <button class="btn btn-light botones-servicios mb-3">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </div>` 

  /////////////////////////////////////////////////////

  const claveResena = 'resenaUsuario';

  function cargarResenas() {
    const resena = JSON.parse(localStorage.getItem(claveResena)) || null;
    const resenasDiv = document.querySelector('#resenas');
    resenasDiv.innerHTML = '';
  
    if (resena) {
        const resenaDiv = document.createElement('div');
        resenaDiv.classList.add('resena');
        resenaDiv.innerHTML = `
        <div class="caja-de-reseñas p-5">
            <h5>${resena.nombre}</h5>
            <p> <hr> ${resena.texto}</p>
          
            <button class="btn btn-danger btn-eliminar">Eliminar</button>
        </div>
        `;
        resenasDiv.appendChild(resenaDiv);
  
       
        document.querySelector('.btn-eliminar').addEventListener('click', eliminarResena);
    }
  }
  
  function agregarResena(event) {
    event.preventDefault();
    const nombre = document.querySelector('#nombreResena').value;
    const texto = document.querySelector('#textoResena').value;
    const resenaExistente = JSON.parse(localStorage.getItem(claveResena));
  
    if (resenaExistente) {
      
      Swal.fire({
        title: '¡Comentario ya enviado!',
        text: 'Ya has hecho un comentario. No puedes enviar otro.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    } else {
     
      localStorage.setItem(claveResena, JSON.stringify({ nombre, texto }));
      document.querySelector('#formResena').reset();
      cargarResenas();
    }
  }
  
  function eliminarResena(event) {
    localStorage.removeItem(claveResena); 
    cargarResenas();
  }
  
  
  document.querySelector('#formResena').addEventListener('submit', agregarResena);
  
  document.addEventListener('DOMContentLoaded', cargarResenas);
  