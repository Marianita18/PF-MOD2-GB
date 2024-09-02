const formularioEditarUsuario = document.getElementById("formEditarUsuario");
const modalEditarUsuario = new bootstrap.Modal(
  document.getElementById("modalEditarUsuario")
);

let crear = true;
const limpiarFormEdit = () => {
  formularioEditar.reset();
};
const mostrarModalEditarUsuario = () => {
  modalEditarUsuario.show();
};
const modificarUsuario = () => {
  console.log(
    "aqui guardo los datos del usuario modificado en el array y en el localstorage"
  );
  //1 buscar la posicion del usuario a modificar
  const obtenerUsuario = listaUsuarios.findIndex(
    (res) => res.id === buscarUsuario.id
  );
  //2- actualizar los datos del array
  listaUsuarios[obtenerUsuario].nombre = nombre.value;
  listaUsuarios[obtenerUsuario].apellido = apellido.value;
  listaUsuarios[obtenerUsuario].fechaNacimiento = fechaNacimiento.value;
  listaUsuarios[obtenerUsuario].telefono = telefono.value;
  listaUsuarios[obtenerUsuario].email = email.value;
  //3 - actualizar el localstorage.
  guardarLocalStorage();
  actualizarFilaUsuario(obtenerUsuario);
  limpiarFormEdit();
  crear = true;
};

window.editarUsuario = (parametroId) => {
  console.log("aqui agrego la logica para edición de usuario");
  crear = false;
  console(buscarUsuario);
  mostrarModalEditarUsuario();
  console(buscarUsuario);
  //aqui tengo que buscar el usuario y agregar sus valores en el formulario
  const buscarUsuario = listaUsuarios.find(
    (usuario) => usuario.id === parametroId
  );
  console(buscarUsuario);
  if (buscarUsuario) {
    nombre.value = buscarUsuario.nombre;
    apellido.value = buscarUsuario.apellido;
    fechaNacimiento.value = buscarUsuario.fechaNacimiento;
    telefono.value = buscarUsuario.telefono;
    email.value = buscarUsuario.email;
  }
};

const actualizarFilaUsuario = (index) => {
  // Obtener la fila correspondiente
  const fila = tabla.children[index];
  // Actualizar el contenido de la fila
  fila.innerHTML = `
        <td>${listaUsuarios[index].nombre}</td>
        <td>${listaUsuarios[index].apellido}</td>
        <td>${listaUsuarios[index].fechaNacimiento}</td>
        <td>${listaUsuarios[index].telefono}</td>
        <td>${listaUsuarios[index].email}</td>
        <td>
            <button class="btn btn-warning" onclick="editarUsuario('${listaUsuarios[index].id}')">Editar</button>
        </td> `;
};

const administrarUsuario = (e) => {
  e.preventDefault();
  console.log("estamos en administrar usuario");
  if (crear === false) {
    console.log("crear negativo")
    modificarUsuario();
   }
};

btnEditarUsuario.addEventListener("click", mostrarModalEditarUsuario);
formularioEditarUsuario.addEventListener("submit", administrarUsuario);
