# Proyecto inicial - Curso de RXJS

## Operadores:

### ``range``:

#### que crea un Observable que emite una secuencia de números consecutivos, comenzando desde un valor inicial y continuando por una cantidad específica de emisiones. 

#### El operador range toma dos parámetros:``start`` (número inicial): El valor desde el cual comenzará la secuencia. ``count`` (cantidad de emisiones): El número total de valores que serán emitidos.

### `interval`

#### crea un Observable que emite una secuencia de números incrementales en intervalos de tiempo regulares especificados.

### `timer`
####  puede comportarse de dos maneras dependiendo de los argumentos que se le pasen. Puede emitir un solo valor después de un tiempo específico o puede emitir valores repetidamente después de un retraso inicial y en intervalos regulares.

## ``Los Scheluders`` : Los schedulers controlan cuándo se ejecutan las operaciones de los Observables

### `asincScheluder`
####  planifica tareas para que se ejecuten de forma asíncrona utilizando las capacidades nativas de temporización de JavaScript, como setTimeout o setInterval.



####