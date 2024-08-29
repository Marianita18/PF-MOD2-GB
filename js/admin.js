import Servicios from "./classServicio.js";

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
    modalServicio.show()
}

const crearServicio = ()=>{
    //debo validar los datos, lo vere despues
    estoyCreando = true;
    const servicios = new Servicios(nombreServicio.value,descripcionServicio.value,precioServicio.value,tiempoServicio.value,tipoServicio.value,imagenServicio.value);
    console.log(servicios)
    //quiero guardar el objeto en la lista de servicio
    listaServicios.push(servicios)
    console.log(listaServicios)
    limpiarFormServicios()
    //guardar en JSON
    guardarEnLocalStorage()
    dibujarFila(servicios);
}
// const cerrarModal = ()=>{
//     modalServicio.hide()
// }

const limpiarFormServicios = ()=>{
formServicios.reset();
}
const guardarEnLocalStorage =()=>{
    localStorage.setItem('listaServiciosKey' , JSON.stringify(listaServicios))
}

const cargaServiciosInicial =()=>{
    //Pregunta si hay contenido en local
    if(listaServicios.length != 0){
        //Tabla
        listaServicios.map((servicio)=> dibujarFila(servicio))
    }
}

const dibujarFila = (servicio)=>{
  console.log(tabla)
  console.log(servicio)
    const fila = document.createElement('tr')
    const contenidoFila = `<td>${servicio.nombreServicio}</td>
              <td>${servicio.descripcionServicio}</td>
              <td>${servicio.precioServicio}</td>
              <td>${servicio.tiempoServicio}</td>
              <td>
                  <button class="btn btn-primary">Leer</button>
                 <button class="btn btn-warning" onclick="prepararServicio('${servicio.id}')">Editar</button>
                   <button class="btn btn-danger" onclick="borrarServicio('${servicio.id}')">Borrar</button>
              </td>`
            fila.innerHTML = contenidoFila
            tabla.append(fila)
    
    // tabla.innerHTML += `  <tr>
    //           <td>${servicio.nombreServicio}</td>
    //           <td>${servicio.descripcionServicio}</td>
    //           <td>${servicio.precioServicio}</td>
    //           <td>${servicio.tiempoServicio}</td>
    //           <td>
    //               <button class="btn btn-primary">Leer</button>
    //               <button class="btn btn-warning" onclick="prepararServicio('${servicio.id}')">Editar</button>
    //               <button class="btn btn-danger" onclick="borrarServicio('${servicio.id}')">Borrar</button>
    //           </td>
    //         </tr> `

}

//funcion especial para que funcionen botones desde html
window.borrarServicio = (id)=> {
    Swal.fire({
        title: "Estas seguro de borrar el servicio?",
        text: "No podes recuperar luego de borrar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085",
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
        }
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

  }
}

const administrarServicio = (e)=>{
e.preventDefault()
console.log('e', e)
if (estoyCreando === true){
  crearServicio()
} else {
    modificarServicio();
  }
}

const modificarServicio = ()=>{
//buscar la posicion del contacto a modificar
const obtenerServicio = listaServicios.findIndex(res => res.id === servicioAEditar.id)
console.log('aqui obtengo el dato', obtenerServicio)
//actualizar datos del array
listaServicios[obtenerServicio].nombreServicio = nombreServicio.value
listaServicios[obtenerServicio].descripcionServicioServicio = descripcionServicio.value
listaServicios[obtenerServicio].precioServicio = precioServicio.value
listaServicios[obtenerServicio].tiempoServicio = tiempoServicio.value
listaServicios[obtenerServicio].tipoServicio = tipoServicio.value
listaServicios[obtenerServicio].imagenServicio = imagenServicio.value
console.log(listaServicios)
guardarEnLocalStorage();


// actualizar el local storage
}
//Logica del CRUD
btnNuevo.addEventListener('click', mostrarModal);
formServicios.addEventListener('submit', administrarServicio);
cargaServiciosInicial();
// formServicios.addEventListener('submit', cerrarModal)
