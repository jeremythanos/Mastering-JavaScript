const zona = document.querySelector(".zona-arrastre");

// para cuando arratro el elemento 1ra vez cambie de color
zona.addEventListener("dragover", e =>{
    e.preventDefault();
    changeStyle(e.srcElement,"#f22");
})
// para cuando sasco el elemento de la zona vuelva al color
//orginal
zona.addEventListener("dragleave", e =>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");

})

zona.addEventListener("drop",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
    cargarArchivo(e.dataTransfer.files[0]);
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

//para cargar los archivos 
const cargarArchivo = e =>{
    const reader = new FileReader();
    reader.readAsText(e);
    reader.addEventListener("load",e =>{
        document.querySelector('.resultado').textContent = 
            e.currentTarget.result
    })
}

//copia ajustada para los videos
const cargarArchivoo = e =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("load",e =>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type: 'video/mp4'})
        let url = URL.createObjectURL(video);
        let img = document.createElement('VIDEO');
        img.setAttribute("src",url);
        document.querySelector('.resultado').appendChild(img);
        })
}

console.log("hola");