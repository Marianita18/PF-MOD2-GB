
const modalRegistro= new bootstrap.Modal(document.getElementById("modalRegistro"));
const btnRegistro = document.getElementById("btnRegistro");
const formularioRegistro = document.querySelector("#formRegistro");

const mostrarModalRegistro = () => {
  modalRegistro.show();
};


formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email);
  if (isUserRegistered) {
    return alert("El usuario ya esta registado!");
  }

  Users.push({ email: email, password: password });
  localStorage.setItem("users", JSON.stringify(Users));
  alert("Registro Exitoso!");
});

btnRegistro.addEventListener("click", mostrarModalRegistro);