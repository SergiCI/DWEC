// ================================================================
// RETO 3 · MÉTODOS DE ARRAY                         (escribir funciones)
// ================================================================

// 3.1 nombresCaros
export const nombresCaros = (productos, minimo) => {
  const productosCaros = productos.filter(producto => producto.precio >= minimo)
  const nombres = productosCaros.map(producto => producto.nombre)
  return nombres
};

// 3.2 totalInventario
export const totalInventario = (productos) => {
  return productos.reduce((total, producto) => {
    return total + (producto.precio * producto.unidades)
  }, 0)
};

// 3.3 agruparPorCategoria
export const agruparPorCategoria = (productos) => {
  return productos.reduce((agrupado, producto) => {
    const categoria = producto.categoria
    if (!agrupado[categoria]) {
      agrupado[categoria] = 0
    }
    agrupado[categoria] += producto.unidades
    return agrupado
  }, {})
};

// 3.4 productoMasBarato
export const productoMasBarato = (productos) => {
    if(productos.length === 0) return undefined
  return productos.reduce((total, a) => a.precio < total.precio ? a : total, productos[0])
};

// 3.5 hayAgotados
export const hayAgotados = (productos) => {
  return productos
    .filter(producto => producto.unidades === 0)
    .map(producto => producto.nombre)
};
