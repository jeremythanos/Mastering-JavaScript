"use strict";

const archivo = document.getElementById('archivo');
    archivo.addEventListener('change', (e) => {
                leerArchivo(archivo.files)
});

const leerArchivo = ar => {
    for (let index = 0; index < ar.length; index++) {
        const reader  = new FileReader();
            reader.readAsDataURL(ar[index]);
            reader.addEventListener("load",(e)=>{
                let newImg = `<img src='${e.currentTarget.result}'>`;
                document.querySelector(".resultado").innerHTML += newImg;
            })
    }
}

