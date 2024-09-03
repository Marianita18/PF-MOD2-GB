import { validarEmail } from "./validaciones.js";

const formularioSuscripcion = document.getElementById("formSuscripcion");
// imput de formulario
const emailFooter = document.getElementById("emailFooter");

formularioSuscripcion.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarEmail(emailFooter)) {
    formularioSuscripcion.reset();
    Swal.fire({
    //   title: "Confirmación",
      text: "Se agrego correctamente el email. Pronto recibirás noticias. Muchas gracias!!!",
      icon: "success",
    });
  } else {
    formularioSuscripcion.reset();
     Swal.fire({
       //   title: "Confirmación",
       text: "El email ingresado no es correcto",
       icon: "success",
     });
  }
});
