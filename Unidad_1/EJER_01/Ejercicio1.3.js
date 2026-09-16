//Crear el objeto producto
const producto = {
    nombre: "Tablet",
    precio: 200
}

//Crear el objeto cliente
const cliente = {
    nombreCliente: "Sergio",
    esPremium: true
}

//Combinar ambos objetos con Spread Operator
const pedido = {
    ...cliente,
    ...producto
}

//Mostrar el objeto pedido
console.log(pedido)

//Crear el objeto producto2 con el atributo nombre y conbinarlo con el cliente

const producto2={
    nombre: "Hard disk"
}

const pedido2 = {
    ...producto,
    ...producto2
}

console.log(pedido2)
//Cuando se juntan dos objetos con la misma variable la variable tendra el valor del ultimo objeto ya que se sobreescribe al llamarse igual.