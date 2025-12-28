let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto de esta pantalla es: ${alto},  y el ancho de esta pantalla es: ${ancho}`)

// creamos una condicional para que muestre el estado de la compra

if (comprar){
    alert("La compra ha sido confirmada")
}else{
    alert("La compra ha sido cancelada")
}