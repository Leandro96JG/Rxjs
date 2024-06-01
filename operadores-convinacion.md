# Operadores de convinacion

## `concat`
### es un operador que *permite concatenar varios observables de manera secuencial*, es decir, uno tras otro. Este operador *asegura que el segundo observable no comenzará a emitir valores hasta que el primero haya completado*, y así sucesivamente para cualquier número de observables.

## `merge`
### *combina múltiples observables en uno solo, emitiendo valores a medida que cada uno de los observables fuente emite valores*. A diferencia de ``concat``, que espera que cada observable complete antes de comenzar con el siguiente, ``merge`` permite que todos los observables emitan valores simultáneamente.

## `combineLatest`
### que combina múltiples observables y *emite un valor cada vez que uno de los observables emite*, utilizando el último valor emitido por cada uno de los observables. Esto es útil para situaciones donde necesitas trabajar con el estado más reciente de varios flujos de datos simultáneamente