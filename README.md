# Proyecto inicial - Curso de RXJS

## Operadores:

## `fromEvent`
### se utiliza para crear un Observable a partir de eventos de un objeto de eventos, como elementos del DOM, objetos de Node.js o cualquier objeto que implemente el patrón de eventos.

#### fromEvent(target, eventName, [options])

<target El objeto en el que se va a escuchar el evento, como un elemento del DOM.>
<eventName: El nombre del evento que se va a escuchar, como 'click', 'mousemove', etc.>
<options: (opcional) Opciones de configuración para la escucha del evento (por ejemplo, { capture: true }).>

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



## `map`
### Permite aplicar una función a cada valor emitido por un Observable, transformando así cada emisión según lo especificado por la función.

### El operador map se utiliza para transformar los valores emitidos por un Observable. A continuación se detallan ejemplos y explicaciones para comprender mejor su uso.

## `filter`
### El operador filter en RxJS se utiliza para filtrar las emisiones de un Observable según una condición especificada. Solo los valores que cumplen con la condición especificada pasarán a través del filtro y serán emitidos.
