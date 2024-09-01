const parametroId = new URLSearchParams(window.location.search).get("id");

const listaServicios =
  JSON.parse(localStorage.getItem("listaServiciosKey")) || [];

const servicioBuscado = listaServicios.find(
  (servicio) => servicio.id === parametroId
);

console.log(servicioBuscado);

const seccionDeInformacion = document.querySelector("#padre");

seccionDeInformacion.innerHTML = ` 
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <img
        src="${servicioBuscado.imagenServicio}"
        class="img-fluid sombra-violeta"
        alt="Imagen de ${servicioBuscado.nombreServicio}"
      />
    </div>
    <div class="col-md-6">
      <div class="service-card-body">
        <h2 class="service-title resaltado p-2 mb-4">
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
        <button class="btn btn-secondary botones-servicios mb-3">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </div>` 

  /////////////////////////////////////////////////////




  // Obtener el parámetro de ID de la URL

// Función para cargar reseñas desde localStorage
function cargarResenas() {
  const resenas = JSON.parse(localStorage.getItem('resenasKey')) || {};
  const resenasServicio = resenas[parametroId] || [];
  const resenasDiv = document.querySelector('#resenas');
  resenasDiv.innerHTML = '';
  resenasServicio.forEach((resena, index) => {
      const resenaDiv = document.createElement('div');
      resenaDiv.classList.add('resena');
      resenaDiv.innerHTML = `
          <h5>${resena.nombre}</h5>
          <p>${resena.texto}</p>
          <button class="btn btn-primary btn-editar" data-index="${index}">Editar</button>
          <button class="btn btn-danger btn-eliminar" data-index="${index}">Eliminar</button>
      `;
      resenasDiv.appendChild(resenaDiv);
  });

  // Añadir listeners para los botones de edición y eliminación
  document.querySelectorAll('.btn-editar').forEach(button => {
      button.addEventListener('click', editarResena);
  });

  document.querySelectorAll('.btn-eliminar').forEach(button => {
      button.addEventListener('click', eliminarResena);
  });
}

// Función para agregar o actualizar una reseña
function agregarResena(event) {
  event.preventDefault();
  const nombre = document.querySelector('#nombreResena').value;
  const texto = document.querySelector('#textoResena').value;
  const resenas = JSON.parse(localStorage.getItem('resenasKey')) || {};
  const index = document.querySelector('#formResena').getAttribute('data-index');

  if (index !== null) {
      // Actualizar la reseña existente
      resenas[parametroId][index] = { nombre, texto };
      document.querySelector('#formResena').removeAttribute('data-index');
      document.querySelector('#formResena button[type="submit"]').textContent = 'Agregar Reseña';
  } else {
      // Agregar una nueva reseña
      if (!resenas[parametroId]) {
          resenas[parametroId] = [];
      }
      resenas[parametroId].push({ nombre, texto });
  }

  localStorage.setItem('resenasKey', JSON.stringify(resenas));
  document.querySelector('#formResena').reset();
  cargarResenas();
}

// Función para eliminar una reseña
function eliminarResena(event) {
  const index = event.target.getAttribute('data-index');
  const resenas = JSON.parse(localStorage.getItem('resenasKey')) || {};
  if (resenas[parametroId]) {
      resenas[parametroId].splice(index, 1);
      localStorage.setItem('resenasKey', JSON.stringify(resenas));
      cargarResenas();
  }
}

// Función para editar una reseña
function editarResena(event) {
  const index = event.target.getAttribute('data-index');
  const resenas = JSON.parse(localStorage.getItem('resenasKey')) || {};
  const resena = resenas[parametroId][index];
  if (resena) {
      document.querySelector('#nombreResena').value = resena.nombre;
      document.querySelector('#textoResena').value = resena.texto;

      // Cambia el texto del botón para indicar la edición
      const submitButton = document.querySelector('#formResena button[type="submit"]');
      submitButton.textContent = 'Actualizar Reseña';

      // Guardar el índice para actualizar después
      document.querySelector('#formResena').setAttribute('data-index', index);
  }
}

// Event listener para el formulario de reseñas
document.querySelector('#formResena').addEventListener('submit', agregarResena);

// Cargar reseñas al cargar la página
document.addEventListener('DOMContentLoaded', cargarResenas);