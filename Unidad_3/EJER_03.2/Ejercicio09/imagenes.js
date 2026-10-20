//Array de objetos que almacena la lista de ciudades y el país al que pertenecen
    const ciudadesPaises = [
      { ciudad: 'Madrid', pais: 'España' },
      { ciudad: 'Barcelona', pais: 'España' },
      { ciudad: 'Tokio', pais: 'Japón' },
      { ciudad: 'Kioto', pais: 'Japón' },
      { ciudad: 'París', pais: 'Francia' },
      { ciudad: 'Lyon', pais: 'Francia' },
      { ciudad: 'Roma', pais: 'Italia' }
    ];

    const listaUl = document.getElementById('lista-ciudades');
    const inputFiltro = document.getElementById('input-filtro');
    const btnFiltrar = document.getElementById('btn-filtrar');

    // Función auxiliar para renderizar el array en el DOM inicialmente
    function renderizarLista() {
      listaUl.innerHTML = '';
      ciudadesPaises.forEach(function(item) {
        const li = document.createElement('li');
        // Guardamos el país en un atributo data-pais para facilitar su lectura posterior
        li.setAttribute('data-pais', item.pais);
        li.innerHTML = `<span>${item.ciudad}</span> <strong>(${item.pais})</strong>`;
        listaUl.appendChild(li);
      });
    }

    // Cargamos la lista al iniciar la página
    renderizarLista();

    //Función principal de filtrado solicitada por el objetivo
    function filtrarPorPais(textoPais) {
      // Normalizamos el texto de búsqueda (convertimos a minúsculas y quitamos espacios) para que no distinga mayúsculas/minúsculas
      const textoBuscado = textoPais.trim().toLowerCase();

      // Seleccionamos todos los elementos <li> generados en la lista
      const itemsLi = listaUl.querySelectorAll('li');

      // Iteramos sobre los elementos de la lista
      itemsLi.forEach(function(li) {
        // Obtenemos el país almacenado en el atributo data-pais y lo normalizamos
        const paisItem = li.getAttribute('data-pais').toLowerCase();

        // Comprobamos si el país del elemento contiene el texto buscado
        if (paisItem.includes(textoBuscado) || textoBuscado === '') {
          // Si coincide, mostramos el elemento eliminando la clase 'oculto'
          li.classList.remove('oculto');
        } else {
          // Si no coincide, ocultamos el elemento añadiendo la clase 'oculto'
          li.classList.add('oculto');
        }
      });
    }

    // Evento para activar el filtro al hacer clic en el botón
    btnFiltrar.addEventListener('click', function() {
      filtrarPorPais(inputFiltro.value);
    });

    // Evento opcional para filtrar en tiempo real mientras se escribe
    inputFiltro.addEventListener('input', function() {
      filtrarPorPais(inputFiltro.value);
    });