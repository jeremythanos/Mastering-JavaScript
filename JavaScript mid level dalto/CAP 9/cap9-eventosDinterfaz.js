// addEventListener("scroll",()=>{// este sirve para detectar el scroll
//     console.log("Se ha hecho scroll")
// })

const input = document.querySelector(".input-prueba")
const contenedor = document.querySelector(".seleccionado")

input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textCompleto = input.value;
    contenedor.innerHTML = textCompleto.substring(start,end);
})


input.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    nuevoContenido = `La ultima tecla que presionaste fue: <b>${tecla}</b>`;
    contenedor.innerHTML = nuevoContenido;
})