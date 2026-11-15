// Módulo reutilizable de validación (Ejercicio 1.2, parte A)
// Exporta estas cuatro funciones:

// export function mensajeError(campo) { ... }
//   Devuelve el mensaje en español según la causa del error ('' si el campo es válido).

// export function mostrarError(campo) { ... }
//   Escribe el mensaje en #error-<name>, actualiza la clase 'con-error' y aria-invalid.
//   Devuelve true si el campo es válido.

// export function validarFormulario(formulario) { ... }
//   Valida todos los campos, pone el foco en el primero inválido y devuelve true/false.

// export function limpiarErrores(formulario) { ... }
//   Borra mensajes, clases y errores propios (setCustomValidity('')).

export const mensajeError = (campo) => {
    const validity = campo.validity;

    // Si hay un error propio personalizado (customError)
    if (validity.customError) {
        return campo.validationMessage;
    }

    // Si el campo es válido, devolvemos cadena vacía
    if (validity.valid) {
        return '';
    }

    // Mensajes para valueMissing distinguiendo tipos de elementos
    if (validity.valueMissing) {
        if (campo.type === 'checkbox') {
            return 'Debes marcar esta casilla para continuar.';
        }
        if (campo.type === 'radio') {
            return 'Debes seleccionar una opción.';
        }
        if (campo.tagName === 'SELECT') {
            return 'Debes seleccionar un elemento de la lista.';
        }
        return 'Este campo es obligatorio.';
    }

    if (validity.typeMismatch) {
        if (campo.type === 'email') {
            return 'Introduce una dirección de correo electrónico válida.';
        }
        return 'El formato del valor introducido no es correcto.';
    }

    if (validity.patternMismatch) {
        return 'El formato no coincide con el patrón requerido.';
    }

    if (validity.tooShort) {
        return `Escribe al menos ${campo.minLength} caracteres (actuales: ${campo.value.length}).`;
    }

    if (validity.tooLong) {
        return `No excedas los ${campo.maxLength} caracteres permitidos.`;
    }

    if (validity.rangeUnderflow) {
        return `El valor debe ser mayor o igual a ${campo.min}.`;
    }

    if (validity.rangeOverflow) {
        return `El valor debe ser menor o igual a ${campo.max}.`;
    }

    if (validity.badInput) {
        return 'El valor introducido no es válido.';
    }

    return 'Campo no válido.';
};

export const mostrarError = (campo) => {
    const errorElement = document.getElementById(`error-${campo.name}`);
    const mensaje = mensajeError(campo);

    if (errorElement) {
        errorElement.textContent = mensaje;
    }

    if (campo.validity.valid && !campo.validationMessage) {
        campo.classList.remove('con-error');
        return true;
    } else {
        campo.classList.add('con-error');
        return false;
    }
};

export const validarFormulario = (formulario) => {
    const campos = Array.from(formulario.elements).filter(el => el.matches('input, select, textarea'));
    let primerInvalido = null;
    let todoValido = true;

    campos.forEach(campo => {
        const esValido = mostrarError(campo);
        if (!esValido) {
            todoValido = false;
            if (!primerInvalido) {
                primerInvalido = campo;
            }
        }
    });

    if (primerInvalido) {
        primerInvalido.focus();
    }

    return todoValido;
};

export const limpiarErrores = (formulario) => {
    const campos = Array.from(formulario.elements).filter(el => el.matches('input, select, textarea'));
    campos.forEach(campo => {
        campo.classList.remove('con-error');
        campo.setCustomValidity('');
        const errorElement = document.getElementById(`error-${campo.name}`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
};