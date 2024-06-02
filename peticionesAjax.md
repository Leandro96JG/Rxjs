# Seccion 8 - peticiones http

## `catchError`
###  se utiliza para *manejar errores en flujos de datos* observables. Cuando un Observable encuentra un error, en lugar de propagar ese error y finalizar el flujo, ``catchError`` permite interceptar el error y retornar un nuevo Observable, lo que puede ser un valor de reemplazo, un Observable de recuperación, o simplemente realizar alguna acción y reemitir el error.

## `ajax.getJSON`
###  es una función de ayuda proporcionada por el paquete rxjs/ajax para *realizar solicitudes HTTP GET y automáticamente analizar la respuesta JSON*. Es una forma conveniente de trabajar con APIs REST que retornan datos en formato JSON.

## ``mergeAll``
### te permite suscribirte a *varios Observables simultáneamente* y *recibir todos los valores emitidos* por ellos en un flujo de datos unificado.

## `mergeMap`
### que combina las funcionalidades de ``map`` y ``mergeAll``. Este operador es extremadamente útil cuando deseas transformar elementos emitidos por un observable en nuevos observables, y luego aplanar estos *observables en un solo flujo continuo*.

## `switchMap`
### se utiliza para *mapear cada valor emitido* por un observable en un nuevo observable interno, y luego *aplanar estos observables en un solo flujo de salida*, pero con una característica especial: si un nuevo valor es emitido por el observable fuente antes de que el observable interno anterior complete, switchMap cancelará la suscripción al observable interno anterior y se suscribirá al nuevo observable interno.
### *toma cada valor emitido* por el observable fuente y *lo transforma* utilizando una *función que devuelve un nuevo observable*. Sin embargo, solo mantiene activa la suscripción al observable interno más reciente, descartando los anteriores si llega un nuevo valor del observable fuente.

## `concatMap`
###  se utiliza para mapear cada valor emitido por un observable fuente en un nuevo observable interno, y luego aplanar estos observables en un solo flujo de salida. Sin embargo, a diferencia de mergeMap o switchMap, *concatMap garantiza que cada observable interno se suscriba y complete en orden, uno por uno*. Esto significa que no se suscribirá al siguiente observable interno hasta que el anterior haya completado.

## `exhaustMap`
### Cuando la fuente observable emite un valor, exhaustMap *crea un observable interno y se suscribe a él*. Mientras este observable interno está activo, *cualquier nuevo valor emitido* por la fuente observable *será ignorado hasta que el observable interno se complete*.