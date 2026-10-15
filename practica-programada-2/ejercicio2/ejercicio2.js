let parrafo = document.getElementById("parrafo");
function cambiarTexto() {
    parrafo.textContent = "¡El texto cambió con JavaScript!";
}
document.getElementById("botonCambiar").addEventListener("click", cambiarTexto);
