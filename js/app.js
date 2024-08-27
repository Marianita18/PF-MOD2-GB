import Servicios from "./classServicio.js";

 //aqui agregare la logica del CRUD

 //declaro las variables

const modalServicio = new bootstrap.Modal (document.getElementById('modalAdminServicios'));
const btnNuevo = document.getElementById('btnNuevo');
const btnCargar = document.getElementById('btnCargar');
const formServicios = document.getElementById('formServicios');
//traigo los imputs
const nombreServicio = document.getElementById('nombreServicio'),
descripcionServicio = document.getElementById('descripcionServicio'),
precioServicio = document.getElementById('precioServicio'),
tiempoServicio = document.getElementById('tiempoServicio'),
tipoServicio = document.getElementById('tipoServicio'),
imagenServicio = document.getElementById('imagenServicio');

const listaServicios = [];



//funciones
const mostrarModal = ()=>{
    modalServicio.show()
}

const crearServicio = (e)=>{
    e.preventDefault();
    //debo validar los datos, lo vere despues
    //crear el objeto
    const servicios = new Servicios(nombreServicio.value,descripcionServicio.value,precioServicio.value,tiempoServicio.value,tipoServicio.value,imagenServicio.value);
    console.log(servicios)
    //quiero guardar el objeto en la lista de servicio
    listaServicios.push(servicios)
    console.log(listaServicios)
    limpiarFormServicios()
    //guardar en JSON
    guardarEnLocalStorage()
}

const limpiarFormServicios = ()=>{
formServicios.reset();
}
const guardarEnLocalStorage =()=>{
    localStorage.setItem('listaServiciosKey' , JSON.stringify(listaServicios))
}
//aqui agrego la logica del CRUD
btnNuevo.addEventListener('click', mostrarModal)
formServicios.addEventListener('submit', crearServicio)
