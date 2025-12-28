// document.getElementById('js').innerText ="ejercicio numero 3 de cofla"
// -------------------------------------------//
// primero creamos una clase
class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    // ahora vamos a crear los 5 metodos, primero metodo prender
    presionarBtnPrender(){//esto es una funcion
        if(this.encendido == false){
            document.write(`El celular ya esta prendido<br>`);
            this.encendido = true;
        } else{
            document.write("el celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){//esto es una funcion
        if(this.encendido == true){
            document.write(`El celular se reinicio<br>`);
        }else{
            document.write(`El celular esta apagado<br>`);
        }
    }

    TomarFoto(){//esto es una funcion
        document.write(`El celular tomo una foto en una resolucion de: ${this.resolucionDeCamara}<br>`);
    }
    GrabarVideo(){//esto es una funcion
        document.write(`El celular grabo un video en una resolucion de: ${this.resolucionDeCamara}<br>`);
    }
    mobileInfo() {
        return `Color del celular: <b>${this.color}</b><br>
        Peso del celular: <b>${this.peso}</b><br>
        Resolución de Pantalla: <b>${this.resolucionDePantalla}</b><br>
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>`;
    }
}

//ahora vamos a crear los objetos de la clase celulares
const celular1 = new Celular("negro","150g","5p","4k","8gb");
const celular2 = new Celular("blanco","160g","7p","HD","4gb");
const celular3 = new Celular("gris","170g","8p","UHD","16gb");

// ahora a llamar los metodos
// celular1.presionarBtnPrender();
// celular1.reiniciar();
// celular1.TomarFoto();
// celular1.GrabarVideo();

document.write(`${celular1.mobileInfo()}`);
