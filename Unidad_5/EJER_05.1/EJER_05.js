const entradas = [
    '{"nombre":"Ana","nota":8.5}',
    '{"nombre":"Luis","nota":"9"}',
    '{"nombre":"","nota":7}',
    '{"nombre":"Marta","nota":11}',
    '{"nombre":"Pablo","nota":6',
    'null',
];

function esAlumnoValido(texto) {
    let datos;
    try {
        datos = JSON.parse(texto);
    } catch {
        return false;
    }

    if (datos === null || typeof datos !== 'object' || Array.isArray(datos)) {
        return false;
    }

    if (typeof datos.nombre !== 'string' || datos.nombre.length === 0) {
        return false;
    }

    if (
        typeof datos.nota !== 'number' ||
        Number.isNaN(datos.nota) ||
        datos.nota < 0 ||
        datos.nota > 10
    ) {
        return false;
    }

    return true;
}

for (const entrada of entradas) {
    if (esAlumnoValido(entrada)) {
        console.log(`✔ aceptado  ${entrada}`);
    } else {
        console.log(`✘ rechazado ${entrada}`);
    }
}