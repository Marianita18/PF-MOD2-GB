import Servicios from "./classServicio.js";

 //aqui agregare la logica del CRUD

 //declaro las variables

const servicios = new Servicios('Reels y Videos','sdofgnsdfkjg','500','5 horas');
console.log(servicios)
const modalContacto = new bootstrap.Modal (document.getElementById('modalAdminServicios'));
const btnNuevo = document.getElementById('btnNuevo');

//funciones
const mostrarModal = ()=>{
    modalContacto.show()
}


//aqui agrego la logica del CRUD
btnNuevo.addEventListener('click', mostrarModal)
