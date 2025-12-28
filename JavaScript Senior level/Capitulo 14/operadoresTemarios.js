"use strict"

// let valor1 = "valor 1";
// let valor2 = "valor 2";
// let valor3 = "valor 3";

// let arr = ["valor1","valor2","valor3"];
// console.log(valor1,valor2,valor3);
// console.log(...arr)


let arr = ["naraja","manzana","pera"];
let arr2 = ["mango","kiwi","melocoton"]

arr.push(...arr2)
// console.log(arr);
// pero tambien podemos concatenar el array poniendolo en una variable
// como? de la siguiente forma:

let array = ["naraja","manzana","pera"];
let array2 = ["mango","kiwi","melocoton"]

let array3 = [...array,...array2]
console.log(array3);


