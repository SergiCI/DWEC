//Función principal exigida por el ejercicio
    function cambiarImagenPrincipal(indice) {
      // a. Selecciona TODAS las imágenes con la clase 'miniatura' (devuelve una NodeList)
      const miniaturas = document.querySelectorAll('.miniatura');

      // b. Usa el índice recibido para acceder a la miniatura correcta en la NodeList
      const miniaturaSeleccionada = miniaturas[indice];

      // c. Obtén el atributo 'src' de esa miniatura
      const nuevoSrc = miniaturaSeleccionada.getAttribute('src');

      // d. Selecciona la 'imagen-principal' y cambia su 'src'
      const imagenPrincipal = document.getElementById('imagen-principal');
      imagenPrincipal.src = nuevoSrc;
    }

    // Función para resaltar la miniatura activa
    function resaltarMiniatura(indice) {
      const miniaturas = document.querySelectorAll('.miniatura');

      // Quita la clase 'activa' de todas las miniaturas
      miniaturas.forEach(function(miniatura) {
        miniatura.classList.remove('activa');
      });

      // Añade la clase 'activa' únicamente a la miniatura en la posición recibida
      miniaturas[indice].classList.add('activa');
    }

    // Función auxiliar que engloba ambas acciones para usarse en el HTML
    function seleccionarImagen(indice) {
      cambiarImagenPrincipal(indice);
      resaltarMiniatura(indice);
    }