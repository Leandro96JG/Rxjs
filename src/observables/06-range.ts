//! Operador range:  
//* crea un Observable que emite 
//* una secuencia de números consecutivos, comenzando desde un valor inicial 
//* y continuando por una cantidad específica de emisiones.

import { asyncScheduler, range } from "rxjs";
//se vuelve asyncrona, es decir, el codigo sigue y no para cuando esta subscripta
const src$ = range(1,5,asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');