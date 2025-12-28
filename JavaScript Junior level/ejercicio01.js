//  haremos el ejrcicio numero #2 de cofla, los horarios usando las funciones
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
        if (edad > 18){
                if (time >= 2 && time <7 && free == false){
                    alert("Puedes ingresar Gratis manin");
                    
                free = true;
                } else{
                    alert(`Son las ${time} horas, Debes pagar la entrada manin`);
                    
                }
                    }else{
                        alert("Eres menor de edad, no puedes ingresar manin");
                        
                    }
}

validarCliente(3)
validarCliente(23)
validarCliente(13)
validarCliente(4)
validarCliente(9)






// document.getElementById("js").innerHTML = res