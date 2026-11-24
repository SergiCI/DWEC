const operaciones = [[10, 2], [5, 0], [7, 4]];
function dividir(a, b) {
    if (b === 0) {
        throw new RangeError("No se puede dividir entre cero");
    }
    return a / b;
}

for (const [a, b] of operaciones) {
    try {
        const resultado = dividir(a, b);
        console.log(`${a} / ${b} = ${resultado}`)
    } catch (error) {
        console.log(`${error.name}: ${error.message}`)
    } finally {
        console.log('Operación terminada')
    }
}