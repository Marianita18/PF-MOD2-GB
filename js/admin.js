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
// verificar si hay datos en LocalStorage
const listaServicios = JSON.parse (localStorage.getItem('listaServiciosKey')) || [];
const tabla = document.querySelector('tbody');


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
    
    tabla.innerHTML += `  <tr>
              <td>${servicio.nombreServicio}</td>
              <td>${servicio.descripcionServicio}</td>
              <td>${servicio.precioServicio}</td>
              <td>${servicio.tiempoServicio}</td>
              <td>
                  <button class="btn btn-primary">Leer</button>
                  <button class="btn btn-warning">Editar</button>
                  <button class="btn btn-danger" onclick="borrarServicio('${servicio.id}')">Borrar</button>
              </td>
            </tr> `

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
//aqui agrego la logica del CRUD
btnNuevo.addEventListener('click', mostrarModal);
formServicios.addEventListener('submit', crearServicio);
cargaServiciosInicial();
// formServicios.addEventListener('submit', cerrarModal)
