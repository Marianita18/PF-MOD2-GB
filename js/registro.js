import Usuario from "./classUsuario.js";

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const btncargar = document.getElementById("btncargar");

const Admin = (usuario) => {
  return (
    usuario.nombre === "admin" &&
    usuario.apellido === "admin" &&
    usuario.email === "admin@gmail.com"
  );
};

document.getElementById("btn-nuevousario").addEventListener("click", function () {
  const modalUsuario = new bootstrap.Modal(document.getElementById("modalnuevousario"));
  modalUsuario.show();
});

const obtenerUsuario = () => {
  const nombre = document.getElementById("nombre1").value;
  const apellido = document.getElementById("apellido1").value;
  const email = document.getElementById("email1").value;
  const password = document.getElementById("contraseña").value;

  return { nombre, apellido, email, password };
};

const crearUsuario = (e) => {
  e.preventDefault();

  const nusuario = new Usuario(
    nombre.value,
    apellido.value,
    fechaNacimiento.value,
    telefono.value,
    email.value,
    password.value,
    tipo.value,
    img.value
  );
  guardarEnLocalStorage(nusuario);
};

const guardarEnLocalStorage = (nusuario) => {
  usuarios.push(nusuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log("Usuario guardado en el local storage");
};

document.getElementById("form-nuevousario").addEventListener("submit", crearUsuario);

btncargar.addEventListener("click", () => {
  const usuario = obtenerUsuario();
  if (Admin(usuario)) {
    console.log("El usuario es administrador");
    window.location.href = "../pages/administrador1.html";
  } else {
    console.log("El usuario no es administrador");
  }
});