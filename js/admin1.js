import { validarEmail, validarCantidadCaracteres } from "./validaciones.js";
import Usuario from "./classUsuario.js";
//declaro variables de modalLogin
const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
const btnNuevo = document.getElementById("btnNuevo");
const formularioRegistro = document.getElementById("formRegistro");

//input de formLogin
const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const password = document.getElementById("password");
const tipo = document.getElementById("tipo");
let encontrarUsuario;

//verificar si hay datos en el localstorage
const listaUsuarios =
  JSON.parse(localStorage.getItem("listaUsuariosKey")) || [];
const tabla = document.querySelector("tbody");
let crear = true;

//funciones Login
const mostrarModal = () => {
  modalLogin.show();
};

const crearUsuario = () => {
  crear = true;
  if (validarCantidadCaracteres(usuario, 5, 30)) {
    const nuevoUsuario = new Usuario(
      usuario.value,
      nombre.value,
      apellido.value,
      fechaNacimiento.value,
      telefono.value,
      email.value,
      password.value,
      tipo.value
    );
    console.log(nuevoUsuario);
    listaUsuarios.push(nuevoUsuario);
    console.log(listaUsuarios);
    limpiarFormulario();
    guardarLocalStorage();
    dibujarFila(nuevoUsuario);
    mostrarModal.hide();
  } else {
    console.log("hay errores en la carga del formulario");
  }
};
const limpiarFormulario = () => {
  formularioRegistro.reset();
};
const guardarLocalStorage = () => {
  localStorage.setItem("listaUsuariosKey", JSON.stringify(listaUsuarios));
};
const dibujarFila = (usuario) => {
  tabla.innerHTML += ` <tr> 
                           
                            <td>${usuario.usuario}</td>
                            <td>${usuario.nombre}</td>
                            <td>${usuario.apellido}</td>
                            <td>${usuario.fechaNacimiento}</td>
                            <td>${usuario.telefono}</td>
                            <td>${usuario.email}</td>
                            <td>${usuario.password}</td>
                            <td>${usuario.tipo}</td>
                            <td>
                                <button class="btn btn-primary" onclick="verDetalle('${usuario.id}')">Ver</button>
                                <button class="btn btn-warning" onclick="editarUsuario('${usuario.id}')">Editar</button>
                                <button class="btn btn-danger" onclick="borrarUsuario('${usuario.id}')">Borrar</button>
                            </td>  
                        </tr>`;
};

window.verDetalle = (id) => {
  window.location.href = "/pages/usuario.html?id=" + id;
};

const cargaInicial = () => {
  if (listaUsuarios.length !== 0) {
    listaUsuarios.map((usuario) => dibujarFila(usuario));
  }
};

const administrarUsuario = (e) => {
  e.preventDefault();
  console.log("estamos en administrar usuario");
  if (crear) {
    crearUsuario();
  } else {
    modificarUsuario();
  }
};

const modificarUsuario = () => {
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
  listaUsuarios[obtenerUsuario].password = password.value;
  listaUsuarios[obtenerUsuario].tipo = tipo.value;
  //3 - actualizar el localstorage.
    guardarLocalStorage();
    actualizarFila(obtenerUsuario);
    limpiarFormulario();
    crear = true;
    mostrarModal.hide();
};

window.editarUsuario = (id) => {
  console.log("aqui agrego la logica para edición de usuario");
  crear = false;
  mostrarModal();
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
    password.value = encontrarUsuario.password;
    tipo.value = encontrarUsuario.tipo;
  }
};

const actualizarFila = (index) => {
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
        <td>${listaUsuarios[index].password}</td>
        <td>${listaUsuarios[index].tipo}</td>
        <td>
            <button class="btn btn-primary" onclick="verDetalle('${listaUsuarios[index].id}')">Leer</button>
            <button class="btn btn-warning" onclick="editarUsuario('${listaUsuarios[index].id}')">Editar</button>
            <button class="btn btn-danger" onclick="borrarUsuario('${listaUsuarios[index].id}')">Borrar</button>
                    </td> `;
};
window.borrarUsuario = (id) => {
  console.log(id);
  Swal.fire({
    title: "¿Estas seguro de borrar el usuario?",
    text: "No puedes revertir este proceso, luego de borrar.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //aqui agrego mi logica
      //1- buscar la posicion del elemento que quiero borrar findIndex
      const posicionUsuarioBuscado = listaUsuarios.findIndex(
        (usuario) => usuario.id === id
      );
      console.log(posicionUsuarioBuscado);
      //2- borrar un usuario del array splice, la posicion del elemento a borrar
      listaUsuarios.splice(posicionUsuarioBuscado, 1);
      //3- actualizar el localstorage
      guardarLocalStorage();
      //4- actualizar la tabla
      tabla.removeChild(tabla.children[posicionUsuarioBuscado]);
      Swal.fire({
        title: "usuario eliminado",
        text: "El usuario fue eliminado correctamente",
        icon: "success",
      });
    }
  });
};

//LÓGICA DEL CRUD
btnNuevo.addEventListener("click", mostrarModal);
formularioRegistro.addEventListener("submit", administrarUsuario);
cargaInicial();
