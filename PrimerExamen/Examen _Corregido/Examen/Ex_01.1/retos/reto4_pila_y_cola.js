// ================================================================
// RETO 4 · PILA Y COLA CON ARRAYS                   (escribir funciones)
// ================================================================

// 4.1 atenderTurnos
export const atenderTurnos = (cola, cantidad) => {
  let atendidos = []
  while (cantidad > 0 && cola.length > 0) {
    atendidos.push(cola.shift())
    cantidad--
  }
  return atendidos
};

// 4.2 deshacerUltimas
export const deshacerUltimas = (historial, cantidad) => {
  while (cantidad > 0 && historial.length > 0) {
    historial.pop()
    cantidad--
  }
  return historial
};
