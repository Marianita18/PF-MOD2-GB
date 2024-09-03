import Usuario from "./classUsuario.js";
const usuario = document.getElementById("usuario")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const fechaNacimiento = document.getElementById("fechaNacimiento")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const password = document.getElementById("password")
const tipo = document.getElementById("tipo")
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const btncargar = document.getElementById("btncargar");

const limpiarFormulario = () => {
  document.getElementById("usuario").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fechaNacimiento").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("tipo").value = "";

};
document.getElementById("btn-nuevousario").addEventListener("click", function () {
  const modalUsuario = new bootstrap.Modal(document.getElementById("modalnuevousario"));
  modalUsuario.show();
});

const Admin = (usuario) => {
  return (
    usuario.nombre === "admin" &&
    usuario.apellido === "admin" &&
    usuario.email === "admin@gmail.com"&&
    usuario.password === "admin"
  );
};

const obtenerUsuario = () => {
  const nombre = document.getElementById("nombre1").value;
  const apellido = document.getElementById("apellido1").value;
  const email = document.getElementById("email1").value;
  const password = document.getElementById("contrasena").value;
  
  return { nombre, apellido, email, password };
};


const crearUsuario = () => {
  const nusuario = new Usuario(
    usuario.value,
    nombre.value,
    apellido.value,
    fechaNacimiento.value,
    telefono.value,
    email.value,
    password.value,
    tipo.value,
  );
  guardarEnLocalStorage(nusuario);
  limpiarFormulario();
};

const guardarEnLocalStorage = (nusuario) => {
  usuarios.push(nusuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log("Usuario guardado en el local storage");
};
document.getElementById("form-nuevousario").addEventListener("submit", crearUsuario);
const cargarUsuario = (usuario) => {
  document.getElementById("nombre1").value = usuario.nombre;
  document.getElementById("apellido1").value = usuario.apellido;
  document.getElementById("email1").value = usuario.email;
  document.getElementById("nacimiento1").value = usuario.fechaNacimiento;
  document.getElementById("telefono").value = usuario.telefono;
  document.getElementById("telefoncargar").value = usuario.password;
  
};

btncargar.addEventListener("click", () => {
  const usuario = obtenerUsuario();
  if (Admin(usuario)) {
    console.log("El usuario es administrador");
    document.getElementById("admin-nav").style.display = "block"; // Mostrar el elemento del administrador
  } else {
    const usuarioEncontrado = usuarios.find(u => u.email === usuario.email && u.password === usuario.password);
    if (usuarioEncontrado) {
      console.log("Usuario encontrado en el local storage");
      cargarUsuario(usuarioEncontrado);
      window.location.href = "../index.html";
    } else {
      const modalUsuario = new bootstrap.Modal(document.getElementById("modalnuevousario"));
      console.log("Usuario no encontrado, mostrando formulario de creación");
      modalUsuario.show();
    }
  }
});