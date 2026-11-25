const titulos = {
    1: 'El nombre de la rosa',
    2: 'Cien años de soledad',
    3: 'Fahrenheit 451',
};

const buscarLibro = (id) =>
    new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (titulos[id]) resolver({ id, titulo: titulos[id] });
            else rechazar(new Error(`No existe ningún libro con id ${id}`));
        }, 500);
    });

const textoIds = '[3, 1, 99, 2]';

let ids;
try {
    ids = JSON.parse(textoIds);
} catch (error) {
    console.error(`Error al parsear JSON de ids (${error.message}). Programa detenido.`);
    process.exit(1);
}

if (!Array.isArray(ids)) {
    console.error('El JSON de ids no representa un array. Programa detenido.');
    process.exit(1);
}

const resultados = await Promise.allSettled(ids.map((id) => buscarLibro(id)));

let encontrados = 0;
let noExisten = 0;

resultados.forEach((resultado, indice) => {
    const id = ids[indice];
    if (resultado.status === 'fulfilled') {
        encontrados += 1;
        console.log(`✔ ${id} · ${resultado.value.titulo}`);
    } else {
        noExisten += 1;
        console.log(`✘ ${id} · ${resultado.reason.message}`);
    }
});

console.log(`${encontrados} encontrados y ${noExisten} no existen`);