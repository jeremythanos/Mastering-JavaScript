// una funcion recursiva es aquella que se llama a si misma
"strick mode"

const validarEdad = (msg) => {
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad porfavor");
            edad = parseInt(edad);
        if (isNaN(edad)) throw "Intruce un numero para la edad ⚠️⚠️";
        if (edad > 18) console.log ("Wey eres mayor de edad");
            else console.log("Wey eres un menor de edad");
    } catch(e){
        validarEdad(e)
    }
}

validarEdad()