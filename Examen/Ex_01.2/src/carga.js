// ================================================================
// PASO 1 · CARGAR Y COMPROBAR LOS DATOS
// ================================================================
// Módulo: src/carga.js
// Míralo en la aplicación:    node main.js 1
//
// · No cambies el nombre de las funciones ni el orden de sus parámetros.
// · Todas se exportan (export const ...) para que las usen main.js.

// 1.1 describirEquipo
export const describirEquipo = (equipo) => {
    switch (equipo) {
    case "No hay Estadio":
      console.log(`Estadio: por determinar`)  
      break;
    case "El estadio no tiene aforo":
      console.log(`Estadio: La Huellera (aforo desconocido)`)
      break;
    case "Entrenador" == null:
      console.log(`Entrenador: vacante`)
      break;
    case "anios" == 0:
      console.log(`Pelayo Díaz (0 años) (¡0 es un valor válido!)`)
      break;
  }

};

// 1.2 resultadoPartido
export const resultadoPartido = (partido) => {
  
};
