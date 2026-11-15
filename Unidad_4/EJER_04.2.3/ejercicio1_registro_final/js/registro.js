// Ejercicio 1.2 · Registro de usuario (versión final)
// Copia aquí tu solución del ejercicio 1.1 y amplíala siguiendo el enunciado.
// import { mostrarError, validarFormulario, limpiarErrores } from './validaciones.js';

const formulario = document.getElementById('registro');
const resultado = document.getElementById('resultado');

import { mostrarError, limpiarErrores } from './validaciones.js';

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const resultado = document.querySelector("#resultado");
    const selectPais = formulario.elements.pais;
    const inputNacimiento = formulario.elements.nacimiento;
    const inputCorreo = formulario.elements.correo;
    const inputRepiteCorreo = formulario.elements.repiteCorreo; // Ajustar según name en HTML
    const inputPassword = formulario.elements.contrasena;         // Ajustar según name en HTML
    const inputRepitePassword = formulario.elements.repiteContrasena; // Ajustar según name en HTML

    // 1. Desactivar validación nativa
    formulario.noValidate = true;

    // 2. Rellenar lista de países con new Option() y limitar fecha máxima a hoy
    const paises = ["España", "Francia", "Italia", "Portugal"];
    if (selectPais) {
        paises.forEach(pais => {
            selectPais.add(new Option(pais, pais));
        });
    }

    const hoyISO = new Date().toISOString().split("T")[0];
    if (inputNacimiento) {
        inputNacimiento.max = hoyISO;
    }

    // 3. Reglas propias con setCustomValidity()
    const comprobarReglas = () => {
        // Validar coincidencia de correos
        if (inputCorreo && inputRepiteCorreo && inputRepiteCorreo.value) {
            if (inputRepiteCorreo.value !== inputCorreo.value) {
                inputRepiteCorreo.setCustomValidity("Los correos electrónicos no coinciden.");
            } else {
                inputRepiteCorreo.setCustomValidity("");
            }
        } else if (inputRepiteCorreo) {
            inputRepiteCorreo.setCustomValidity("");
        }

        // Validar coincidencia de contraseñas
        if (inputPassword && inputRepitePassword && inputRepitePassword.value) {
            if (inputRepitePassword.value !== inputPassword.value) {
                inputRepitePassword.setCustomValidity("Las contraseñas no coinciden.");
            } else {
                inputRepitePassword.setCustomValidity("");
            }
        } else if (inputRepitePassword) {
            inputRepitePassword.setCustomValidity("");
        }

        // Validar mayoría de edad (>= 18) teniendo en cuenta mes y día
        if (inputNacimiento && inputNacimiento.value) {
            const nacimiento = new Date(inputNacimiento.value);
            const hoy = new Date();

            let edad = hoy.getFullYear() - nacimiento.getFullYear();
            const mesActual = hoy.getMonth();
            const mesNacimiento = nacimiento.getMonth();
            const diaActual = hoy.getDate();
            const diaNacimiento = nacimiento.getDate();

            if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
                edad--;
            }

            if (edad < 18) {
                inputNacimiento.setCustomValidity("Debes ser mayor de edad (18 años o más).");
            } else {
                inputNacimiento.setCustomValidity("");
            }
        } else if (inputNacimiento) {
            inputNacimiento.setCustomValidity("");
        }
    };

    // 6. Escuchadores de eventos en el formulario (Delegación)
    formulario.addEventListener("focusout", (e) => {
        if (e.target.matches("input, select, textarea")) {
            comprobarReglas();
            mostrarError(e.target);
        }
    });

    formulario.addEventListener("input", (e) => {
        if (e.target.matches("input, select, textarea")) {
            comprobarReglas();
            // Revalidar campos dependientes si cambian los originales
            if (e.target === inputCorreo && inputRepiteCorreo.value) {
                mostrarError(inputRepiteCorreo);
            }
            if (e.target === inputPassword && inputRepitePassword.value) {
                mostrarError(inputRepitePassword);
            }
            if (e.target.classList.contains("con-error") || e.target === inputNacimiento) {
                mostrarError(e.target);
            }
        }
    });

    // Evento submit
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if (resultado) resultado.textContent = "";

        comprobarReglas();

        const campos = Array.from(formulario.elements).filter(el => el.matches("input, select, textarea"));
        let primerInvalido = null;
        let todoValido = true;

        campos.forEach(campo => {
            const esValido = mostrarError(campo);
            if (!esValido) {
                todoValido = false;
                if (!primerInvalido) primerInvalido = campo;
            }
        });

        if (!todoValido) {
            if (primerInvalido) primerInvalido.focus();
        } else {
            const formData = new FormData(formulario);
            const datos = Object.fromEntries(formData.entries());

            // Eliminar claves sensibles del objeto JSON final
            delete datos.contrasena;
            delete datos.repiteContrasena;

            if (resultado) {
                resultado.textContent = JSON.stringify(datos, null, 2);
            }
        }
    });

    // 8. Evento reset usando limpiarErrores()
    formulario.addEventListener("reset", () => {
        if (resultado) resultado.textContent = "";
        limpiarErrores(formulario);
    });
});