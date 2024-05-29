// takeUntil(notifier: Observable<any>): MonoTypeOperatorFunction<T>

//* Ejemplo basico 

import { combineLatest, fromEvent, interval, timer } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

// Crea un Observable que emite valores cada segundo
const source$ = interval(1000);

// Crea un Observable que emite un valor después de 5 segundos
// const timer$ = timer(5000);

// source$.pipe(
//   takeUntil(timer$)
// ).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

//Otro ejemplo 

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const clickBtn$ = fromEvent(boton,'click')
.pipe(
    tap(()=>console.log('antes')),
    skip(2),
    tap(()=>console.log('despues')),
);

source$
.pipe(
    takeUntil(clickBtn$),
)
.subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
})