//Creamos el objeto usuario
const usuario = {
    nombre: "Sergio",
    email: "wdv03636@educastur.es"
}
//Creamos el objeto perfil
const perfil = {
    puesto: "Desarrollador de videojuegos",
    empresa: "Capcom"
}
//Creamos el objeto empleado para unificar usuario y perfil
const empleado = {
 ...usuario,
 ...perfil
}
//Creamos la constante ciudad y le hacemos que busque en empleado un perfil dentro una direccion y una ciudad y en caso de que no alla salte el default
const ciudad = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada"