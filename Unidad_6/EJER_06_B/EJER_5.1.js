const tareas = [
    { id: 1, descripcion: "Comprar suministros de oficina", completada: false },
    { id: 2, descripcion: "Revisar código del proyecto Beta", completada: true },
    { id: 3, descripcion: "Planificar reunión semanal", completada: false },
    { id: 4, descripcion: "Responder correos urgentes", completada: false }
];

const pendientesUrgentes   = tareas
.map((tarea) => tarea.completada === false ? {...tarea, urgente: true}: tarea)
.filter((tarea) => tarea.completada === false);
const descripcionesUrgentes = pendientesUrgentes
.map(tarea => tarea.descripcion);

console.log(pendientesUrgentes );
console.log(descripcionesUrgentes );