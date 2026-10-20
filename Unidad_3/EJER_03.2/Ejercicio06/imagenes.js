// Seleccionamos el contenedor de los botones y todos los paneles de contenido
    const contenedorBotones = document.querySelector('.botones-tabs');
    const panelesTab = document.querySelectorAll('.panel-tab');
    const botonesTab = document.querySelectorAll('.tab-btn');

    //Usando delegación de eventos, escuchamos los clics en los botones dentro del contenedor
    contenedorBotones.addEventListener('click', function(evento) {
      // Verificamos que el elemento clicado sea un botón de pestaña
      if (evento.target.classList.contains('tab-btn')) {
        const botonClicado = evento.target;

        // --- Lógica de los Paneles de Contenido ---
        //Primero oculta todos los div de contenido (añadiendo la clase 'oculto')
        panelesTab.forEach(function(panel) {
          panel.classList.add('oculto');
        });

        //Obtén el data-id del botón clicado
        const idDestino = botonClicado.getAttribute('data-id');

        // Selecciona el div de contenido correspondiente mediante su id
        const panelDestino = document.getElementById(idDestino);

        // Muestra el div de contenido correspondiente (quitándole la clase 'oculto')
        if (panelDestino) {
          panelDestino.classList.remove('oculto');
        }

        // --- Lógica extra visual (para destacar el botón activo) ---
        botonesTab.forEach(function(boton) {
          boton.classList.remove('activo');
        });
        botonClicado.classList.add('activo');
      }
    });