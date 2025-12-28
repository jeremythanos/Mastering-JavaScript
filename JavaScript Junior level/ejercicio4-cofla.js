//------------FUNCIONES MATEMATICAS CREADAS ----------////
class Calculadora       {
    sumar = (num1,num2)=>{
        return parseInt(num1) + parseInt(num2);
    }
    restar = (num1,num2)=>{
        return parseInt(num1) - parseInt(num2);
    }
    dividir = (num1,num2)=>{
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar = (num1,num2)=>{
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        let numero = num;
        for (var i = 1; i < exp; i++){
            numero = numero*num;
        }
        return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }

                            }
//------------FUNCIONES MATEMATICAS CREADAS ----------////


const calculadora = new Calculadora();

alert("¿Qué tipo de operación quieres hacer?");
let operaciones = prompt("1: para sumar, 2: para restar, 3: para dividir, 4: para multplicar, 5: potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operaciones == 1){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres sumar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`El resultado de esta suma es: ${resultado}`);
}

else if (operaciones == 2){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres restar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`El resultado de esta resta es: ${resultado}`);
}
else if (operaciones == 3){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres dividir");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`El resultado de esta division es: ${resultado}`);
}
else if (operaciones == 4){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres multiplicar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`El resultado de esta multiplicacion es: ${resultado}`);
}
else if (operaciones == 5){
    let numero1 = prompt("Porfavor ingresa aqui el primer numero que quieres potenciar");
    let numero2 = prompt("Porfavor ingresa aqui el segundo numero que quieres potenciar");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`El resultado de esta potenciacion es: ${resultado}`);
}
else if (operaciones == 6){
    let numero1 = prompt("Porfavor ingresa aqui elnumero de la raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`El resultado de esta raiz cuadrada es: ${resultado}`);
}
else if (operaciones == 7){
    let numero1 = prompt("Porfavor ingresa aqui e lnumero de la raiz cubica ");
    resultado = calculadora.raizCubica(numero1);
    alert(`El resultado de esta raiz cubica es: ${resultado}`);
}
