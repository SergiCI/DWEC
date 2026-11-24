const mascota = {
    nombre: 'Luna',
    edad: 3,
    vacunada: true,
    vacunas: ['rabia', 'moquillo'],
    apodo: undefined,
    fechaAlta: new Date('2026-09-01T10:00:00Z'),
};

const jsonPlano = JSON.stringify(mascota);
console.log('1. JSON:', jsonPlano);

console.log('2. JSON con sangría:\n' + JSON.stringify(mascota, null, 2));

console.log('3. Solo nombre y edad:', JSON.stringify(mascota, ['nombre', 'edad']));

const recuperada = JSON.parse(jsonPlano);
console.log('4. vacunas[0]:', recuperada.vacunas[0]);
console.log('4. typeof fechaAlta:', typeof recuperada.fechaAlta);