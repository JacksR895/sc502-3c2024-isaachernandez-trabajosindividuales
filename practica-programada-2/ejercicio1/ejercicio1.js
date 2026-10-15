
let campoSalario = document.getElementById("salarioBruto");
let mensaje = document.getElementById("mensaje");
let porcentajeCargas = 0.1083;

function calcularRenta(salario) {
    let impuesto = 0;
    if (salario > 4727000) {
        impuesto = impuesto + (salario - 4727000) * 0.25;
        salario = 4727000;
    }
    if (salario > 2364000) {
        impuesto = impuesto + (salario - 2364000) * 0.20;
        salario = 2364000;
    }
    if (salario > 1347000) {
        impuesto = impuesto + (salario - 1347000) * 0.15;
        salario = 1347000;
    }
    if (salario > 918000) {
        impuesto = impuesto + (salario - 918000) * 0.10;
    }
    return impuesto;
}
function calcular() {
    let salario = Number(campoSalario.value);
    if (campoSalario.value === "" || salario <= 0) {
        mensaje.textContent = "Ingresá un salario mayor a 0.";
        mensaje.className = "mensaje mensaje-error";
        return;
    }
    let cargas = salario * porcentajeCargas;
    let renta = calcularRenta(salario);
    let neto = salario - cargas - renta;

    document.getElementById("cargasSociales").textContent = "₡" + cargas.toFixed(2);
    document.getElementById("impuestoRenta").textContent = "₡" + renta.toFixed(2);
    document.getElementById("salarioNeto").textContent = "₡" + neto.toFixed(2);
    mensaje.textContent = "Cálculo realizado.";
    mensaje.className = "mensaje mensaje-bien";
}
document.getElementById("botonCalcular").addEventListener("click", calcular);
