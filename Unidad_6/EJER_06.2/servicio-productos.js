import { CATEGORIAS } from './productos.js';

// --- Auxiliares internos (no exportados) ---

const mismoId = (idA, idB) => Number(idA) === Number(idB);

const redondear2 = (valor) => Number(Number(valor).toFixed(2));

// --- Validar ---

export const validarProducto = (productos, datosProducto) => {
    const errores = [];

    if (!datosProducto || typeof datosProducto !== 'object') {
        return ['Los datos del producto no son válidos.'];
    }

    const { id, nombre, categoria, precio, stock, enOferta } = datosProducto;

    const idNum = Number(id);
    if (!Number.isInteger(idNum) || idNum <= 0) {
        errores.push('El id debe ser un número entero mayor que 0.');
    } else if (Array.isArray(productos) && productos.some((p) => mismoId(p.id, idNum))) {
        errores.push(`Ya existe un producto con el id ${idNum}.`);
    }

    if (typeof nombre !== 'string' || nombre.trim().length === 0) {
        errores.push('El nombre es obligatorio y no puede estar vacío.');
    }

    if (typeof categoria !== 'string' || !CATEGORIAS.includes(categoria)) {
        errores.push(`La categoría debe ser una de: ${CATEGORIAS.join(', ')}.`);
    }

    if (typeof precio !== 'number' || !Number.isFinite(precio) || precio <= 0) {
        errores.push('El precio debe ser un número mayor que 0.');
    }

    if (typeof stock !== 'number' || !Number.isInteger(stock) || stock < 0) {
        errores.push('El stock debe ser un número entero mayor o igual que 0.');
    }

    if (typeof enOferta !== 'boolean') {
        errores.push('El campo enOferta debe ser verdadero o falso (booleano).');
    }

    return errores;
};

// --- Cambiar ---

export const agregarProducto = (productos, nuevoProducto) => {
    const errores = validarProducto(productos, nuevoProducto);
    if (errores.length > 0) {
        return [...productos];
    }

    const productoLimpio = {
        id: Number(nuevoProducto.id),
        nombre: nuevoProducto.nombre.trim(),
        categoria: nuevoProducto.categoria,
        precio: redondear2(nuevoProducto.precio),
        stock: nuevoProducto.stock,
        enOferta: nuevoProducto.enOferta,
    };

    return [...productos, productoLimpio];
};

export const actualizarProducto = (productos, id, cambios) => {
    if (!cambios || typeof cambios !== 'object') {
        return [...productos];
    }

    return productos.map((producto) => {
        if (!mismoId(producto.id, id)) {
            return { ...producto };
        }

        const siguienteNombre =
            typeof cambios.nombre === 'string' && cambios.nombre.trim().length > 0
                ? cambios.nombre.trim()
                : producto.nombre;

        const siguienteCategoria =
            typeof cambios.categoria === 'string' && CATEGORIAS.includes(cambios.categoria)
                ? cambios.categoria
                : producto.categoria;

        const siguientePrecio =
            typeof cambios.precio === 'number' && Number.isFinite(cambios.precio) && cambios.precio > 0
                ? redondear2(cambios.precio)
                : producto.precio;

        const siguienteStock =
            typeof cambios.stock === 'number' && Number.isInteger(cambios.stock) && cambios.stock >= 0
                ? cambios.stock
                : producto.stock;

        const siguienteOferta =
            typeof cambios.enOferta === 'boolean' ? cambios.enOferta : producto.enOferta;

        return {
            ...producto,
            nombre: siguienteNombre,
            categoria: siguienteCategoria,
            precio: siguientePrecio,
            stock: siguienteStock,
            enOferta: siguienteOferta,
        };
    });
};

export const eliminarProducto = (productos, id) => {
    return productos.filter((producto) => !mismoId(producto.id, id));
};

export const reponerStock = (productos, id, cantidad) => {
    if (typeof cantidad !== 'number' || !Number.isInteger(cantidad) || cantidad <= 0) {
        return productos.map((p) => ({ ...p }));
    }

    return productos.map((producto) => {
        if (!mismoId(producto.id, id)) {
            return { ...producto };
        }
        return {
            ...producto,
            stock: producto.stock + cantidad,
        };
    });
};

