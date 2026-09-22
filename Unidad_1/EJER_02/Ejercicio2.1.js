//Creamos un array de números
let numeros =[1,8,66,987,453,56]

//Usamos un map para sacar los dobles de array números
const dobles = numeros.map(numeros => numeros * 2)

//Usamos el .filter() para contar los números pares
const pares = numeros.filter(numeros => numeros % 2 == 0)

//Usamos el bucle for...of 
for (const numeros of pares) {
    console.log(numeros)
}