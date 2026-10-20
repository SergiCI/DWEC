// Seleccionamos el botón y la lista
    const btnOrdenar = document.getElementById('btn-ordenar');
    const listaElementos = document.getElementById('lista-elementos');

    //Al hacer clic en "Ordenar"
    btnOrdenar.addEventListener('click', function() {
      
      //Selecciona todos los <li> con querySelectorAll (devuelve una NodeList)
      const itemsNodeList = listaElementos.querySelectorAll('li');

      //Convierte la NodeList a un Array usando Array.from()
      const itemsArray = Array.from(itemsNodeList);

      //Usa el método .sort() del array para ordenar basándose en su textContent
      itemsArray.sort(function(a, b) {
        const textoA = a.textContent.trim();
        const textoB = b.textContent.trim();
        
        // localeCompare permite ordenar cadenas de texto correctamente (teniendo en cuenta acentos, mayúsculas, etc.)
        return textoA.localeCompare(textoB);
      });

      //Vacía la lista <ul> original
      listaElementos.innerHTML = '';

      //Añade los elementos ya ordenados de vuelta a la lista
      itemsArray.forEach(function(itemLi) {
        listaElementos.appendChild(itemLi);
      });
    });