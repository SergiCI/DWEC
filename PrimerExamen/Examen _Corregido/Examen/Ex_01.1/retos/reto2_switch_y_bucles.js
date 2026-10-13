// ================================================================
// RETO 2 · switch Y BUCLES                          (escribir funciones)
// ================================================================


// 2.1 descuentoPorCategoria
export const descuentoPorCategoria = (categoria) => {
  switch (categoria) {
    case "estudiante":
      return 0.2
    case "jubilado":
      return 0.2
    case "familiaNumerosa":
      return 0.3
    case "socio":
      return 0.1
    default:
      return 0
  }
};

// 2.2 sumarHastaLimite
export const sumarHastaLimite = (numeros, limite) => {
  let suma = 0
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    
    if (typeof element !== 'number' || isNaN(element) || element < 0) {
      continue;
    }
    if (suma + element > limite) {
      break;
    }
    suma += element
  }
  return suma
};

// 2.3 contarVocales
export const contarVocales = (texto) => {
  let contador = 0
  const textominimo = texto.toLowerCase()
  const vocales = 'aeiouáéíóúü'

  for (const vocal of textominimo) {
    if (vocales.includes(vocal)) {
      contador++
    }
  }

  return contador
};
