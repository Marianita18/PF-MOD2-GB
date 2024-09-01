// ------------------------------------------------------------------------------
// const btnIcon = document.getElementsBy;

// function likeBtn() {
//   btn.classList.remove("bi-plus-circle");
//   btn.classList.add("bi-plus-circle-fill");
// }

// let changeIcon = function (icon){
//   icon.classList.toggle("bi-plus-circle-fill");
// }

// console.log(changeIcon())

// -----------------------------------------------------------------------------------
//extraer el parametro de la url
console.log(window.location.search);
const parametroId = new URLSearchParams(window.location.search).get('id')
console.log(parametroId)
//buscar el id en el localstorage
const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosKey")) || [];
console.log(listaUsuarios);

const buscarUsuario = listaUsuarios.find(
  (usuario) => usuario.id === parametroId
);
console.log(buscarUsuario);

const carUsuario = document.querySelector("#cardUsuario");
cardUsuario.innerHTML = ` 
              <div class="card-body">
                <h5 class="card-title">${buscarUsuario.apellido}, ${buscarUsuario.nombre}</h5>
                <p class="card-text">${buscarUsuario.tipo}</p>
              </div>`;

