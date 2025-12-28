

this.nombre = "Jeremias";

function saludar(){
    console.log(`Klk ${this.nombre}`);
}

const objeto = {
    nombre: "Jeremy",
    saludar
}

function otroContexto(){
    this.nombre = "Pascual";
    this.saludar = saludar;
}

const objeto2 = new otroContexto();
objeto.saludar()
objeto2.saludar()
console.log(this.nombre)