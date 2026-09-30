import {agregarLibro,obtenerLibros} from "./biblioteca.js"

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