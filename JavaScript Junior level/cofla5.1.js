let trbajo = "240 minutos de trabajo";
let estudio = " 100 minutos de estudios";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

// creamos un blucle para que se ejecute al menos uanas 14 veces o 2 semanas
console.log("%c-----------ESTAS SON LAS TAREAS-----------------", "color: green; font-weight: bold;");
for (var i = 0; i < 14; i++){
    if (i == 0){console.groupCollapsed("Semana 1")}  
    
    console.group(`%cDía ${i + 1}`, "color: red; font-weight: bold;");
console.log(trbajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
    if(i == 7){
        console.groupEnd();
            console.groupCollapsed("Semana 2")
        }
}

console.groupEnd();
console.groupEnd();


