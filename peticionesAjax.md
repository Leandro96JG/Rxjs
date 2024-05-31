# Seccion 8 - peticiones http

## `catchError`
###  se utiliza para *manejar errores en flujos de datos* observables. Cuando un Observable encuentra un error, en lugar de propagar ese error y finalizar el flujo, ``catchError`` permite interceptar el error y retornar un nuevo Observable, lo que puede ser un valor de reemplazo, un Observable de recuperación, o simplemente realizar alguna acción y reemitir el error.

## `ajax.getJSON`
###  es una función de ayuda proporcionada por el paquete rxjs/ajax para *realizar solicitudes HTTP GET y automáticamente analizar la respuesta JSON*. Es una forma conveniente de trabajar con APIs REST que retornan datos en formato JSON.

## ``mergeAll``
### te permite suscribirte a *varios Observables simultáneamente* y *recibir todos los valores emitidos* por ellos en un flujo de datos unificado.