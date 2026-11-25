const alumnos = ["Íñigo", "Álvaro", "Berenice", "Ángela", "Niño", "Ñandú"];

const listadoOficial = [...alumnos].sort((a, b) => a.localeCompare(b));

console.log(listadoOficial);