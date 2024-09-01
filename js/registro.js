class Usuario {
  #nombre;
  #apellido;
  #email;
  #nacimiento;
  #telefono;
  #contraseña;
  #contraseña2;
  #pago;

  constructor(
    nombre,
    apellido,
    email,
    nacimiento,
    telefono,
    contraseña,
    contraseña2,
    pago
  ) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#email = email;
    this.#nacimiento = nacimiento;
    this.#telefono = telefono;
    this.#contraseña = contraseña;
    this.#contraseña2 = contraseña2;
    this.#pago = pago;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }

  get apellido() {
    return this.#apellido;
  }

  get email() {
    return this.#email;
  }

  get nacimiento() {
    return this.#nacimiento;
  }

  get telefono() {
    return this.#telefono;
  }

  get contraseña() {
    return this.#contraseña;
  }

  get contraseña2() {
    return this.#contraseña2;
  }

  get pago() {
    return this.#pago;
  }

  // Setters
  set nombre(nombre) {
    this.#nombre = nombre;
  }

  set apellido(apellido) {
    this.#apellido = apellido;
  }

  set email(email) {
    this.#email = email;
  }

  set nacimiento(nacimiento) {
    this.#nacimiento = nacimiento;
  }

  set telefono(telefono) {
    this.#telefono = telefono;
  }

  set contraseña(contraseña) {
    this.#contraseña = contraseña;
  }

  set contraseña2(contraseña2) {
    this.#contraseña2 = contraseña2;
  }

  set pago(pago) {
    this.#pago = pago;
  }

  toJSON() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      nacimiento: this.nacimiento,
      telefono: this.telefono,
      contraseña: this.contraseña,
      contraseña2: this.contraseña2,
      pago: this.pago,
    };
  }
}

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const btncargar = document.getElementById("btncargar")
const Admin = (usuario) => {
  return (
    usuario.nombre === "admin" &&
    usuario.apellido === "admin" &&
    usuario.email === "admin@gmail.com" &&
    usuario.nacimiento == "2002-11-30" &&
    usuario.telefono == "3816070148" &&
    usuario.contraseña === "Admin1" &&
    usuario.pago == "1"
  );
};
document
  .getElementById("btn-nuevousario")
  .addEventListener("click", function () {
    const modalUsuario = new bootstrap.Modal(
      document.getElementById("modalnuevousario")
    );
    modalUsuario.show();
  });

const crearUsuario = (e) => {
  e.preventDefault();{
   
    console.log("Prueba de crear usuario");
    const usuario = new Usuario(
      nombre.value,
      apellido.value,
      email.value,
      nacimiento.value,
      telefono.value,
      contraseña.value,
      contraseña2.value,
      pago.value
    );
    guardarEnLocalStorage(usuario);
  }
};

const guardarEnLocalStorage = (usuario) => {
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log("Usuario guardado en el local storage");
};
const cargarUsuario = () => {
  const usuario = usuarios.find((u) => Admin(u));
  if (usuario) {
    alert("Bienvenido, Admin")
    window.location.href = "../pages/administrador.html";
  }}

document
  .getElementById("form-nuevousario")
  .addEventListener("submit", crearUsuario);
  btncargar.addEventListener("click", cargarUsuario);
