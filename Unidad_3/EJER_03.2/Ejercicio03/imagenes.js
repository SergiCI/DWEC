// Función principal exigida por el ejercicio
    function generarInformeDeValidacion() {
      // a. Selecciona los inputs de nombre y email y obtiene su valor (limpiando espacios externos)
      const nombreInput = document.getElementById('nombre').value.trim();
      const emailInput = document.getElementById('email').value.trim();

      // b. Vacía por completo el div#informe-errores para limpiar informes anteriores
      const divInforme = document.getElementById('informe-errores');
      divInforme.innerHTML = '';

      // Array para acumular los mensajes de error encontrados
      const errores = [];

      // c. Comprueba las condiciones requeridas
      // - El nombre debe tener MÁS de 3 caracteres (es decir, longitud > 3)
      if (nombreInput.length <= 3) {
        errores.push("El nombre es incorrecto (debe tener más de 3 caracteres).");
      }

      // - El email debe contener un '@'
      if (!emailInput.includes('@')) {
        errores.push("El email es incorrecto (debe contener un '@').");
      }

      // d. Si hay errores, se crea un <p> por cada uno y se añade al div#informe-errores
      if (errores.length > 0) {
        errores.forEach(function(mensaje) {
          const pError = document.createElement('p');
          pError.textContent = mensaje;
          pError.classList.add('mensaje-error'); // Opcional: para darle estilo rojo
          divInforme.appendChild(pError);
        });
      } else {
        // e. Si ambas condiciones se cumplen, crea un único <p> con "Formulario válido"
        const pExito = document.createElement('p');
        pExito.textContent = "Formulario válido";
        pExito.classList.add('mensaje-exito'); // Opcional: para darle estilo verde
        divInforme.appendChild(pExito);
      }
    }