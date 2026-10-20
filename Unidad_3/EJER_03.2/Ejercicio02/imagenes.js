// Función que selecciona todos los párrafos de respuesta y les añade la clase 'oculto'
    function ocultarTodasLasRespuestas() {
      // Selecciona todos los párrafos que están dentro de la lista de FAQ
      const respuestas = document.querySelectorAll('.faq-list p');
      
      // Recorre la NodeList y añade la clase 'oculto' a cada uno
      respuestas.forEach(function(respuesta) {
        respuesta.classList.add('oculto');
      });
    }

    //Función que recibe el elemento <h2> clicado y muestra su párrafo correspondiente
    function revelarRespuesta(elementoH2) {
      // Primero nos aseguramos de que todas las respuestas queden ocultas
      ocultarTodasLasRespuestas();

      // Navegamos al hermano siguiente del h2 (que es el elemento <p>)
      const respuesta = elementoH2.nextElementSibling;

      // Le quitamos la clase 'oculto' para hacer visible la respuesta
      if (respuesta) {
        respuesta.classList.remove('oculto');
      }
    }