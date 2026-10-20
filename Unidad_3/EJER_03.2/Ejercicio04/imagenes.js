//Array de objetos de ejemplo
    const usuarios = [
      { nombre: 'Pablo', edad: 25, ciudad: 'Llanera' },
      { nombre: 'Sergio', edad: 19, ciudad: 'Oviedo' },
      { nombre: 'Jorge', edad: 24, ciudad: 'El Entrego' },
      { nombre: 'Silvia', edad: 18, ciudad: 'Cornellana' }
    ];

    //Función que recibe el array y construye la tabla
    function construirTablaUsuarios(datosArray) {
      //Crea un DocumentFragment para construir la estructura de forma eficiente en memoria
      const fragmento = document.createDocumentFragment();

      //Crea el elemento <table> principal
      const tabla = document.createElement('table');

      // --- Creación del Encabezado (thead) ---
      const thead = document.createElement('thead');
      const filaEncabezado = document.createElement('tr');

      // Extraemos las claves del primer objeto para generar las columnas automáticamente
      const columnas = Object.keys(datosArray[0]);

      columnas.forEach(function(clave) {
        const th = document.createElement('th');
        // Capitalizamos la primera letra de la clave para que se vea más profesional
        th.textContent = clave.charAt(0).toUpperCase() + clave.slice(1);
        filaEncabezado.appendChild(th);
      });

      thead.appendChild(filaEncabezado);
      tabla.appendChild(thead);

      // --- Creación del Cuerpo (tbody) ---
      const tbody = document.createElement('tbody');

      // Recorremos el array de objetos para crear las filas (<tr>) y celdas (<td>) dinámicamente
      datosArray.forEach(function(usuario) {
        const fila = document.createElement('tr');

        columnas.forEach(function(clave) {
          const celda = document.createElement('td');
          celda.textContent = usuario[clave]; // Asignamos el valor correspondiente del objeto
          fila.appendChild(celda);
        });

        tbody.appendChild(fila);
      });

      tabla.appendChild(tbody);

      // Añadimos la tabla completa al DocumentFragment
      fragmento.appendChild(tabla);

      //Finalmente, añadimos el DocumentFragment al div contenedor-tabla en el DOM real
      const contenedorTabla = document.getElementById('contenedor-tabla');
      contenedorTabla.appendChild(fragmento);
    }

    // Ejecutamos la función al cargar el script pasando nuestro array
    construirTablaUsuarios(usuarios);