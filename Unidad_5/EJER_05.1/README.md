EJERCICIO 1.
Inicio
Dentro del try 1
Capturado: error.name
Limpieza
fin

El tercer console.log no saltas debido a que total da un error al no tener valor y entonces entra directamente en el catch del error y el fin aparece porque esta fuera de todo.

Inicio
Dentro del try 1
0
Dentro del try 2
Limpieza
fin
Si debido a que el finally se ejecuta al acabar la acción que haya ocurrido independientemente de que la última sea el try o el catch.


EJERCICIO 3.
'{"nombre":"Ana","edad":19}': Válido (object).

"{'nombre':'Luis'}": Inválido — usa comillas simples en lugar de comillas dobles.

'{"activo":true,}': Inválido — tiene una coma final sobrante (trailing comma).

'[1, 2, 3]': Válido (object según typeof en JavaScript).

'{nombre:"Marta"}': Inválido — la clave nombre no va entre comillas dobles.

'{"curso":"2DAW"': Inválido — falta la llave de cierre }.


Ejercicio 4.
Porque JSON no admite el valor undefined en objetos y omite esas propiedades al serializar.

Porque JSON no tiene tipo Date. Al hacer stringify, la fecha se convierte en texto (cadena ISO) y JSON.parse devuelve un string, no una instancia de Date.


Ejercicio 6.

En A sí cambia el original (lista1.productos pasa a tener 'huevos' y lista1 === igual es true). En B propietario no cambia, pero productos sí cambia en el original. En C no cambia nada del original.

Porque { ...lista2 } hace una copia superficial: copia las propiedades del primer nivel por valor (el string 'Ana' es independiente), pero la propiedad productos guarda una referencia al mismo array en memoria.

Si solo hubiera textos y números: Bastaría con una copia superficial ({ ...obj }), ya que los tipos primitivos se copian por valor y no hay objetos ni arrays anidados compartidos.


Ejercicio 7.

Orden inicial (con 0 ms en caja): 1, 3, 6, 4, 2, 5.

Orden con 1500 ms en caja: 1, 3, 6, 2, 5, 4.

Porque setTimeout programa la tarea para ejecutarla cuando termine el código síncrono actual (1, 3, 6). Hasta que no se vacía la pila síncrona, el bucle de eventos no ejecuta los callbacks de los temporizadores.


Ejercicio 8.

Porque ambas llamadas a consultar(...) se ejecutan de forma síncrona una tras otra en milisegundos, mientras que cada promesa espera 1000 ms dentro de su setTimeout antes de resolverse o rechazarse.