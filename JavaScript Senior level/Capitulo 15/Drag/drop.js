"use strict"; // <-- FIX: Error de escritura ("strick" -> "strict")

const zona = document.querySelector(".zona");

// Esta función transfiere los datos
const transferirTexturas = (n, e) => {
  e.dataTransfer.setData("textura", n); // <-- FIX: Error de escritura ("Trasnsfer" -> "dataTransfer")
};

// Evento para cuando el elemento está SOBRE la zona
zona.addEventListener("dragover", (e) => {
    e.preventDefault();
});

// Evento para cuando SUELTAS el elemento en la zona
zona.addEventListener("drop", (e) => { // <-- FIX: Necesitamos la '(e)' para recibir los datos
  e.preventDefault(); // Prevenimos el comportamiento por defecto

  // 1. Obtenemos el número (1, 2, o 3) que guardamos
    const n = e.dataTransfer.getData("textura");

    // 2. Creamos la URL de la imagen correcta basándonos en el número
    let imagenFondo = "";
    if (n === "1") {
        imagenFondo = "url('color-mamei.jpg')";
    } else if (n === "2") {
        imagenFondo = "url('color-azul.jpg')";
    } else if (n === "3") {
        imagenFondo = "url('color-rosado.jpg')";
    }

  // 3. Aplicamos la imagen correcta al fondo de la 'zona'
  zona.style.background = imagenFondo; // <-- FIX: Lógica de fondo
});

// --- EL BUCLE ---
// Aquí creamos los eventos para cada textura arrastrable

// <-- FIX: La condición del bucle era incorrecta (le faltaba el <=)
    for (let i = 1; i <= document.querySelector(".texturas").children.length; i++) {
    
    // <-- FIX: El selector estaba mal, buscaba una etiqueta "1" en lugar de la clase ".textura1"
    document.querySelector(`.textura${i}`).addEventListener(
        "dragstart",
        (e) => transferirTexturas(i, e) // Esto envía el número (1, 2, o 3)
    );
    }