// js/principal.js - Ejercicio 2: Notas de clase

let alumnos = [];
let idSiguiente = 1;
let ordenActual = { columna: null, ascendente: true };

const formulario = document.getElementById("formulario-notas");
const inputNota = formulario.elements.nota;
const vistaPrevia = document.getElementById("vista-previa");
const tbody = document.querySelector("#tabla tbody");
const resumenP = document.getElementById("resumen");
const thead = document.querySelector("#tabla thead");

const pintar = () => {
    // Ordenar con sort() si hay un criterio seleccionado
    let alumnosProcesados = [...alumnos];
    if (ordenActual.columna) {
        alumnosProcesados.sort((a, b) => {
            let resultado = 0;
            if (ordenActual.columna === "alumno") {
                resultado = a.alumno.localeCompare(b.alumno);
            } else if (ordenActual.columna === "nota") {
                resultado = a.nota - b.nota;
            }
            return ordenActual.ascendente ? resultado : -resultado;
        });
    }

    // Pintar filas con map()
    tbody.innerHTML = alumnosProcesados.map(a => {
        const claseNota = a.nota >= 5 ? "aprobado" : "suspenso";
        return `
      <tr>
        <td>${a.alumno}</td>
        <td class="${claseNota}">${a.nota.toFixed(1)}</td>
        <td><button data-id="${a.id}">Borrar</button></td>
      </tr>
    `;
    }).join("");

    // Resumen
    if (alumnos.length === 0) {
        resumenP.textContent = "Sin alumnos";
        return;
    }

    const notaMedia = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length;
    const mejorAlumno = alumnos.reduce((mejor, a) => a.nota > mejor.nota ? a : mejor, alumnos[0]);
    const aprobadosCount = alumnos.filter(a => a.nota >= 5).length;
    const todosAprobados = alumnos.every(a => a.nota >= 5);

    resumenP.innerHTML = `
    <strong>Nota media:</strong> ${notaMedia.toFixed(2)} | 
    <strong>Mejor alumno:</strong> ${mejorAlumno.alumno} (${mejorAlumno.nota.toFixed(1)}) | 
    <strong>Aprobados:</strong> ${aprobadosCount}/${alumnos.length} | 
    <strong>¿Aprueban todos?:</strong> ${todosAprobados ? "Sí" : "No"}
  `;
};

// 1. Vista previa (input)
inputNota.addEventListener("input", (e) => {
    const valor = e.target.value;
    if (valor === "") {
        vistaPrevia.textContent = "";
        vistaPrevia.className = "";
    } else {
        const nota = Number(valor);
        if (nota >= 5) {
            vistaPrevia.textContent = "Aprobado";
            vistaPrevia.className = "aprobado";
        } else {
            vistaPrevia.textContent = "Suspenso";
            vistaPrevia.className = "suspenso";
        }
    }
});

// 2. Añadir (submit)
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const alumno = formulario.elements.alumno.value.trim();
    const nota = inputNota.valueAsNumber;

    alumnos.push({
        id: idSiguiente++,
        alumno,
        nota
    });

    formulario.reset();
    vistaPrevia.textContent = "";
    vistaPrevia.className = "";
    formulario.elements.alumno.focus();
    pintar();
});

// 4. Borrar con delegación en <tbody>
tbody.addEventListener("click", (e) => {
    const boton = e.target.closest("button");
    if (!boton) return;

    const id = Number(boton.dataset.id);
    alumnos = alumnos.filter(a => a.id !== id);
    pintar();
});

// Opcional 1. Ordenar con delegación en <thead>
thead.addEventListener("click", (e) => {
    const th = e.target.closest("th[data-orden]");
    if (!th) return;

    const columna = th.dataset.orden;
    if (ordenActual.columna === columna) {
        ordenActual.ascendente = !ordenActual.ascendente;
    } else {
        ordenActual.columna = columna;
        ordenActual.ascendente = true;
    }
    pintar();
});

// Inicializar estado vacío
pintar();