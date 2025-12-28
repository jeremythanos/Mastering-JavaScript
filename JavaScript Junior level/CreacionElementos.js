const contenedor = document.getElementById("contenedor");
const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const item = document.createElement("li");
    item.textContent = "THANOS el segundo villano mas fuerte del universo";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);