const formularioUsuario = document.getElementById("formUsuario");
const modalUsuario = document.getElementById("modalUsuario");

const tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
const tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");
function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#a600f9");

// ------------------------------------------------------------------------

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
                <h5 class="card-title">${buscarUsuario.apellido}, ${buscarUsuario.nombre}</h5>
                <p class="card-text">${buscarUsuario.tipo}</p>
              </div>`;

const contenedorFormUsuario = document.querySelector("#contenedorFormUsuario");
contenedorFormUsuario.innerHTML = `
          <div class="card-body">
          <ul class= "list-unstyled">
          <li> <b>Usuario</b>: ${buscarUsuario.usuario}</li>
          <li> <b>Nombre</b>: ${buscarUsuario.nombre}</li>
          <li> <b>Apellido</b>: ${buscarUsuario.apellido}</li>
          <li> <b>Fecha Nacimiento</b>: ${buscarUsuario.fechaNacimiento}</li>
          <li> <b>Teléfono</b>: ${buscarUsuario.telefono}</li>
          <li> <b>Email</b>: ${buscarUsuario.email}</li>
          </ul>
          <a href="#" class="btn btn-primary" id="">Editar</a>
  </div>
</div>
`;

// ----------------------------------------------------------------------------------

const cambiarIcono = () => {
  const iconoInteres = document.querySelector("#iconoInteres");
  iconoInteres.innerHTML = ` 
               <a href="#" class="ms-auto">
                  <i class="bi bi-plus-circle-fill align-content-center fs-5"></i>
               </a>`;
};

// ----------------------------------------------------------------------------

const limpiarFormulario1 = () => {
  formularioUsuario.reset();
};

const mostrarModalUsuario = () => {
  modalUsuario.show();
};
const modificarUsuario1 = () => {
  console.log(
    "aqui guardo los datos del usuario modificado en el array y en el localstorage"
  );
  //1 buscar la posicion del usuario a modificar
  const obtenerUsuario = listaUsuarios.findIndex(
    (res) => res.id === encontrarUsuario.id
  );
  //2- actualizar los datos del array
  listaUsuarios[obtenerUsuario].usuario = usuario.value;
  listaUsuarios[obtenerUsuario].nombre = nombre.value;
  listaUsuarios[obtenerUsuario].apellido = apellido.value;
  listaUsuarios[obtenerUsuario].fechaNacimiento = fechaNacimiento.value;
  listaUsuarios[obtenerUsuario].telefono = telefono.value;
  listaUsuarios[obtenerUsuario].email = email.value;
  //3 - actualizar el localstorage.
  guardarLocalStorage();
  actualizarFilaUsuario(obtenerUsuario);
  limpiarFormulario1();
  crear = true;
};

window.editarUsuario1 = (id) => {
  console.log("aqui agrego la logica para edición de usuario");
  crear = false;
  mostrarModalUsuario();
  //aqui tengo que buscar el usuario y agregar sus valores en el formulario
  encontrarUsuario = listaUsuarios.find((usuario) => usuario.id === id);
  console.log(encontrarUsuario);
  if (encontrarUsuario) {
    usuario.value = encontrarUsuario.usuario;
    nombre.value = encontrarUsuario.nombre;
    apellido.value = encontrarUsuario.apellido;
    fechaNacimiento.value = encontrarUsuario.fechaNacimiento;
    telefono.value = encontrarUsuario.telefono;
    email.value = encontrarUsuario.email;
  }
};

const actualizarFilaUsuario = (index) => {
  // Obtener la fila correspondiente
  const fila = tabla.children[index];
  // Actualizar el contenido de la fila
  fila.innerHTML = `
        <td>${listaUsuarios[index].usuario}</td>
        <td>${listaUsuarios[index].nombre}</td>
        <td>${listaUsuarios[index].apellido}</td>
        <td>${listaUsuarios[index].fechaNacimiento}</td>
        <td>${listaUsuarios[index].telefono}</td>
        <td>${listaUsuarios[index].email}</td>
        <td>
            <button class="btn btn-warning" onclick="editarUsuario1('${listaUsuarios[index].id}')">Editar</button>
        </td> `;
};

const administrarUsuario1 = (e) => {
  e.preventDefault();
  console.log("estamos en administrar usuario");
  if (crear) {
    modificarUsuario1();
  }
};

btnEditarUsuario.addEventListener("click", mostrarModalUsuario);
formularioUsuario.addEventListener("submit", administrarUsuario1);