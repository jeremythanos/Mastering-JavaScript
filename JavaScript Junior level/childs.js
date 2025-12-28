const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHtml = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "este es el nuevo titulo que fue remplazado"

h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo, h2_antiguo);


