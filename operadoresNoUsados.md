## `take`
###  permite limitar el número de emisiones de un Observable. Este operador *emite solo las primeras ``n`` emisiones* del Observable de origen y luego completa. Es útil cuando deseas trabajar con un número específico de emisiones y no necesitas seguir escuchando más allá de ese punto.

## ``first`` 
###  emite solo la *primera emisión del Observable de origen que satisface una condición opcional*, y luego completa el Observable. Si no se proporciona una condición, first emite simplemente la primera emisión.

## `takeWhile`
### se utiliza para emitir valores desde un Observable *hasta que una condición especificada se evalúe como ``false``*. A partir de ese punto, deja de emitir valores.

## `takeUtil`
### se utiliza para *emitir valores de un Observable hasta que otro Observable (notificador) emita su primer valor*. Una vez que el notificador emite un valor, el Observable fuente se completa y deja de emitir valores.

## `skip`
### se utiliza para *ignorar los primeros n elementos emitidos* por un Observable y empezar a emitir valores después de esos elementos ignorados. Esto puede ser útil cuando quieres comenzar a escuchar y procesar valores de un Observable después de ciertos eventos o condiciones.

## `distinct`
### se utiliza para asegurar que los *valores emitidos* por un Observable *sean únicos*. Esto significa que si un valor se emite más de una vez consecutivamente, solo se emitirá la primera ocurrencia y las siguientes ocurrencias se ignorarán hasta que se emita un valor diferente. El operador ``distinct`` compara los valores emitidos utilizando un comparador de igualdad opcional.

## `distinctUntilChanged`
### se utiliza para asegurarse de que los *valores emitidos* por un Observable *sean diferentes al valor anterior*. Esto significa que los valores consecutivos duplicados se ignoran y solo se emite un valor cuando es diferente al valor anterior.

## `distinctUntilKeyChanged`
### se utiliza para asegurar que los *valores emitidos* por un Observable sean *únicos en función de una clave específica*. Solo emite un valor cuando la clave especificada ha cambiado en relación con el valor anterior.