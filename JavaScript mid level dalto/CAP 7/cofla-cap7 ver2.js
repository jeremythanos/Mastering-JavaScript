let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;


let html = `Protocolo: <b>${protocol}</b><br>
            URL: <b>${href}</b><br>
            Pathname: <b>${pathname}</b><br>
            Hostname : <b>${hostname}</b>`

            document.write(html)