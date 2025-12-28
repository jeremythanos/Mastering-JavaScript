// --------declaracion de variable---------------------
const materiasHTML = document.querySelector(".materias");

// vamosa crear un objeto para obtener la meteria
const materias = [
  {
    nombre: "Fisca cuantica 4",
    nota: 7,
  },
  {
    nombre: "Programacion asincronica 5",
    nota: 10,
  },
  {
    nombre: "Programacion orientada a objetos 6",
    nota: 8,
  },
  {
    nombre: "Matematicas discretas 7",
    nota: 9,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    materia = materias[id];
    if (materia == undefined) reject("La materia no existe");
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 400);
  });
};

// para obtener la materia en la consola
const devolverMaterias = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
    materiasHTML.innerHTML += newHTMLCode;
  }
}

devolverMaterias();
