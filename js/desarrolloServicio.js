const parametroId = new URLSearchParams(window.location.search).get("id");

const listaServicios = JSON.parse (localStorage.getItem('listaServiciosKey')) || [];

const servicioBuscado = listaServicios.find((servicio)=> servicio.id === parametroId)

console.log(servicioBuscado)