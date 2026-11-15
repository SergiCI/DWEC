// Ejercicio 2.1 · Reserva de viaje (versión inicial)
const formulario = document.getElementById('reserva');
const inputEntrada = formulario.elements.entrada;
const inputSalida = formulario.elements.salida;
const inputPersonas = formulario.elements.personas;
const totalElement = document.getElementById('total');
const resultado = document.getElementById('resultado');

const PRECIO_NOCHE_PERSONA = 50;

// 1. Desactivar la validación del navegador y fijar las fechas mínimas (hoy)
formulario.noValidate = true;

const hoyISO = new Date().toISOString().split("T")[0];
if (inputEntrada) inputEntrada.min = hoyISO;
if (inputSalida) inputSalida.min = hoyISO;

const obtenerCampos = () => Array.from(formulario.elements).filter(el => el.matches("input, select, textarea"));

// 2. Función mostrarError(campo), como en el ejercicio 1.1
const mostrarError = (campo) => {
    const errorElement = document.getElementById(`error-${campo.name}`);

    if (errorElement) {
        errorElement.textContent = campo.validationMessage;
    }

    if (campo.validity.valid) {
        campo.classList.remove("con-error");
        return true;
    } else {
        campo.classList.add("con-error");
        return false;
    }
};

// 3. Función comprobarReglas(): la salida debe ser posterior a la entrada (setCustomValidity)
const comprobarReglas = () => {
    if (inputEntrada && inputSalida && inputEntrada.value && inputSalida.value) {
        const fechaEntrada = new Date(inputEntrada.value);
        const fechaSalida = new Date(inputSalida.value);

        if (fechaSalida <= fechaEntrada) {
            inputSalida.setCustomValidity("La fecha de salida debe ser posterior a la de entrada.");
        } else {
            inputSalida.setCustomValidity("");
        }
    } else {
        if (inputSalida) inputSalida.setCustomValidity("");
    }
};

// 4. Funciones calcularNoches() y calcularTotal()
const calcularNoches = () => {
    if (!inputEntrada || !inputSalida || !inputEntrada.value || !inputSalida.value) return 0;
    const diffMilisegundos = new Date(inputSalida.value) - new Date(inputEntrada.value);
    const noches = diffMilisegundos / 86400000;
    return isNaN(noches) || noches < 0 ? 0 : noches;
};

const calcularTotal = () => {
    const personas = inputPersonas ? inputPersonas.valueAsNumber : 0;
    const numPersonas = isNaN(personas) ? 0 : personas;
    const noches = calcularNoches();

    const importeTotal = numPersonas * noches * PRECIO_NOCHE_PERSONA;
    if (totalElement) {
        totalElement.textContent = `${importeTotal.toFixed(2)} €`;
    }
    return importeTotal;
};

// Actualizar el total dinámicamente cada vez que ocurra un cambio en el formulario
formulario.addEventListener("input", () => {
    comprobarReglas();
    calcularTotal();
});

// 5. Eventos input y focusout en el formulario
formulario.addEventListener("focusout", (e) => {
    if (e.target.matches("input, select, textarea")) {
        comprobarReglas();
        mostrarError(e.target);
        // Si cambia la entrada y ya hay salida, revalida también la salida
        if (e.target === inputEntrada && inputSalida.value) {
            mostrarError(inputSalida);
        }
        calcularTotal();
    }
});

formulario.addEventListener("input", (e) => {
    if (e.target.matches("input, select, textarea")) {
        comprobarReglas();
        if (e.target.classList.contains("con-error") || e.target === inputSalida || e.target === inputEntrada) {
            mostrarError(e.target);
            if (e.target === inputEntrada && inputSalida.value) {
                mostrarError(inputSalida);
            }
        }
        calcularTotal();
    }
});

// 6. Evento submit: valida todos los campos y muestra el resumen de la reserva
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (resultado) resultado.textContent = "";

    comprobarReglas();
    const campos = obtenerCampos();
    const camposConErrores = campos.filter(campo => !mostrarError(campo));

    if (camposConErrores.length > 0) {
        camposConErrores[0].focus();
    } else {
        const formData = new FormData(formulario);
        const noches = calcularNoches();
        const importeTotal = calcularTotal();

        let resumen = `Resumen de la reserva:\n`;
        for (let [clave, valor] of formData.entries()) {
            resumen += `- ${clave}: ${valor}\n`;
        }
        resumen += `- Noches: ${noches}\n`;
        resumen += `- Total estimado: ${importeTotal.toFixed(2)} €`;

        if (resultado) {
            resultado.textContent = resumen;
        }
    }
});

// 7. Evento reset
formulario.addEventListener("reset", () => {
    if (resultado) resultado.textContent = "";
    if (totalElement) totalElement.textContent = "0.00 €";
    if (inputSalida) inputSalida.setCustomValidity("");

    obtenerCampos().forEach(campo => {
        campo.classList.remove("con-error");
        const errorElement = document.getElementById(`error-${campo.name}`);
        if (errorElement) errorElement.textContent = "";
    });
});

// Calcular total inicial por defecto
calcularTotal();