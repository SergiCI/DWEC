// Ejercicio 1.1 · Registro de usuario (versión inicial)
const formulario = document.getElementById('registro');
const resultado = document.getElementById('resultado');

// 1. Desactivar la validación del navegador (noValidate)
formulario.noValidate = true;

//Obtener todos los campos interactivos del formulario
const obtenerCampos = () => Array.from(formulario.elements).filter(el => el.matches("input, select, textarea"));
// 2. Función mostrarError(campo): escribe campo.validationMessage en #error-<name>,
//    activa o quita la clase 'con-error' y devuelve true si el campo es válido
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
// 3. Evento focusout en el formulario: valida el campo que se abandona
formulario.addEventListener("focusout", (e) => {
    if (e.target.matches("input, select, textarea")) {
        mostrarError(e.target);
    }
});
// 4. Evento input en el formulario: si el campo ya tenía error, se revalida
formulario.addEventListener("input", (e) => {
    if (e.target.matches("input, select, textarea") && e.target.classList.contains("con-error")) {
        mostrarError(e.target);
    }
});
// 5. Evento submit: valida todos los campos; si hay errores, foco en el primero;
//    si no, muestra los datos en JSON sin la contraseña
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    resultado.textContent = "";

    const campos = obtenerCampos();
    // Validar todos y filtrar los que devuelvan falso (tienen error)
    const camposConErrores = campos.filter(campo => !mostrarError(campo));

    if (camposConErrores.length > 0) {
        // Poner el foco en el primer campo inválido
        camposConErrores[0].focus();
    } else {
        // Todo es correcto: generar objeto con FormData y Object.fromEntries
        const formData = new FormData(formulario);
        const datos = Object.fromEntries(formData.entries());

        // Eliminar la contraseña por seguridad / requisito
        delete datos.contrasena; // (Asegúrate de que coincide con el 'name' exacto del input en tu HTML, ej: 'contrasena' o 'password')

        resultado.textContent = JSON.stringify(datos, null, 2);
    }
});
// 6. Evento reset: limpia el resultado y todos los errores
formulario.addEventListener("reset", () => {
    resultado.textContent = "";
    obtenerCampos().forEach(campo => {
        campo.classList.remove("con-error");
        const errorElement = document.getElementById(`error-${campo.name}`);
        if (errorElement) errorElement.textContent = "";
    });
});