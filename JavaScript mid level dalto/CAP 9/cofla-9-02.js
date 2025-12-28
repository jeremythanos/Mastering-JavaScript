

alumnos = [{
    nombre: "Jeremy Paulino",
    email: "paulinotav1017@gmail.com",
    materia: "Fisca 3"
},{
    nombre: "Emeline Paulino",
    email: "emipaulino@gmail.com",
    materia: "Fisca 4"
},{
    nombre: "Marcos Lower",
    email: "paulinomarcos@gmail.com",
    materia: "Fisca 5"
},{
    nombre: "Liana paulino",
    email: "lianaMarie@gmail.com",
    materia: "Ingles tecnico"
}];


const boton = document.querySelector(".boton-confirmar");


for (alumno in alumnos){
        let datos = alumnos[alumno];//raiz x las variables de mas abajo
        let nombre = datos["nombre"];
        let email = datos ["email"];
        let materia = datos["materia"]
        let htmlCode = `
            <div class="gird-item nombre">${nombre}</div>
            <div class="gird-item email">${email}</div>
            <div class="gird-item materia">${materia}</div>
            <div class="gird-item semana"> 
                <select class="semana-elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value=" Semana 2">Semana 2</option>
                    <option value="Semana 3">Semana 3</option>
                </select>
        </div>`;
        document.querySelector(".grid-container").innerHTML += htmlCode;
    }
    
    boton.addEventListener("click",()=>{
        let confirmar = confirm("¿Deseas confirmar las Mesas?");
        if (confirmar){
            // para remover el boton una vez se confirmer la mesa
            document.body.removeChild(boton);
            let elementos = document.querySelectorAll(".semana");
            let semanasElegidas = document.querySelectorAll(".semana-elegida");
            for (elemento in elementos){
                semana = elementos[elemento];
                semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})
    
