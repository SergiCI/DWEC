function comprobarStock(unidades) {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (unidades > 0) {
                resolver(`Quedan ${unidades} unidades`);
            } else {
                rechazar(new Error('Producto agotado'));
            }
        }, 1000);
    });
}

function consultar(unidades) {
    console.log(`Consulta enviada: ${unidades} unidades`);
    comprobarStock(unidades)
        .then((mensaje) => {
            console.log(`✔ ${mensaje}`);
        })
        .catch((error) => {
            console.log(`✘ ${error.message}`);
        })
        .finally(() => {
            console.log('Consulta terminada');
        });
}

consultar(5);
consultar(0);