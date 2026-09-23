//Define y exporta una función crearProducto que acepte nombre, categoria, precio y stock, y devuelva un objeto producto.
export function crearProducto(nombre, categoria, precio, stock) {
    return {
        nombre,
        categoria,
        precio,
        stock
    }
}
//Define y exporta una función filtrarPorCategoria que reciba el array de inventario y una categoria, y devuelva un nuevo array con los productos que pertenecen a esa categoría.
export function filtrarPorCategoria(inventario, categoria) {
    return inventario.filter(producto => producto.categoria == categoria)
}
//Define y exporta una función listarProductosAgotados que reciba el inventario y devuelva un array con los productos cuyo stock es 0.
export function listarProductosAgotados(inventario) {
    return inventario.filter(producto => producto.stock === 0)
}
//Define y exporta una función calcularValorTotalInventario que reciba el inventario y devuelva el valor total (sumando el precio * stock de cada producto).
export function calcularValorTotalInventario(inventario) {
    return inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0)
}
//Como exportación por defecto (export default), crea una función resumenInventario que reciba el inventario y muestre en consola un resumen: número total de productos, número de categorías distintas y valor total.
export default function resumenInventario(inventario) {
    const totalProductos = inventario.length
    const categoriasDistintas = new Set(inventario.map(producto => producto.categoria)).size
    const valorTotal = calcularValorTotalInventario(inventario)
    console.log(`Número total de productos: ${totalProductos}`)
    console.log(`Número de categorías distintas: ${categoriasDistintas}`)
    console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`)
}
