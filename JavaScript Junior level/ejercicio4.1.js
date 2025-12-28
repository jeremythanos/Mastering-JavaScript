const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Jhon","Jonas","Jason","Jesica","Jessy"],
        matematicas: ["Jeremias","Mateo","Marcos","Maribel","Maria"],
        programacion: ["Pedro","Pablo","Pascal","Patricio","Polondro","Jesica"]
    }
        if(materias[materia]!== undefined){
            return [materias[materia],materia,materias]
        } else{
            return materias;
        }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion != false){
        let profesor = obtenerInformacion(materia)[0][0];
        alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es  <b style='color:red'>${profesor}</b><br>
                        Los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>
            `)
    }
    
}
const cantidadDeClases = (alumno)=>{
    let informacion =  obtenerInformacion();
    let clasesPrensentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPrensentes.push(" " + info);        }
    }
    return `<b style='color:blue'>${alumno}</b> tiene <b>${cantidadTotal}</b> clases <br>
    Esta cursando las clases: <b style='color:green'>${clasesPrensentes} </b><br><br>`
}

mostrarInformacion("fisica")
mostrarInformacion("matematicas")
mostrarInformacion("programacion")

document.write(cantidadDeClases("Jesica"))

