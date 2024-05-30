# Seccion 7 Operadores que trabajan con tiempo

## `debounceTime`
### se utiliza para *ignorar* valores emitidos por un Observable *durante un período de tiempo específico* y *emitir solo el último valor emitido después de ese período de tiempo*. Esto es útil para manejar situaciones como la entrada del usuario donde deseas procesar valores solo después de que el usuario ha dejado de realizar cambios durante un tiempo determinado.

## `throttleTime`
### se utiliza para *limitar la frecuencia con la que se emiten valores* de un Observable, ignorando los valores emitidos durante un período de tiempo especificado y *emitiendo solo el primer valor en cada período*. Esto es útil para manejar eventos que ocurren con alta frecuencia, como eventos de clics o movimientos del mouse, y evitar el procesamiento excesivo.

## `sampleTime`
###  se utiliza para *emitir el último valor* emitido por un Observable *dentro de un intervalo de tiempo especificado*

## `sample`
###  se utiliza para *emitir el último valor emitido* por un *Observable (fuente) cada vez que otro Observable (notificador) emite un valor*. Esto es útil cuando quieres capturar el último valor de la fuente en intervalos determinados por otro Observable.

## `audiTime`
### *espera hasta el final del intervalo de tiempo para emitir el último valor.* Esto puede ser útil para ciertos casos donde desees capturar el último valor después de un período constante, sin perder ningún valor intermedio, pero garantizando que la emisión ocurra después del intervalo de tiempo.