//Ejemplo basico

import { fromEvent, of } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5);

const firstNumber = numbers.pipe(
  first()
);

firstNumber.subscribe({
  next: value => console.log(`Valor: ${value}`), // Output: Valor: 1
  complete: () => console.log('Complete')
});

//Ejemplo basico 2


const firstGreaterThanTwo = numbers.pipe(
  first(value => value > 2)
);

firstGreaterThanTwo.subscribe({
  next: value => console.log(`Valor: ${value}`), // Output: Valor: 3
  complete: () => console.log('Complete')
});

// first(): MonoTypeOperatorFunction<T>
// first(predicate: (value: T, index: number, source: Observable<T>) =>
//  boolean, defaultValue?: T): MonoTypeOperatorFunction<T>
//! predicate: Una función opcional que toma el valor, el índice y el Observable de origen, y devuelve un booleano que indica si la emisión debe ser tomada.
//! defaultValue: Un valor opcional que se emitirá si ninguna emisión del Observable satisface la condición predicate.


const click$ = fromEvent<PointerEvent>(document,'click');

click$.pipe(
    tap( () => console.log('tap')),
    //no se porque no funciona
    map(({clientX,clientY})=>({clientX,clientY})),
    first(event => event.clientY>=150)
)
click$.subscribe(
    {
        next: val =>console.log("val:", val.clientY), 
        complete:()=> console.log('complete'),
    })


