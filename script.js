function enc() {
    var texto = document.getElementById("textito").value;
    var imprimir = document.getElementById("flor");
    var crip = btoa(texto);
    imprimir.innerText = crip
    if (texto === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡No puedo trabajar sin un texto!",
          });
    } 
}
function des() {
    var takataka = document.getElementById("textito").value;
    var imprimir = document.getElementById("flor");
    var descrip = atob(takataka);
    imprimir.innerHTML = descrip
    if (takataka === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡No puedo trabajar sin un texto!",
          });
    } 
}

function guardar() {
    var usuario = document.getElementById("new_user").value;
    var contraseña = document.getElementById("new_contra").value;
    localStorage.setItem ("name", usuario);
    localStorage.setItem ("password", contraseña);
    window.location = "index.html";
}

// function probando() {
// var prueba = document.getElementById("prueba");
//     prueba.innerHTML = localStorage.getItem ("name");
//     console.log(getElementById("name"));
    
// }
// probando();

function inicio() {
    let user = document.getElementById("user").value;
    let contra = document.getElementById("contra").value;
    var prueba = document.getElementById("prueba");
    let nop = "Usuario o contraseña no encontrados. Si no estás registrado create una cuenta."
    
    if (user === localStorage.getItem ("name") && contra === localStorage.getItem ("password")) {
        window.location = "encriptador.html"
    } else {
        prueba.innerHTML = nop
    }
    
}
function cuenta_nueva() {
    window.location = "crearcuenta.html"
}

function hola() {
    let user = localStorage.getItem ("name");
    let saludo = document.getElementById("saludo");
    let mensaje = "¡Hola " + user + "!";
    saludo.innerHTML = mensaje
}
hola()

function registrar() {
    window.location = "index.html";
}