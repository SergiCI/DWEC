//Crea una funcion crear perfil que devuelva un objeto
export function crearPerfil (nombre,email,edad){
    return{
        nombre,
        email,
        edad
    }
}
//Crea una funcion que acepte un objeto y devuelva un string
export function mostrarPerfil(usuario){
    console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`)
}