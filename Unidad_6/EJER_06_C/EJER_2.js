const jugadores = [
    { nombre: "Erik", puntos: 450 },
    { nombre: "Valeria", puntos: 980 },
    { nombre: "Matias", puntos: 120 },
    { nombre: "Sandra", puntos: 750 }
];

const ranking = [...jugadores].sort((a, b) => b.puntos - a.puntos);

console.log(jugadores);
console.log(ranking);