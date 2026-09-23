import {crearProducto,filtrarPorCategoria,listarProductosAgotados,calcularValorTotalInventario} from "./inventario.js";
import resumenInventario from "./inventario.js";
//Crea un array vacío inventario.
const inventario = []
//Usa la función crearProducto para añadir al menos 6 productos al array. Asegúrate de tener varias categorías (ej: “Electrónica”, “Ropa”, “Libros”) y de que al menos un producto tenga stock: 0.
inventario.push(crearProducto("Camiseta", "Ropa", 15.99, 10));
inventario.push(crearProducto("Pantalón", "Ropa", 29.99, 5));
inventario.push(crearProducto("Auriculares Bluetooth", "Electrónica", 49.99, 3));
inventario.push(crearProducto("Smartphone", "Electrónica", 299.99, 0));
inventario.push(crearProducto("Novela de Ciencia Ficción", "Libros", 12.50, 8));
inventario.push(crearProducto("Libro de JavaScript", "Libros", 35.00, 4));
//- Utiliza las funciones importadas para hacer lo siguiente y mostrar los resultados en la consola
// 1. Obtén y muestra todos los productos de la categoría “Ropa”.
    const productoRopa = filtrarPorCategoria(inventario, "Ropa")
    console.log(productoRopa)
// 2. Obtén y muestra una lista de los productos agotados.
    const productoAgotado = listarProductosAgotados(inventario)
    console.log(productoAgotado)
// 3. Calcula y muestra el valor total del inventario.
    const valorTotal = calcularValorTotalInventario(inventario)
    console.log(`El valor total es: ${valorTotal.toFixed(2)} €`);
// 4. Ejecuta la función `resumenInventario` para ver el resumen completo.
console.log("\n");
resumenInventario(inventario);