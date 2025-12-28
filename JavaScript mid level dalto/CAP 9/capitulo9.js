// const btn = document.querySelector(".btn");
// btn.addEventListener("click",()=>{
//     alert("Hola Thanos");
// });

// const contenerdor = document.querySelector(".contenedor");// para mouse







// si le agregamos 'true' podemos priorizar uno encima que otro



// contenerdor.addEventListener("mouseout",(e)=>{
//     alert("Le has dado click al contenedor azul")
// })


// sinceramente ese me gusto mucho ya que este hace una accion por sacer el mouse
//fuera del rango  de un elemento



// -----eventos de teclado-------'

const input = document.querySelector(".input-prueba");// para teclado

input.addEventListener("keydown",(e)=>{  
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress",(e)=>{  
    console.log("un usario presiono una tecla");
    alert("ay que rico papi");
});


input.addEventListener("keyup",(e)=>{  
    console.log("una tecla fue soltada");
});

console.log("hola jeremy")