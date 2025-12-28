// class Persona{
// 	constructor(nombre,instagram){
// 		this.nombre = nombre;
// 		this.instagram = instagram
// 	}
// }

// console.log(new Persona("Jeremy Paulino", "@_jeremypaulino.js"))

// const data = [
// 	["Thanos titan","@thanos"],
// 	["Angel Pichardo","@angel"],
// 	["Emi Ngitala","@Emeline"],
// 	["Victor Doom","@drdoom"]
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++){
	
// 	personas[i] = new Persona(data[i][0],data[i][1]);
// }

// // console.log(personas)

// // vamos a crear una funcion afuera que nos devuelva el nombre de usario

// const obtenerPersona = (id,cb)=>{
// 	if(personas[id] == undefined){
// 		cb("No se ha encontrado la persona❌");
// 	}else{
// 		cb(null,personas[id],id)
// 	}

// } 
// // para obtener ig, yo copie la misma funcion de arriba y la edite xd
// const obtenerInstagram = (id,cb)=>{
// 	if(personas[id].instagram == undefined){
// 		cb("No se ha encontrado el Intagram de la persona❌");
// 	}else{
// 		cb(null,personas[id].instagram)
// 	}

// } 

// obtenerPersona (2,(err,persona,id)=>{
// 	if(err) console.log(err);

// 	else{
// 		console.log(persona.nombre);
// 		obtenerInstagram(id,(err,instagram)=>{

// 			if (err)console.log(err);
// 			else console.log(instagram);
// 		});
// 	}
// }
// )


// comente el codigo de arriba para seguir y aprender las promesas en js, para miercoles 6 de agosto 2025

// let nombre = "pedro" ;

// const promesa = new Promise((resolve,reject)=>{
//     if(nombre !=="pedro") reject("Lo siento, el nombre no es pedro");
//     // else resolve(nombre)
// })
// promesa.then((resultado)=>{
//     console.log(resultado)
// })

//este parte de aui abajo es lo mismo pero solo para ver la diferencia \ basicamente la parte 2
class Persona{
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram
	}
}

// console.log(new Persona("Jeremy Paulino", "@_jeremypaulino.js"))

const data = [
	["Thanos titan","@thanos"],
	["Angel Pichardo","@angel"],
	["Emi Ngitala","@Emeline"],
	["Victor Doom"]
];

const personas = [];

for (let i = 0; i < data.length; i++){
	
	personas[i] = new Persona(data[i][0],data[i][1]);
}

// console.log(personas)

// vamos a crear una funcion afuera que nos devuelva el nombre de usario

const obtenerPersona = (id)=>{
return new Promise ((resolve,reject)=>{
        if (personas[id] == undefined ) reject("Lo Siento, No se ha encontrado la persona que buscas❌");
		else {resolve(personas[id])}
    })

} 
// para obtener ig, yo copie la misma funcion de arriba y la edite xd
const obtenerInstagram = (id)=>{
	return new Promise((resolve,reject)=>{
		if (personas[id].instagram == undefined) reject("Lo siento,No se ha encontrado el istagram del usuario❌")
			else {resolve(personas[id].instagram)}
	})
} 

// creo la variable id solo para jugar con los datos
let id = 4

obtenerPersona(id).then((persona)=>{
	console.log(persona.nombre);
	return obtenerInstagram(id) ;
}).then((instagram)=>{
	console.log(instagram)
}).catch((e)=>{
	console.log(e)
})

