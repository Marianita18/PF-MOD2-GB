
export function validarCantidadCaracteres(input,min,max){
if (input.value.trim().length >= min && input.value.trim().length <= max){
    input.className= 'form-control is-valid'
    return true;
} else{
    input.className= 'form-control is-invalid'
    return false
}
}

export function validarEmail(input){
    const regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (regExp.test(input.value)){
        input.className= 'form-control is-valid'
        return true
    } else {
        input.className= 'form-control is-invalid'
        return false
    }
}

export function validarUrl(input){
    const regExp = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    if (regExp.test(input.value)){
        input.className= 'form-control is-valid'
        return true
    } else {
        input.className= 'form-control is-invalid'
        return false
    }
}


//registro
document.getElementById('form-nuevousario').addEventListener('submit', function(event) {
    let isValid = true;

    // Validar usuario
      const usuario = document.getElementById('usuario');
    if (usuario.value.length < 3 || usuario.value.length > 40) {
        usuario.classList.add('is-invalid');
        isValid = false;
    } else {
        usuario.classList.remove('is-invalid');
    }

    // Validar nombre
     const nombre = document.getElementById('nombre');
    if (nombre.value.length < 3 || nombre.value.length > 40) {
        nombre.classList.add('is-invalid');
        isValid = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    // Validar apellido
       const apellido = document.getElementById('apellido');
    if (apellido.value.length < 3 || apellido.value.length > 40) {
        apellido.classList.add('is-invalid');
        isValid = false;
    } else {
        apellido.classList.remove('is-invalid');
    }

    // Validar fecha de nacimiento
     const fechaNacimiento = document.getElementById('fechaNacimiento');
    if (!fechaNacimiento.value) {
        fechaNacimiento.classList.add('is-invalid');
        isValid = false;
    } else {
        fechaNacimiento.classList.remove('is-invalid');
    }

    // Validar teléfono
     const telefono = document.getElementById('telefono');
    if (telefono.value.length < 7 || telefono.value.length > 15) {
        telefono.classList.add('is-invalid');
        isValid = false;
    } else {
        telefono.classList.remove('is-invalid');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

