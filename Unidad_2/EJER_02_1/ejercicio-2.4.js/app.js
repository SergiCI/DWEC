import {agregarLibro,obtenerLibros,buscarLibros,eliminarLibros} from "./biblioteca.js"

//Mostrar pila de libros inicial
console.log(obtenerLibros())

//Agregar un nuevo libro
agregarLibro({
    id: 11,
    titulo: "La Odisea",
    autor: "Homero",
    pagina: 320
})

//Mostrar pila de libros modificada
console.log(obtenerLibros())

console.log(buscarLibros(11))
eliminarLibros(11)

//Mostrar pila de libros modificada
console.log(obtenerLibros())