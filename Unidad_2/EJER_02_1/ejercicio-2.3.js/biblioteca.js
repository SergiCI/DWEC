const libros = [
  { id:1, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", paginas: 570 },
  { id:2, titulo: "El nombre del viento", autor: "Patrick Rothfuss", paginas: 880 },
  { id:3, titulo: "Juego de tronos", autor: "George R.R. Martin", paginas: 800 },
  { id:4, titulo: "El camino de los reyes", autor: "Brandon Sanderson", paginas: 1200 },
  { id:5, titulo: "Nacidos de la bruma: El imperio final", autor: "Brandon Sanderson", paginas: 670 },
  { id:6, titulo: "La historia interminable", autor: "Michael Ende", paginas: 420 },
  { id:7, titulo: "El hobbit", autor: "J.R.R. Tolkien", paginas: 310 },
  { id:8, titulo: "El ojo del mundo (La Rueda del Tiempo)", autor: "Robert Jordan", paginas: 830 },
  { id:9, titulo: "Guardias! Guardias! (Mundodisco)", autor: "Terry Pratchett", paginas: 380 },
  { id:10, titulo: "La voz de las espadas (La Primera Ley)", autor: "Joe Abercrombie", paginas: 730 }
];
//Una función agregarLibro(nuevoLibro) que añada un nuevo libro a la colección.
export function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro)
}
//Obtenemos todos los libros del array
export function obtenerLibros() {
    return libros
}