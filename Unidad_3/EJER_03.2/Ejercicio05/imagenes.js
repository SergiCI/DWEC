// Seleccionamos los elementos principales del DOM
    const inputTarea = document.getElementById('input-tarea');
    const btnAñadir = document.getElementById('btn-añadir');
    const listaTareas = document.getElementById('lista-tareas');

    //Evento para hacer clic en el botón "Añadir"
    btnAñadir.addEventListener('click', function() {
      const textoTarea = inputTarea.value.trim();

      // Comprobamos que el input no esté vacío
      if (textoTarea !== '') {
        // Creamos un nuevo elemento <li>
        const nuevoLi = document.createElement('li');
        
        // Añadimos el texto de la tarea (usando un span para organizarlo mejor)
        const spanTexto = document.createElement('span');
        spanTexto.textContent = textoTarea;
        nuevoLi.appendChild(spanTexto);

        //Dentro de cada <li> nuevo, añadimos un botón "Eliminar"
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar'); // Clase para identificarlo y darle estilos
        nuevoLi.appendChild(btnEliminar);

        // Añadimos el <li> completo a la lista <ul>
        listaTareas.appendChild(nuevoLi);

        // Limpiamos el input y devolvemos el foco
        inputTarea.value = '';
        inputTarea.focus();
      }
    });

    // Permite añadir la tarea presionando la tecla "Enter" dentro del input
    inputTarea.addEventListener('keypress', function(evento) {
      if (evento.key === 'Enter') {
        btnAñadir.click();
      }
    });

    //Delegación de eventos en la lista <ul> para escuchar los clics
    listaTareas.addEventListener('click', function(evento) {
      //Verificamos si el elemento clicado es un botón "Eliminar"
      if (evento.target.classList.contains('btn-eliminar')) {
        // Navegamos por el DOM usando parentNode para encontrar el <li> contenedor
        const elementoLi = evento.target.parentNode;
        
        // Eliminamos el <li> del DOM utilizando .remove()
        elementoLi.remove();
      }
    });