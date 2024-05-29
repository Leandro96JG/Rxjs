import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";


//! Ejercicio diferente
interface Personaje{
    nombre:string;
}

const personajes:Personaje[] = [
    {
        nombre: 'Megaman',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'Megaman',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'Zero',
    },
    {
        nombre: 'Dr willy',
    },
    {
        nombre: 'Zero',
    },
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);

//distinctUntilKeyChanged<T>(key: keyof T, compare?: (x: T[keyof T], y: T[keyof T]) => boolean): MonoTypeOperatorFunction<T>