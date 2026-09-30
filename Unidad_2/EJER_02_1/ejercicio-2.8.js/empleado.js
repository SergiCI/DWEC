const empleados = [
    {
        id: 1,
        nombre: "Sergio",
        departamento: "Informática",
        salario: 24000
    },
    {
        id: 2,
        nombre: "Pablo",
        departamento: "Informática",
        salario: 23000
    },
    {
        id: 3,
        nombre: "Silvia",
        departamento: "Informática",
        salario: 18000
    },
    {
        id: 4,
        nombre: "Brandom",
        departamento: "Informática",
        salario: 20000
    },
    {
        id: 5,
        nombre: "Isaac",
        departamento: "Informática",
        salario: 21000
    }
]

//Agregar un empleado
export function agregarEmpleado(empleado) {
    empleados.push(empleado)
}
//Eliminar un empleado
export function eliminarEmpleado(id) {
    return libros.find((empleado) => empleado.id === id)
}
//Buscar un departamento
export function buscarPorDepartamento(departamento) {
    return empleados.filter((empleado) => empleado.departamento == departamento)
}
//Calcular el promedio de salario de los empleados
export function calcularSalarioPromedio() {
  const suma = empleados.reduce((total,empleados) => total + empleados.salario,0)
    return suma/empleados.length
}
//
export function obtenerEmpleadosOrdenadosPorSalario() {
    return empleados.sort((a,b) => a.salario - b.salario)
}