// Importamos las funciones del archivo gestorUsuarios
import {crearPerfil,mostrarPerfil,esMayorDeEdad,obtenerMayorDeEdad,calcularPromedioEdad} from "./gestorUsuarios.js";
//Creamos el array usuarios donde usamos la funcion crearPerfil()
const usuarios = [
crearPerfil("Sergio","sergio@educastur.es",19),
crearPerfil("Silvia","silvia@educastur.es",17),
crearPerfil("Brandom","brandom@educastur.es",15),
crearPerfil("Isaac","isaac@educastur.es",19),
crearPerfil("Pablo","Pablo@educastur.es",25
    )]

usuarios.forEach(usuario => {
    mostrarPerfil(usuario)
});
//Llama a obtenerMayoresDeEdad para filtrar el array y guarda el resultado en una nueva variable.
let mayoresEdad = obtenerMayorDeEdad(usuarios)
//Muestra un encabezado que diga “Usuarios mayores de edad:” y luego itera sobre el nuevo array para mostrar el perfil de cada uno de esos usuarios.
console.log("Usuarios mayores de edad: ")
mayoresEdad.forEach(usuario => {
    mostrarPerfil(usuario)    
});
//Llama a calcularPromedioEdad con el array original de usuarios y muestra el resultado en un mensaje claro, por ejemplo: “La edad promedio de los usuarios es: [promedio]”.
let promedio = calcularPromedioEdad(usuarios)
console.log(`La edad promedio de los usuarios es: ${promedio}`)