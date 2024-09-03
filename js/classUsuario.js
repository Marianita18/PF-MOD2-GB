export default class Usuario {
  #id;
  #usuario;
  #nombre;
  #apellido;
  #fechaNacimiento;
  #telefono;
  #email;
  #password;
  #tipo;

  constructor(
    usuario,
    nombre,
    apellido,
    fechaNacimiento,
    telefono,
    email,
    password,
    tipo
    
  ) {
    this.#id = crypto.randomUUID();
    this.#usuario = usuario;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#fechaNacimiento = fechaNacimiento;
    this.#telefono = telefono;
    this.#email = email;
    this.#password = password;
    this.#tipo = tipo;
   
  }
  //GET Y SET
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }
  get usuario() {
    return this.#usuario;
  }
  set usuario(value) {
    this.#usuario = value;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(value) {
    this.#nombre = value;
  }
  get apellido() {
    return this.#apellido;
  }
  set apellido(value) {
    this.#apellido = value;
  }
  get fechaNacimiento() {
    return this.#fechaNacimiento;
  }
  set fechaNacimiento(value) {
    this.#fechaNacimiento = value;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(value) {
    this.#telefono = value;
  }
  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
  }
  get password() {
    return this.#password;
  }
  set password(value) {
    this.#password = value;
  }
  get tipo() {
    return this.#tipo;
  }
  set tipo(value) {
    this.#tipo = value;
  }
 

  //metodo para que funcione del JSON.stringify de js
  toJSON() {
    return {
      id: this.id,
      usuario: this.usuario,
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      telefono: this.telefono,
      email: this.email,
      password: this.password,
      tipo: this.tipo,
    };
  }
}
