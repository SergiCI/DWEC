//Creamos a los estudiantes con un array de objetos
estudiantes =[
    alumno1 = {
        nombre: "Sergio",
        apellidos: "Caramazana",
        calificacion: 9 ,
        aprobado: true
    },
    alumno2 = {
        nombre: "Pablo" ,
        apellidos: "Ruiz",
        calificacion: 8 ,
        aprobado: true
    },
    alumno3 = {
        nombre: "Silvia" ,
        apellidos: "Ruiz",
        calificacion: 2 ,
        aprobado: true
    }
]

//Le añadimos un id único con un index a cada Alumno
const estudiantesId = estudiantes.map((estudiantes, index) => ({
    ...estudiantes,
    id: index +1
}))

//Obtenemos el número de estudiantes según la orden que nos pidan
const estudiantesAprobados = estudiantes.filter((estudiantes => estudiantes.calificacion >=5))

//Imprimimos los Alumnos aprobados con los Template Strings
console.log(estudiantesAprobados.forEach(estudiantes => {
    `¡Felicidades ${estudiantes.nombre}, has aprobado con ${estudiantes.calificacion}!`
}))

//Incoherencias imprime mensaje
estudiantes.forEach(estudiante => {
    if(estudiantes.calificacion >= 5 && estudiante.aprobado)
});