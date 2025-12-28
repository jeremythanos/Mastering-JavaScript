// Botón que enviará la nota escrita por el usuario
const sendButton = document.getElementById('snd-nota');

// Evento que se ejecuta cuando se hace clic en el botón
sendButton.addEventListener("click", () => {
    let resultadoHTML, mensajeTexto;

    try {
        // Obtenemos el valor ingresado en el input con id "nota"
        const notaIngresada = parseInt(document.getElementById('nota').value);

        // Validamos si lo ingresado es un número
        if (isNaN(notaIngresada)) {
            throw "Dato no válido"; // Dispara el catch si no es un número
        }

        // Calculamos el promedio entre 8, 5 y la nota ingresada por el usuario
        const promedio = (8 + 5 + notaIngresada) / 3;

        // Redondeamos el promedio para pasar un número entero al switch
        const notaFinal = Math.round(promedio);

        // Obtenemos el mensaje personalizado según la nota redondeada
        mensajeTexto = definirMensaje(notaFinal);

        // Asignamos el resultado (APROBADO o DESAPROBADO) con color
        resultadoHTML = promedio >= 7 
            ? "<span class='green'>APROBADO</span>" 
            : "<span class='red'>DESAPROBADO</span>";

    } catch (error) {
        // En caso de error, se muestran estos valores
        resultadoHTML = "<span class='red'>¿Eres un Payaso?</span>";
        mensajeTexto = "He detectado que has enviado un dato que no es válido.";
    }

    // Finalmente, mostramos el resultado en un modal
    abrirModal(resultadoHTML, mensajeTexto);
});


// Esta función devuelve un mensaje dependiendo de la nota final (entera)
const definirMensaje = (nota) => {
    let mensaje;

    switch (nota) {
        case 1:
            mensaje = '¡Uf! Eso está medio flojo, mi herma. Hay que meterle ma\' coco.';
            break;
        case 2:
            mensaje = 'Mmm, insuficiente. Ponte las pilas pa\' la próxima.';
            break;
        case 3:
            mensaje = 'Suficiente... Ni fu ni fa, pero pasa.';
            break;
        case 4:
            mensaje = '¡Ta\' bien! Vas por buen camino, sigue así.';
            break;
        case 5:
            mensaje = 'Notable, ¡dando la para! Ya tú sabes.';
            break;
        case 6:
            mensaje = 'Considerable, ¡eso e\' asina! Echando pa\' lante.';
            break;
        case 7:
            mensaje = '¡Agradable, loco! Te está yendo jevi.';
            break;
        case 8:
            mensaje = '¡En mejora, claro que sí! Sigue rompiendo.';
            break;
        case 9:
            mensaje = '¡Excelente, manín! La estás dando dura.';
            break;
        case 10:
            mensaje = '¡Sobresaliente, coñ...! ¡Un duro de verdad! Demostrando tu nivel.';
            break;
        default:
            mensaje = 'Mmm, parece que algo no cuadra con esa nota.';
    }

    return mensaje;
}


// Esta función se encarga de abrir el modal y mostrar los resultados
const abrirModal = (resultado, mensaje) => {
    // Insertamos el resultado (APROBADO/DESAPROBADO) en el h3 con clase 'resultado'
    document.querySelector(".resultado").innerHTML = resultado;

    // Insertamos el mensaje correspondiente
    document.querySelector(".mensaje").innerHTML = `<b>Tu Prueba: </b>${mensaje}`;

    // Mostramos el modal que estaba oculto por CSS
    const modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 0s forwards"; // Puedes ajustar la animación en CSS
}
