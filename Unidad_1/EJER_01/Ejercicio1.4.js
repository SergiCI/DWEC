//Crear un array ciudades
let ciudades=["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"]

//Añadir otro valor al array con un push
ciudades.push("Roma")

//Crear el array ciudadesMayusculas
let ciudadesMayusculas=ciudades.map(ciudad => ciudad.toUpperCase())

//Crear el array ciudadesFiltradas
let ciudadesFiltradas=ciudades.filter(ciudad => ciudad.length > 6)

//Imprimir los tres arrays en consola
console.log(ciudades)
console.log(ciudadesMayusculas)
console.log(ciudadesFiltradas)