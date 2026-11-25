Campo	      | Tipo	    | Ejemplo	 | Reglas
id	          | entero	    | 2	         | >0
nombre	      | string	    | Monitor	 | obligatorio
categoria	  | string	    | Audio      | CATEGORIAS
precio		  | number      | 59.9       | >0
stock		  | number      | 0          | >=0
enOferta	  | boolean	    | true       | true/false

1. ¿Por qué campos tendría sentido **ordenar** la lista?
   Por todos menos por el id.
2. ¿Por qué campos tendría sentido **filtrar**?
   Por el nombre, la categoria , el precio y enOferta.
3. ¿Con qué campos se pueden hacer **cálculos**?
   El precio y el stock.