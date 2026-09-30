import {agregarLibro,obtenerLibros,buscarLibros,eliminarLibros,calcularTotalPaginas,ordenarPorPaginas} from "./biblioteca.js"

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

//Buscar libro en el array
console.log(buscarLibros(11))
//Eliminas el libro que quieras
eliminarLibros(11)

//Mostrar pila de libros modificada
console.log(obtenerLibros())

//Calcular el total de paginas
console.log(`El libro tiene ${calcularTotalPaginas()}`)

//Imprimimos los libros ordenados
console.log(ordenarPorPaginas())