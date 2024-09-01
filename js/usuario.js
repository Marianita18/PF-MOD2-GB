const tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
const tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");
function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#a600f9");

// ------------------------------------------------------------------------

//extraer el parametro de la url
const parametroId = new URLSearchParams(window.location.search).get('id')

//buscar el id en el localstorage
const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosKey")) || [];

const buscarUsuario = listaUsuarios.find(
  (usuario) => usuario.id === parametroId
);

const cardUsuario = document.querySelector("#cardUsuario");
cardUsuario.innerHTML = ` 
              <div class="card-body">
                <h5 class="card-title">${buscarUsuario.apellido}, ${buscarUsuario.nombre}</h5>
                <p class="card-text">${buscarUsuario.tipo}</p>
              </div>`;
