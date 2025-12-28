const materias = {
    fisica: [90,9,4,"fisica"],
    matematica: [85,8,4,"matematica"],
    Geometria:[92,7,2,"Geometria"],
    programacion: [100,6,4,"programcion"],
    quimica: [94,8,3,"quimica"],
    ingles: [90,9,4,"ingles"],
    algebra: [81,8,4,"algebra"],
    calculo: [77,8,4,"calculo"]
}

const aprobo = ()=>{
    for (materia in materias){//aqui se usa una variable local 'materia'

        let asistencias = materias[materia][0];
        let promedio = materias[materia] [1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);//para mostrar el nombre de las materias antes de mostrar si paso o se quemo


    if (asistencias >= 90) {
            console.log("%c  Asistencias en orden✅", "color:green");
        } else {
            console.log("%c  Falta de asistencias❌", "color:red");
        }

        if (promedio >= 7) {
            console.log("%c  Promedio en orden✅", "color:green");
        } else {
            console.log("%c  Promedio insuficiente❌", "color:red");
        }

        if (trabajos >= 3) {
            console.log("%c  Trabajos en orden✅", "color:green");
        } else {
            console.log("%c  Falta de trabajos❌", "color:red");
        }
    }
}


aprobo()