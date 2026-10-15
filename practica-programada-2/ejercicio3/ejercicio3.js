let campoEdad = document.getElementById("edad");
let mensaje = document.getElementById("mensaje");

function revisarEdad() {
    let edad = Number(campoEdad.value);
    if (campoEdad.value === "" || edad < 0) {
        mensaje.textContent = "Ingresá una edad válida.";
        mensaje.className = "mensaje mensaje-error";
    } else if (edad > 18) {
        mensaje.textContent = "Eres mayor de edad.";
        mensaje.className = "mensaje mensaje-bien";
    } else {
        mensaje.textContent = "Eres menor de edad.";
        mensaje.className = "mensaje mensaje-aviso";
    }
}document.getElementById("botonRevisar").addEventListener("click", revisarEdad);
