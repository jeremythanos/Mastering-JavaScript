// Selecciona el contenedor principal del DOM donde se agregarán las llaves
const contenedor = document.querySelector(".flex-container");

// Función para crear los elementos HTML de una llave
function crearLlave(nombre, modelo, precio) {
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

// Crea un fragmento de documento para optimizar la inserción en el DOM
let documentFragment = document.createDocumentFragment();

// Bucle para crear 20 llaves con datos aleatorios
for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.addEventListener("click",()=>{document.querySelector(".key-data").value = modeloRandom
    });
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave.join('');
    documentFragment.appendChild(div);  // Añade el div al fragmento de documento
}

// Añade todos los elementos del fragmento al contenedor principal
contenedor.appendChild(documentFragment);
