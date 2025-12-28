
//------------------------CLASES---------------------------------------------//

// class animal {
//     constructor(nombre, edad, sonido) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sonido = sonido;
//         this.info = `${this.nombre} tiene ${this.edad} años y hace un ${this.sonido} <br>`
//     }
// }
// let perro = new animal("perro", 3, "ladrido");
// let leon = new animal("Leon", 7, "rugido");
// let croco = new animal("crocodilo", 31, "gruñido");

// document.write(perro.info)
// document.write(leon.info)
// document.write(croco.info)

// si creamos una clase dentro de una clase se llama metodo pero si la hacemos fuera de la clase es una funcion

// -----EL POLIMORFISMO--------//
class Animal {
    hablar() {
        console.log("Hace un sonido");
    }
}

class Perro extends Animal {
    hablar() {
        console.log("¡WAW!");
    }
}

let dog = new Perro();
dog.hablar();  // ¡WAW!