export const venderProducto = (productos, id, cantidad) => {
    if (typeof cantidad !== 'number' || !Number.isInteger(cantidad) || cantidad <= 0) {
        return productos.map((p) => ({ ...p }));
    }

    return productos.map((producto) => {
        if (!mismoId(producto.id, id)) {
            return { ...producto };
        }
        if (cantidad > producto.stock) {
            return { ...producto };
        }
        return {
            ...producto,
            stock: producto.stock - cantidad,
        };
    });
};

export const alternarOferta = (productos, id, enOferta) => {
    return productos.map((producto) => {
        if (!mismoId(producto.id, id)) {
            return { ...producto };
        }
        const nuevoEstado = typeof enOferta === 'boolean' ? enOferta : !producto.enOferta;
        return {
            ...producto,
            enOferta: nuevoEstado,
        };
    });
};

export const aplicarDescuentoCategoria = (productos, categoria, porcentajeDescuento) => {
    if (
        typeof porcentajeDescuento !== 'number' ||
        !Number.isFinite(porcentajeDescuento) ||
        porcentajeDescuento <= 0 ||
        porcentajeDescuento >= 100
    ) {
        return productos.map((p) => ({ ...p }));
    }

    const factor = 1 - porcentajeDescuento / 100;

    return productos.map((producto) => {
        if (producto.categoria !== categoria) {
            return { ...producto };
        }
        return {
            ...producto,
            precio: redondear2(producto.precio * factor),
        };
    });
};

// --- Buscar y filtrar ---

export const obtenerProductoPorId = (productos, id) => {
    const encontrado = productos.find((producto) => mismoId(producto.id, id));
    return encontrado ? { ...encontrado } : null;
};

export const buscarPorNombre = (productos, texto = '') => {
    const termino = String(texto).trim().toLowerCase();
    if (termino.length === 0) {
        return productos.map((p) => ({ ...p }));
    }
    return productos.filter((producto) => producto.nombre.toLowerCase().includes(termino));
};

export const filtrarPorCategoria = (productos, categoria = 'Todas') => {
    if (!categoria || categoria === 'Todas') {
        return productos.map((p) => ({ ...p }));
    }
    return productos.filter((producto) => producto.categoria === categoria);
};

export const productosEnOferta = (productos) => {
    return productos.filter((producto) => producto.enOferta === true);
};

export const productosAgotados = (productos) => {
    return productos.filter((producto) => producto.stock === 0);
};

// --- Ordenar ---

export const ordenarProductos = (productos, campo = 'nombre', orden = 'asc') => {
    const direccion = orden === 'desc' ? -1 : 1;

    return [...productos].sort((a, b) => {
        if (campo === 'precio' || campo === 'stock') {
            return (a[campo] - b[campo]) * direccion;
        }
        return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }) * direccion;
    });
};

// --- Resumir ---

export const contarPorCategoria = (productos) => {
    const conteoBase = CATEGORIAS.reduce((acc, cat) => {
        acc[cat] = 0;
        return acc;
    }, {});

    return productos.reduce((acc, producto) => {
        acc[producto.categoria] = (acc[producto.categoria] || 0) + 1;
        return acc;
    }, conteoBase);
};

export const calcularValorAlmacen = (productos) => {
    const total = productos.reduce((acum, producto) => acum + producto.precio * producto.stock, 0);
    return redondear2(total);
};

export const obtenerProductoMasCaro = (productos) => {
    if (!Array.isArray(productos) || productos.length === 0) {
        return null;
    }

    const masCaro = productos.reduce((maximo, actual) =>
        actual.precio > maximo.precio ? actual : maximo
    );

    return { ...masCaro };
};

export const obtenerResumenTienda = (productos) => {
    const totalProductos = productos.length;
    const unidadesTotales = productos.reduce((sum, p) => sum + p.stock, 0);
    const valorAlmacen = calcularValorAlmacen(productos);
    const sumaPrecios = productos.reduce((sum, p) => sum + p.precio, 0);
    const precioMedio = totalProductos > 0 ? redondear2(sumaPrecios / totalProductos) : 0;
    const agotados = productosAgotados(productos).length;
    const enOferta = productosEnOferta(productos).length;
    const productoMasCaro = obtenerProductoMasCaro(productos);

    return {
        totalProductos,
        unidadesTotales,
        valorAlmacen,
        precioMedio,
        agotados,
        enOferta,
        productoMasCaro,
    };
};