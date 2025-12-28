// ---Declarion de las variables a usar---//
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const materia = document.getElementById("materia")
const boton = document.getElementById("btn-enviar")
const resultado = document.querySelector(".resultado")

// ---Funcion validarCampos---//
const validarCampos = () => {
    let error = [];

    if (nombre.value.length < 5 || nombre.value.length > 40) { // comienzo de la validación de nombre
        error[0] = true;
        error[1] = "El nombre es inválido ⚠️";
        return error;
    } else if (
        email.value.length < 5 || 
        email.value.length > 40 ||
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El email no es válido ⚠️";
        return error;
    } else if(materia.value < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "La materia no es válida ⚠️";
        return error;
    }

    error[0] = false;
    return error;
};


// ---Funcion validarCampos \\ que mas abajo es usada ---//

// ---add un evento para que se valide el formulario---//
boton.addEventListener("click",(e)=>{
    e.preventDefault()
    let error = validarCampos() // la funcion validar campos esta mas arriba btw 
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else{
        resultado.innerHTML = "Solicitud enviada correctamente!✅";
        resultado.classList.add("green");
        resultado.classList.remove("red");
// removemos agregamos la classe red para que cuando el usario la aregle quite la red y deja la vede
    }
})

