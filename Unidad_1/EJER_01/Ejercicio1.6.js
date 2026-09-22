//Creamos los cursos con un array de objetos
cursos =[
    {
        nombre: "DWEC",
        profesor: "Pablo",
        estudiantes:[
            {nombre:"Pablo",calificacion: 9},
            {nombre:"Sergio",calificacion: 9},
            {nombre:"Silvia",calificacion: 4}
        ]
    },
    {
        nombre: "DWES",
        profesor: "Natalia",
        estudiantes:[
            {nombre:"Isaac",calificacion: 7},
            {nombre:"Pablo Israel",calificacion: 6},
            {nombre:"Brandom",calificacion: 8}
        ]
    },
    {
        nombre: "DAW",
        profesor: "Marco",
        estudiantes:[
            {nombre:"Jorge",calificacion: 4},
            {nombre:"Jessica",calificacion: 5},
            {nombre:"Kevin",calificacion: 7}
        ]
    },
    {
        nombre: "DIW",
        profesor: "Daniel",
        estudiantes:[
        {nombre: "Chema",calificacion: 7},
        {nombre: "Adriana",calificacion: 8},
        {nombre: "Miguel",calificacion: 7},
        ]
    }
]
//Crear el array de resumenCursos usando el map
const resumenCursos = cursos.map(curso =>{
    const suma = curso.estudiantes.reduce((acc, est) => acc + est.calificacion, 0);
  const promedio = suma / curso.estudiantes.length;
  return {
    nombreCurso: curso.nombre,
    promedioCalificaciones: promedio
  };
})
//Usamos el .filter() para obtener el promedio
const cursosDestacados = curso.filter((cursos => cursos.calificacion >=7))
//Recorre los cursos destacados e imprime
cursosDestacados.forEach(curso => {
    "📘 El curso [nombreCurso] tiene un promedio de [promedio] y es considerado destacado."
});
//Recorre los cursos para ver quien suspendió
cursos.forEach(curso => {
  const hayBajas = curso.estudiantes.some(est => est.calificacion < 4);
  if (hayBajas) {
    console.log(`⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`);
  }
});