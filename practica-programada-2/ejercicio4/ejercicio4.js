
let estudiantes = [
    { nombre: "Ana", apellido: "Mora", nota: 90 },
    { nombre: "Luis", apellido: "Rojas", nota: 75 },
    { nombre: "María", apellido: "Solís", nota: 88 },
    { nombre: "Carlos", apellido: "Vargas", nota: 67 }
];
let lista = document.getElementById("listaEstudiantes");

let suma = 0;
for (let i = 0; i < estudiantes.length; i++) {
    let fila = document.createElement("div");
    fila.className = "actividad";
    fila.textContent = estudiantes[i].nombre + " " + estudiantes[i].apellido;
    lista.appendChild(fila);
    suma = suma + estudiantes[i].nota;
}

let promedio = suma / estudiantes.length;
document.getElementById("promedio").textContent = "Promedio de notas: " + promedio;
