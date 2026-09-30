const playlist = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 390 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 183 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Sweet Child O' Mine", artista: "Guns N' Roses", duracion: 356 },
  { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 233 },
  { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200 },
  { titulo: "De Música Ligera", artista: "Soda Stereo", duracion: 212 },
  { titulo: "Beat It", artista: "Michael Jackson", duracion: 258 }
];
//Usamos un .filter para filtrar canciones de más de 180s
const playlistMayores = playlist.filter((playlist) => playlist.duracion > 180)
//Usamos un .map para mostrar las canciones que queremos
playlistMayores.map(canciones => console.log(`La canción ${canciones.titulo} de ${canciones.artista} dura ${canciones.duracion} segundos`))