import { productos } from './productos.js';
import {
    validarProducto,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    reponerStock,
    venderProducto,
    alternarOferta,
    aplicarDescuentoCategoria,
    obtenerProductoPorId,
    buscarPorNombre,
    filtrarPorCategoria,
    productosEnOferta,
    productosAgotados,
    ordenarProductos,
    contarPorCategoria,
    calcularValorAlmacen,
    obtenerProductoMasCaro,
    obtenerResumenTienda,
} from './servicio-productos.js';

const nombres = (lista) => lista.map((p) => p.nombre);

console.log('--- validarProducto ---');
// Espero: []
console.log(
    validarProducto(productos, {
        id: 9,
        nombre: 'Hub USB-C',
        categoria: 'Accesorios',
        precio: 29.99,
        stock: 10,
        enOferta: false,
    })
);
// Caso límite. Espero: array con errores por nombre vacío, precio negativo y stock decimal
console.log(
    validarProducto(productos, {
        id: 1,
        nombre: '   ',
        categoria: 'Inexistente',
        precio: -5,
        stock: 2.5,
        enOferta: 'no',
    })
);

console.log('--- agregarProducto ---');
// Espero: 9 productos, incluyendo 'Hub USB-C'
const conNuevo = agregarProducto(productos, {
    id: 9,
    nombre: 'Hub USB-C',
    categoria: 'Accesorios',
    precio: 29.99,
    stock: 10,
    enOferta: false,
});
console.log(nombres(conNuevo));
// Caso límite. Espero: sigue teniendo 8 productos (no se añade inválido)
console.log(agregarProducto(productos, { id: 2, nombre: '' }).length);

console.log('--- actualizarProducto ---');
// Espero: id 6 con nombre 'Altavoces 2.1 Pro' y precio 75
console.log(obtenerProductoPorId(actualizarProducto(productos, '6', { nombre: 'Altavoces 2.1 Pro', precio: 75 }), 6));
// Caso límite. Espero: array de 8 elementos sin cambios si el id no existe
console.log(actualizarProducto(productos, 999, { nombre: 'Nada' }).length);

console.log('--- eliminarProducto ---');
// Espero: 7 productos, sin 'Webcam HD' (id 5)
console.log(nombres(eliminarProducto(productos, '5')));
// Caso límite. Espero: 8 productos si el id no existe
console.log(eliminarProducto(productos, 999).length);

console.log('--- reponerStock ---');
// Espero: stock de id 2 pasa de 0 a 15
console.log(obtenerProductoPorId(reponerStock(productos, '2', 15), 2)?.stock);
// Caso límite. Espero: stock de id 2 sigue en 0 si cantidad es negativa
console.log(obtenerProductoPorId(reponerStock(productos, 2, -3), 2)?.stock);

console.log('--- venderProducto ---');
// Espero: stock de id 1 pasa de 12 a 9
console.log(obtenerProductoPorId(venderProducto(productos, '1', 3), 1)?.stock);
// Caso límite. Espero: stock de id 3 sigue en 4 si se intentan vender 10
console.log(obtenerProductoPorId(venderProducto(productos, 3, 10), 3)?.stock);

console.log('--- alternarOferta ---');
// Espero: enOferta de id 1 pasa a true
console.log(obtenerProductoPorId(alternarOferta(productos, '1'), 1)?.enOferta);
// Caso límite. Espero: null si buscamos id inexistente tras alternar
console.log(obtenerProductoPorId(alternarOferta(productos, 999), 999));

console.log('--- aplicarDescuentoCategoria ---');
// Espero: Auriculares Bluetooth a 71.99 y Altavoces 2.1 a 58.5
const conDescuentoAudio = aplicarDescuentoCategoria(productos, 'Audio', 10);
console.log(filtrarPorCategoria(conDescuentoAudio, 'Audio').map((p) => `${p.nombre}: ${p.precio}`));
// Caso límite. Espero: [] si se filtra una categoría sin productos tras array vacío
console.log(aplicarDescuentoCategoria([], 'Audio', 10));

console.log('--- obtenerProductoPorId ---');
// Espero: Monitor 27"
console.log(obtenerProductoPorId(productos, '3'));
// Caso límite. Espero: null
console.log(obtenerProductoPorId(productos, 99));

console.log('--- buscarPorNombre ---');
// Espero: ['Monitor 27"', 'Monitor 24"']
console.log(nombres(buscarPorNombre(productos, 'monitor')));
// Caso límite. Espero: todos los productos (8) si el texto está vacío
console.log(buscarPorNombre(productos, '   ').length);

console.log('--- filtrarPorCategoria ---');
// Espero: ['Teclado mecánico', 'Ratón inalámbrico', 'Webcam HD']
console.log(nombres(filtrarPorCategoria(productos, 'Periféricos')));
// Caso límite. Espero: [] si array vacío
console.log(filtrarPorCategoria([], 'Audio'));

console.log('--- productosEnOferta ---');
// Espero: ['Ratón inalámbrico', 'Auriculares Bluetooth', 'Monitor 24"']
console.log(nombres(productosEnOferta(productos)));
// Caso límite. Espero: []
console.log(productosEnOferta([]));

console.log('--- productosAgotados ---');
// Espero: ['Ratón inalámbrico', 'Webcam HD']
console.log(nombres(productosAgotados(productos)));
// Caso límite. Espero: []
console.log(productosAgotados([]));

console.log('--- ordenarProductos ---');
// Espero: primeros tres por nombre -> ['Alfombrilla XL', 'Altavoces 2.1', 'Auriculares Bluetooth']
console.log(nombres(ordenarProductos(productos, 'nombre')).slice(0, 3));
console.table(ordenarProductos(productos, 'precio'));
// Caso límite. Espero: []
console.log(ordenarProductos([], 'precio'));

console.log('--- contarPorCategoria ---');
// Espero: Periféricos: 3, Monitores: 2, Audio: 2, Accesorios: 1
console.log(contarPorCategoria(productos));
// Caso límite. Espero: todas las categorías a 0
console.log(contarPorCategoria([]));

console.log('--- calcularValorAlmacen ---');
// Espero: 4435.73
console.log(calcularValorAlmacen(productos));
// Caso límite. Espero: 0
console.log(calcularValorAlmacen([]));

console.log('--- obtenerProductoMasCaro ---');
// Espero: Monitor 27"
console.log(obtenerProductoMasCaro(productos)?.nombre);
// Caso límite. Espero: null
console.log(obtenerProductoMasCaro([]));

console.log('--- obtenerResumenTienda ---');
// Espero: totalProductos 8, unidadesTotales 60, valorAlmacen 4435.73, precioMedio 91.42, agotados 2, enOferta 3, productoMasCaro Monitor 27"
console.log(obtenerResumenTienda(productos));
// Caso límite. Espero: valores en 0 y productoMasCaro null
console.log(obtenerResumenTienda([]));

console.log('--- ¿Datos originales intactos? ---');
console.table(productos);