// Texto original y modificado
let texto1 = "Hola, soy Jeremy.";
let texto2 = "Hola, soy Jeremy!";


async function hash(texto) {
  let buffer = new TextEncoder().encode(texto);              // Codifica el texto a bytes
  let hash = await crypto.subtle.digest("SHA-256", buffer);  // Aplica función hash al texto
  return [...new Uint8Array(hash)]                           // Convierte buffer en array
         .map(b => b.toString(16).padStart(2, '0'))          // Convierte a hex
         .join('');                                          // Une todo en un string
}

// ---------------Mostrar hashes en consola------------------------//
hash(texto1).then(h => console.log("Texto Hash Original:", h));
hash(texto2).then(h => console.log("Texto Hash Modificado:", h));
