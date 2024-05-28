

//ejemplo basico

import { fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5, 6);

//filtro de numeros pares
const evenNumbers = numbers.pipe(
  filter(x => x % 2 === 0)
);

evenNumbers.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete')
});

//otro ejemplo mejor
interface Pj{
    tipo:string;
    nombre:string;
}

const personajes:Pj[] = [
    {
        tipo:'heroe',
        nombre:'Batman',
    },
    {
        tipo:'heroe',
        nombre:'Robin',
    },
    {
        tipo:'villano',
        nombre:'Joker',
    },
]

const heroes$ = of(...personajes);

heroes$.pipe(
    filter(({tipo}) => tipo === 'heroe' )
)
.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyUp$.pipe(
    map(event => event.code),
    filter(event => event === 'Enter')
).subscribe(console.log);

