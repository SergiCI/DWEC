// ================================================================
// RETO 3 · MÉTODOS DE ARRAY                         (escribir funciones)
// ================================================================

// 3.1 nombresCaros
export const nombresCaros = (productos, minimo) => {
  
};

// 3.2 totalInventario
export const totalInventario = (productos) => {
  
};

// 3.3 agruparPorCategoria
export const agruparPorCategoria = (productos) => {
  return productos.reduce((total,a) => {
    total[a.productos] = (total[a.productos] || 0) + a.stock
    return total
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
    .filter(a => a.stock === 0)
    .map(a => a.nombre)
};
