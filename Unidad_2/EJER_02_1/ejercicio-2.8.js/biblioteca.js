const libros = [
  { id: 1, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", paginas: 570 },
  { id: 2, titulo: "El nombre del viento", autor: "Patrick Rothfuss", paginas: 880 },
  { id: 3, titulo: "Juego de tronos", autor: "George R.R. Martin", paginas: 800 },
  { id: 4, titulo: "El camino de los reyes", autor: "Brandon Sanderson", paginas: 1200 },
  { id: 5, titulo: "Nacidos de la bruma: El imperio final", autor: "Brandon Sanderson", paginas: 670 },
  { id: 6, titulo: "La historia interminable", autor: "Michael Ende", paginas: 420 },
  { id: 7, titulo: "El hobbit", autor: "J.R.R. Tolkien", paginas: 310 },
  { id: 8, titulo: "El ojo del mundo (La Rueda del Tiempo)", autor: "Robert Jordan", paginas: 830 },
  { id: 9, titulo: "Guardias! Guardias! (Mundodisco)", autor: "Terry Pratchett", paginas: 380 },
  { id: 10, titulo: "La voz de las espadas (La Primera Ley)", autor: "Joe Abercrombie", paginas: 730 }
];
//Una función agregarLibro(nuevoLibro) que añada un nuevo libro a la colección.
export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro)
}
//Obtenemos todos los libros del array
export function obtenerLibros() {
  return libros
}
//Utiliza .find() para buscar un libro por su id y devolverlo.
export function buscarLibros(id) {
  return libros.find((libro) => libro.id === id)
}
//Utiliza .findIndex() para encontrar el índice del libro con ese id y luego .splice() para eliminarlo de la colección.
export function eliminarLibros(id) {
  const indice = libros.findIndex((libro) => libro.id === id)
  if (indice !== -1) {
    libros.splice(indice, 1)
  }
}
//Utiliza el método .reduce() para calcular la suma total de las páginas de todos los libros de la biblioteca.
export function calcularTotalPaginas() {
  return libros.reduce((total, libro) => total + libro.paginas, 0)
}
//Utiliza el método .sort() para ordenar los libros de la colección de menor a mayor número de páginas.
export function ordenarPorPaginas() {
  return libros.sort((a, b) => b.paginas - a.paginas)
}
//Utiliza .some() para comprobar si hay al menos un libro en la colección que tenga más páginas que limitePaginas.
export function hayLibrosLargos(limitePaginas) {
  return libros.some(libro => libro.paginas > limitePaginas)
}
// Utiliza .every() para comprobar si todos los libros de la colección tienen menos páginas que limitePaginas.
export function todosSonLibrosCortos(limitePaginas) {
  return libros.every(libro => libro.paginas < limitePaginas)
}