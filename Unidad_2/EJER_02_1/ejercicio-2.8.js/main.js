import * as funcionesempleados from "./empleado.js";

//Agregar empleados
funcionesempleados.agregarEmpleado({
    id: 6,
    nombre: "Jessica",
    departamento: "Informática",
    salario: 20000
})

//Buscar por departamento
console.log(funcionesempleados.buscarPorDepartamento("Informática"))

//Calcular el salario promedio
console.log(`El salario promedio es: ${funcionesempleados.calcularSalarioPromedio()}`)

//Mostrar la lista de empleados ordenados por salario
console.log(funcionesempleados.obtenerEmpleadosOrdenadosPorSalario())