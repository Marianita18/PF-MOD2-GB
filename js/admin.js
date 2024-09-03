import Servicios from "./classServicio.js";
import { validarCantidadCaracteres, validarUrl } from "./validaciones.js";
// import { validarEmail } from "./validaciones.js";
import { validarEmail } from "./validaciones.js";

 //Variables

const modalServicio = new bootstrap.Modal (document.getElementById('modalAdminServicios'));
const btnNuevo = document.getElementById('btnNuevo');
const btnCargar = document.getElementById('btnCargar');
const formServicios = document.getElementById('formServicios');
//Imputs
const nombreServicio = document.getElementById('nombreServicio'),
descripcionServicio = document.getElementById('descripcionServicio'),
precioServicio = document.getElementById('precioServicio'),
tiempoServicio = document.getElementById('tiempoServicio'),
tipoServicio = document.getElementById('tipoServicio'),
imagenServicio = document.getElementById('imagenServicio');
// verificacion de datos Storage
const listaServicios = JSON.parse (localStorage.getItem('listaServiciosKey')) || [];
const tabla = document.querySelector('tbody');
let estoyCreando = true;
let servicioAEditar;


//funciones
const mostrarModal = ()=>{
    modalServicio.show();
}

const crearServicio = ()=>{
    estoyCreando = true;
    if(validarCantidadCaracteres(nombreServicio,3,30)  && validarCantidadCaracteres(descripcionServicio,4,1000) && validarCantidadCaracteres(precioServicio,1,10)  && validarCantidadCaracteres(tiempoServicio,1,15)  && validarCantidadCaracteres(tipoServicio,1,15) === true && validarUrl(imagenServicio)){
      const servicios = new Servicios(nombreServicio.value,descripcionServicio.value,precioServicio.value,tiempoServicio.value,tipoServicio.value,imagenServicio.value);
      //quiero guardar el objeto en la lista de servicio
      listaServicios.push(servicios);
      limpiarFormServicios();
      //guardar en JSON
      guardarEnLocalStorage();
      dibujarFila(servicios);

    } else {
      console.log('hay errores en la carga');
    }
}

const limpiarFormServicios = ()=>{
  formServicios.reset();

  const formControls = formServicios.querySelectorAll('.form-control');
   formControls.forEach(control => {
     control.classList.remove('is-valid'); 
     control.classList.remove('is-invalid'); 
   });
}

const guardarEnLocalStorage =()=>{
  localStorage.setItem('listaServiciosKey' , JSON.stringify(listaServicios));
}

const cargaServiciosInicial =()=>{
    //Pregunta si hay contenido en local
  if(listaServicios.length != 0){
      listaServicios.map((servicio)=> dibujarFila(servicio));
    }
}

const dibujarFila = (servicio)=>{
  const fila = document.createElement('tr');
  const contenidoFila = `<td>${servicio.nombreServicio}</td>
              <td>${servicio.descripcionServicio}</td>
              <td>${servicio.precioServicio}</td>
              <td>${servicio.tiempoServicio}</td>
              <td>
                <button class="btn btnColor" onclick="verServicio('${servicio.id}')"><i class="bi bi-eye fs-5"></i></button>
                <button class="btn btn-warning" onclick="prepararServicio('${servicio.id}')"><i class="bi bi-pencil fs-5"></i></button>
                <button class="btn btn-danger" onclick="borrarServicio('${servicio.id}')"><i class="bi bi-trash fs-5"></i></button>
              </td>`;
  fila.innerHTML = contenidoFila;
  tabla.append(fila);
}

//funcion especial para que funcionen botones desde html
window.borrarServicio = (id)=> {
    Swal.fire({
        title: "Estas seguro de borrar el servicio?",
        text: "No podes recuperar luego de borrar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#a600f9",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText:"Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            //logica para borrar
            const posicionServicioBuscado = listaServicios.findIndex((servicio)=> servicio.id === id)
            listaServicios.splice(posicionServicioBuscado,1);
            guardarEnLocalStorage()
            tabla.removeChild(tabla.children[posicionServicioBuscado])

          Swal.fire({
            title: "Borrado",
            text: "El servicio fue eliminado",
            icon: "success"
          });
        };
      });
}

window.prepararServicio = (id)=>{
  estoyCreando = false;
  mostrarModal();
  //buscar el contacto con find y luego agregar los valores en el formulario
  servicioAEditar = listaServicios.find((servicio)=> servicio.id === id)
  if(servicioAEditar){
    nombreServicio.value = servicioAEditar.nombreServicio
    descripcionServicio.value = servicioAEditar.descripcionServicio
    precioServicio.value = servicioAEditar.precioServicio
    tiempoServicio.value = servicioAEditar.tiempoServicio
    tipoServicio.value = servicioAEditar.tipoServicio
    imagenServicio.value = servicioAEditar.imagenServicio
  };
}

window.verServicio = (id)=>{
  window.location.href = "/pages/detalleServicio.html?id=" + id;
}

const administrarServicio = (e)=>{
  e.preventDefault()
  if (estoyCreando === true){
    crearServicio();
  } else {
    modificarServicio();
  }
}

const modificarServicio = ()=>{
//Posicion
  const obtenerServicio = listaServicios.findIndex(res => res.id === servicioAEditar.id);
//actualizar datos del array
if(validarCantidadCaracteres(nombreServicio,3,30) === true && validarCantidadCaracteres(descripcionServicio,4,1000) === true && validarCantidadCaracteres(precioServicio,1,15) === true && validarCantidadCaracteres(tiempoServicio,1,15) === true && validarCantidadCaracteres(tipoServicio,1,15) === true && validarUrl(imagenServicio)){
  listaServicios[obtenerServicio].nombreServicio = nombreServicio.value;
  listaServicios[obtenerServicio].descripcionServicio = descripcionServicio.value;
  listaServicios[obtenerServicio].precioServicio = precioServicio.value;
  listaServicios[obtenerServicio].tiempoServicio = tiempoServicio.value;
  listaServicios[obtenerServicio].tipoServicio = tipoServicio.value;
  listaServicios[obtenerServicio].imagenServicio = imagenServicio.value;
  guardarEnLocalStorage();
  actualizarFilaEnTabla(obtenerServicio);
  limpiarFormServicios();
  estoyCreando = true;
  modalServicio.hide();

} else {
  console.log('hay errores en la carga');
}
}

const actualizarFilaEnTabla = (index) => {
    // Obtener la fila correspondiente
  const fila = tabla.children[index];

 // Actualizar el contenido de la fila
  fila.innerHTML = `
        <td>${listaServicios[index].nombreServicio}</td>
        <td>${listaServicios[index].descripcionServicio}</td>
        <td>${listaServicios[index].precioServicio}</td>
        <td>${listaServicios[index].tiempoServicio}</td>
        <td>
            <button class="btn btnColor" onclick="verServicio('${listaServicios[index].id}')"><i class="bi bi-eye fs-5"></button>
            <button class="btn btn-warning" onclick="prepararServicio('${listaServicios[index].id}')"><i class="bi bi-pencil fs-5"></i></button>
            <button class="btn btn-danger" onclick="borrarServicio('${listaServicios[index].id}')"><i class="bi bi-trash fs-5"></i></button>
        </td>`;
}

//Logica del CRUD
btnNuevo.addEventListener('click', mostrarModal);
formServicios.addEventListener('submit', administrarServicio);
cargaServiciosInicial();
// formServicios.addEventListener('submit', cerrarModal)
