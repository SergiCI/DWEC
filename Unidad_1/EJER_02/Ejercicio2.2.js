//Creamos una Function Declaration que acepte base y altura y devuelva area
function calcularAreaRectangulo(base,altura) {
    return base * altura
}
//Creamos una Function Expression 
const calcularAreaTriangulo = function(base,altura){
    return (base * altura) / 2
}
//Convertimos la funcion anterion en una Arrow Function
const calcularAreaTrianguloFlecha = (base,altura) => {return (base * altura) / 2}
// 1. Probando la Function Declaration (Rectángulo)
console.log("Rectángulo");
console.log("Con valores (8, 4):", calcularAreaRectangulo(8, 4));
console.log("Con valores por defecto:", calcularAreaRectangulo(6,12));

// 2. Probando la Function Expression (Triángulo)
console.log("\nTriángulo (Expression)");
console.log("Con valores (10, 6):", calcularAreaTriangulo(10, 6));
console.log("Con valores por defecto:", calcularAreaTriangulo(4,8));

// 3. Probando la Arrow Function (Triángulo)
console.log("\nTriángulo (Arrow Function)");
console.log("Con valores (12, 4):", calcularAreaTrianguloFlecha(12, 4));
console.log("Con valores por defecto:", calcularAreaTrianguloFlecha(5,10));