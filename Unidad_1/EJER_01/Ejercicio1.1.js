const nombre='Sergio'
let edad=19
const tieneMascota=true

edad=20
// tieneMascota = false
let mascota = true
if(mascota==true){
    mascota='si'
}else{
    mascota='no'
}

console.log("El nombre es " + nombre  + " y es " + typeof nombre)
console.log("La edad es " + edad  + " y es " + typeof edad)
console.log(tieneMascota + " mascota y es " + typeof tieneMascota)
const frase = console.log(`${nombre} tiene ${edad} años y ${mascota} tiene mascota`)
console.log(frase)