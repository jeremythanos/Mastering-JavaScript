class Objeto {
    constructor(){};
    hablar(){
        console.log("hola")
    }
}

const objeto = new Objeto();

objeto.__proto__.hablar = ()=>{
    console.log("Modificado Afuera")
}

console.log(objeto)