const listaProductos = document.getElementById('lista-productos');
    const listaCarrito = document.getElementById('lista-carrito');
    const spanTotal = document.getElementById('total');

    //Función que recorre los <li> del carrito, lee sus data-price, los suma y actualiza el span#total
    function calcularTotal() {
      const itemsCarrito = listaCarrito.querySelectorAll('li');
      let sumaTotal = 0;

      itemsCarrito.forEach(function(item) {
        // Leemos el valor del atributo data-price y lo convertimos a número decimal (float)
        const precio = parseFloat(item.getAttribute('data-price')) || 0;
        sumaTotal += precio;
      });

      // Actualizamos el textContent del span#total formateado a 2 decimales
      spanTotal.textContent = sumaTotal.toFixed(2);
    }

    //Usamos delegación de eventos en la lista de productos para detectar clics en "Añadir al carrito"
    listaProductos.addEventListener('click', function(evento) {
      if (evento.target.classList.contains('btn-añadir')) {
        // Encontramos el <li> padre del botón clicado
        const productoLi = evento.target.parentNode;

        // Clonamos el <li> completo incluyendo sus atributos y contenido (cloneNode(true))
        const productoClonado = productoLi.cloneNode(true);

        // Modificamos el botón dentro del clon para convertirlo en un botón "Quitar" (Extra)
        const botonInterno = productoClonado.querySelector('button');
        botonInterno.textContent = 'Quitar';
        botonInterno.classList.remove('btn-añadir');
        botonInterno.classList.add('btn-quitar');

        // Añadimos el producto clonado a la lista del carrito
        listaCarrito.appendChild(productoClonado);

        //Llamamos a calcularTotal() cada vez que se añada un producto
        calcularTotal();
      }
    });

    //Delegación de eventos en la lista del carrito para manejar el botón "Quitar" y recalcular
    listaCarrito.addEventListener('click', function(evento) {
      if (evento.target.classList.contains('btn-quitar')) {
        const itemCarrito = evento.target.parentNode;
        
        // Eliminamos el elemento del carrito
        itemCarrito.remove();

        // Recalculamos el total automáticamente tras quitar el producto
        calcularTotal();
      }
    });