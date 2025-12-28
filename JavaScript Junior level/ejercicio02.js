// document.getElementById("js").innerHTML = "esta funcionando bien"


// primero creacmos un for para que hago lo que queremos 
let cantidad = prompt("¿Cuantos alumnos son?")
let alumnosTotales = []

for (i=0; i<cantidad; i++){
    alumnosTotales[i] = [prompt("Ingrese el nombre del alumno" + (i+1)),0]
}

// crear una funcion para la lista:
const laLista = (nombre,p)=>{
    let presencia = prompt(nombre)
        if(presencia=="p" || presencia =="P"){
            alumnosTotales[p][1]++
        }
}

// ahora creamos un "for in":
for (i=0;i<30;i++){
    for(alumno in alumnosTotales){
        laLista(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ________________Asistencias: ${alumnosTotales[alumno][1]} <br>
    ________________Ausencias: ${30-alumnosTotales[alumno][1]} <br>
<br>
    
    `
}

// una validacion rapida para que sepa si paso o se quemo:
if (30 - alumnosTotales[alumno][1] > 18){
    resultado+= `<b style='color:red'>Se quemo la materia</b>`
}else{
    resultado+= `<b style='color:green'>Aprobó la materia</b>`
}

