import {agregarLibro,obtenerLibros,buscarLibros,eliminarLibros,calcularTotalPaginas,ordenarPorPaginas,hayLibrosLargos,todosSonLibrosCortos} from "./biblioteca.js"

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
//Eliminar el libro que quieras
eliminarLibros(11)

//Mostrar pila de libros modificada
console.log(obtenerLibros())

//Calcular el total de paginas
console.log(`El libro tiene ${calcularTotalPaginas()}`)

//Imprime los libros ordenados
console.log(ordenarPorPaginas())

//Mostrar los libros con más de 300 paginas
console.log(`Hay libros con más de 300 páginas: ${hayLibrosLargos(300)}`)

//Mostrar los libros con menos de 400 paginas
console.log(`Hay libros con menos de 400 páginas: ${todosSonLibrosCortos(400)}`)