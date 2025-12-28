"use strict"

const IDBRequest = indexedDB.open("thanosBase,1");
//esto sirve para si iniciamos una base de datos y la misma no ha sido creada, entonces esta la crea y luego la inicia */

//------------> inicio de bloque de escuchadores <---------------------------//
IDBRequest.addEventListener("upgradeneeded",()=>{ // esto es un callback btw
    const dbthanos = IDBRequest.result;
    dbthanos.createObjectStore("nombres",{autoIncrement:true})
    console.log("Se creo la base de datos con exito✅");
})

IDBRequest.addEventListener("success",()=>{
    leerObjetos();
})

IDBRequest.addEventListener("error",()=>{
    console.log("Hay un error al abrir la base de datos⚠️");
})

document.getElementById('add').addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
    agregarObjeto({nombre});
    leerObjetos ()
    }
})

//------------> fin de bloque de escuchadores <---------------------------//

// ---------> ahora vamos a crear objetos----------------------

const agregarObjeto = objeto =>{
    const dataBaseDatos = funcionObtenerInfo("readwrite","Objeto agregado correctamente✅⚠️");
        dataBaseDatos.add(objeto);
} 

const leerObjetos = ()=>{
    const dataBaseDatos = funcionObtenerInfo("readonly");
        const cursor =  dataBaseDatos.openCursor();
        const fragment = document.createDocumentFragment();
        document.querySelector(".nombres").innerHTML = "";
        console.log("leyendo objetos...")
        cursor. addEventListener("success", ()=>{
                if (cursor.result) {
                
                let elemento = nombresHTML(cursor.result.key,cursor.result.value);
                fragment.appendChild(elemento)


                cursor.result.continue()//si no pongo esto solo lee 1er objeto
                } else document.querySelector(".nombres").appendChild(fragment);
            })
}

const modificarObjeto = (key, objeto) => {
    const dataBaseDatos = funcionObtenerInfo("readwrite","Objeto modificado correctamente✅⚠️");
        dataBaseDatos.put(objeto,key);
}

const eliminarObjeto = (key)=>{
    const dataBaseDatos = funcionObtenerInfo("readwrite","Objeto eliminado correctamente✅⚠️");
        dataBaseDatos.delete(key);
}

//en el video dalto nos hace darnos cuenta que en las cuatros funciones (agregar, leer,modificar y eliminar algun elemento) hay 3 lineas que se repiten cada una que son:
//las const db/ const IDBtransaction Y const objectStore, entonces el dice que para optimizar el codigo, creamos una nueva funcion para hacer eso!

// --->funcion para que nos obtenga la data<-----//
const funcionObtenerInfo = (mode,msg)=>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres"); 
        IDBtransaction.addEventListener("complete",()=>console.log(msg))   
                    return objectStore;
}

const nombresHTML = (id,name)=>{
    const container = document.createElement('DIV');
    const H2 = document.createElement('h2');
    const options = document.createElement('DIV');
    const saveButton = document.createElement('DIV');
    const deleteButton = document.createElement('DIV');

    container.classList.add("nombres");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    H2.textContent = name.nombre;
    H2.setAttribute("contenteditable","true");
    H2.setAttribute("spellcheck","false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);
    
    container.appendChild(H2);
    container.appendChild(options);

    H2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible")
    })

    saveButton.addEventListener("click",()=>{
        if(saveButton.className == "posible"){
            modificarObjeto(id,{nombre:H2.textContent});
            saveButton.classList.replace("posible","imposible")
        }
    })


    deleteButton.addEventListener("click",()=>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;
}