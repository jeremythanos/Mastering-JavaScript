const getInfo = async () => {
  //usaremos try and catch para manejar los errores ej: la api esta mal
  let aprobados = document.querySelector(".num-aprobados");
  let desaprobados = document.querySelector(".num-desaprobados");
  try {
    resultado = await axios("informacion.txt");
    aprobados.innerHTML = resultado.data.aprobados;
    desaprobados.innerHTML = resultado.data.desaprobados;
  } catch (e) {
    aprobados.innerHTML = "La API ha fallado o no se encuentra disponible";
    desaprobados.innerHTML = "La API ha fallado o no se encuentra disponible";
  }
};
document.getElementById("getInfo").addEventListener("click", getInfo);
