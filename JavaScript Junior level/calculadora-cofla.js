document.getElementById('js').innerHTML = "" //esto es solo por si quiero mostrar algo usando el p html


// creacion de las variales y sus operaciones logicas
//creacion de las variables:suma,resta,dividir,multiplicar
const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

// ahora qui hago una creacion de un alert, el cual tiene como funcion que el usario vea que numero tiene que selecionar para saber cual numero hacer cual operacion
alert("¿Qué tipo de operación quieres hacer?");
//vamos a crear una variable tipo 'prompt' es decir esa variable sera un prompt para capturar la informacion del usario
let operaciones = prompt("1: para sumar, 2: para restar, 3: para dividir, 4: para multplicar");

// ahora creamos unos condicionaes, seran 4 y cado uno sera para cado operacion y se crear otras cariables tipo prompt dentro de este bloque 

if (operaciones == 1){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres sumar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres sumar");
    resultado = sumar(numero1,numero2);
    alert(`El resultado de esta suma es: ${resultado}`);
}

else if (operaciones == 2){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres restar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres restar");
    resultado = restar(numero1,numero2);
    alert(`El resultado de esta resta es: ${resultado}`);
}
else if (operaciones == 3){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres dividir");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres dividir");
    resultado = dividir(numero1,numero2);
    alert(`El resultado de esta division es: ${resultado}`);
}
else if (operaciones == 4){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres multiplicar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`El resultado de esta multiplicacion es: ${resultado}`);
}
