import { distinct, distinctUntilChanged, from, of } from "rxjs";


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
    distinctUntilChanged((ant, act)=> ant.nombre === act.nombre)
).subscribe(console.log);

// distinctUntilChanged<T>(
//     compare?: (x: T, y: T) => boolean
//   ): MonoTypeOperatorFunction<T>