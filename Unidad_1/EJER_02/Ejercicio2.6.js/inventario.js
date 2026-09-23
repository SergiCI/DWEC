//Define y exporta una función crearProducto que acepte nombre, categoria, precio y stock, y devuelva un objeto producto.
export function crearProducto(nombre,categoria,precio,stock) {
    return{
        nombre,
        categoria,
        precio,
        stock
    }
}
//Define y exporta una función filtrarPorCategoria que reciba el array de inventario y una categoria, y devuelva un nuevo array con los productos que pertenecen a esa categoría.
export function filtrarPorCategoria(inventario,categoria) {
    return inventario.filter(producto =>producto.categoria == categoria)
}