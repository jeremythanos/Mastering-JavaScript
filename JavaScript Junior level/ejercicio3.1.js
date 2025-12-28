class App {
    constructor (descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            console.log("✅ La app fue instalada.");
            alert("La app fue instalada correctamente");
        } else {
            console.log("⚠️ La app ya estaba instalada.");
        }
    }

    abrir(){
        console.log(`📂 Intentando abrir la app. Iniciada: ${this.iniciada}, Instalada: ${this.instalada}`);
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            console.log("🚀 La app fue abierta.");
            alert("La app está abierta");
        } else {
            console.log("❌ No se pudo abrir la app. ¿Está instalada?");
        }
    }

    cerrar(){
        console.log(`🛑 Intentando cerrar la app. Iniciada: ${this.iniciada}, Instalada: ${this.instalada}`);
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            console.log("🔒 La app fue cerrada.");
            alert("La app está cerrada");
        } else {
            console.log("❌ No se puede cerrar porque la app no está abierta.");
        }
    }

    desinstalar(){
        console.log(`📦 Intentando desinstalar la app. Instalada: ${this.instalada}`);
        if(this.instalada == true){
            this.instalada = false;
            console.log("🗑️ La app fue desinstalada.");
            alert("La app fue desinstalada correctamente");
        } else {
            console.log("⚠️ No se puede desinstalar porque no está instalada.");
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

let app = new App("16K de descargas", "5 estrellas", "900MB");
let app2 = new App("1M de descargas", "5 estrellas", "2900MB");
let app3 = new App("1K de descargas", "4 estrellas", "500MB");
let app4 = new App("16K de descargas", "5 estrellas", "900MB");

document.write(`
    ${app.appInfo()}
    <br>
    ${app2.appInfo()}
    <br>
    ${app3.appInfo()}
    <br>
    ${app4.appInfo()}
    `)