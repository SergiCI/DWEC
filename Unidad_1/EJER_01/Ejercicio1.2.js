//Crear el objeto coche
const coche = {
    marca: "Chevrolet",
    modelo: "Camaro",
    año: 2010,
    estaDisponible: false
}

//Crear Tabla de coche
console.table(coche)

//Destructuración de marca y modelo del objeto coche
const {marca,modelo}= coche

//Imprimir marca y modelo como variables
console.log("Marca:", marca)
console.log("Modelo:", modelo)

//Cambiar la disponibilidad del coche
coche.estaDisponible=true

//Añadir la propiedad color al coche
coche.color="Amarillo"

//Eliminar la propiedad año del coche
delete coche.año

//Imprimir la Tabla modificada del coche
console.table(coche)