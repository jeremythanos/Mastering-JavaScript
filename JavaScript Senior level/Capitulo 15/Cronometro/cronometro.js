"use strick"
const addCeros = n => {
    if (n.toString().length < 2) return "0".concant(n);
        return n;
}
const actualizarHora = ()=>{
    const time = new Date();
    let hora = addCeros(time.getHours());
    let minutos = addCeros(time.getMinutes());
    let segundos = addCeros(time.getSeconds());
    // documents selectors
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}

setInterval(actualizarHora,1000) 