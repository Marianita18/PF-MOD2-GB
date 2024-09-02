//extraer el parametro de la url
const parametroId = new URLSearchParams(window.location.search).get("id");

//buscar el id en el localstorage
const listaUsuarios =
  JSON.parse(localStorage.getItem("listaUsuariosKey")) || [];

const buscarUsuario = listaUsuarios.find(
  (usuario) => usuario.id === parametroId
);

const cardUsuario = document.querySelector("#cardUsuario");
cardUsuario.innerHTML = ` 
              <div class="card-body">
                <h5 class="card-title mt-1">${buscarUsuario.apellido}, ${buscarUsuario.nombre}</h5>
                <p class="card-text">${buscarUsuario.tipo}</p>
              </div>`;

const contenedorFormUsuario = document.querySelector("#contenedorFormUsuario");
contenedorFormUsuario.innerHTML = `
          <div class="card-header color-texto-violeta fw-bold py-3 fs-5">
              DETALLE DE USUARIO
            </div>
          <div class="card-body py-4 mt-1">
          <ul class= "list-unstyled fs-5">
          <li> <b>Usuario</b>: ${buscarUsuario.usuario}</li>
          <li> <b>Nombre</b>: ${buscarUsuario.nombre}</li>
          <li> <b>Apellido</b>: ${buscarUsuario.apellido}</li>
          <li> <b>Fecha Nacimiento</b>: ${buscarUsuario.fechaNacimiento}</li>
          <li> <b>Teléfono</b>: ${buscarUsuario.telefono}</li>
          <li> <b>Email</b>: ${buscarUsuario.email}</li>
          </ul>
          
          
  </div>
  <div class="card-footer text-body-secondary py-2">
   
         </div>
</div>
`;


