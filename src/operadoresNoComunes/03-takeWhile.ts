// takeWhile(predicate: (value: T, index: number) => boolean, inclusive: boolean = false): MonoTypeOperatorFunction<T>
// Parámetros
// predicate: Una función que toma cada valor emitido por la fuente Observable
// y el índice del valor (comenzando desde 0) como argumentos, y devuelve un
// booleano. Mientras esta función devuelva true, el Observable seguirá emitiendo valores.

// inclusive (opcional): Un booleano que determina si el valor que hizo que el
// predicado devolviera false debe ser emitido o no. El valor predeterminado 
// es false, lo que significa que el valor que hace que el predicado devuelva
//  false no se emite.


//! Ejemplo basico 1

import { fromEvent, of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

source$.pipe(
  takeWhile(value => value < 5)
).subscribe(console.log);

// Ejemplo con el parámetro inclusive

source$.pipe(
  takeWhile(value => value < 5, true)
).subscribe(console.log);

// Uso Practico

const clicks$ = fromEvent<PointerEvent>(document, 'click');

clicks$.pipe(
  takeWhile<PointerEvent>(event => event.clientX < 200)
).subscribe(event => console.log(`Clicked: ${event.clientX}`));