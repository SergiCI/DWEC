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
// Crea una funcion esMayorDeEdad y usa el export
export function esMayorDeEdad(usuario) {
    if (usuario.edad>18) {
        return true
    }else{
        return false
    }
}

//Crea la funcion obtenerMayorDeEdad para que reciba un array de usuarios y utilizando el .filter
export function obtenerMayorDeEdad(usuarios) {
    return usuarios.filter(usuario => esMayorDeEdad(usuario))
}

//Crea la funcion calcularPromedioEdad que reciba un array de usuarios y usando un .reduce()
export function calcularPromedioEdad(usuarios) {
    const promedio = usuarios.reduce((total, usuario) => {
        return total + usuario.edad
    }, 0)
    return promedio / usuarios.length
}