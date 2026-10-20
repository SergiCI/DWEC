const btnGenerar = document.getElementById('btn-generar');
    const inputCantidad = document.getElementById('cantidad');
    const divResultado = document.getElementById('resultado');

    // Texto base para simular el contenido de relleno
    const textoBase = "Este es un fragmento de texto de muestra utilizado habitualmente en el diseño web y la maquetación para comprobar el aspecto visual de las páginas antes de incorporar la información definitiva.";

    //Al hacer clic en "Generar":
    btnGenerar.addEventListener('click', function() {
      //Obtiene el número del input (convertido a entero)
      const numeroParrafos = parseInt(inputCantidad.value) || 0;

      //Primero, vacía el div#resultado por si ya tenía contenido previo
      divResultado.innerHTML = '';

      //Crea un DocumentFragment para acumular los elementos en memoria de forma eficiente
      const fragmento = document.createDocumentFragment();

      //Inicia un bucle que se repite tantas veces como el número introducido
      for (let i = 1; i <= numeroParrafos; i++) {
        //En cada iteración, crea un nuevo elemento <p>
        const nuevoParrafo = document.createElement('p');
        
        // Asigna el texto de relleno (añadiendo el número de párrafo para mayor claridad)
        nuevoParrafo.textContent = `Párrafo ${i}: ${textoBase}`;

        // Añade el párrafo al DocumentFragment (en lugar de añadirlo directamente al DOM uno por uno)
        fragmento.appendChild(nuevoParrafo);
      }

      // Finalmente, añade el DocumentFragment completo al div#resultado en una sola operación
      divResultado.appendChild(fragmento);
    });