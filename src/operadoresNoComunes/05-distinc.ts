import { distinct, from, of } from "rxjs";


const num$ = of(1,1,1,2,2,3,3,3,4,5,5,6,6,6,7,3,1)

num$.pipe(
    distinct() // usa el === osea que no distinge entre 1 y '1'
)
.subscribe(console.log);


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
    distinct(p => p.nombre)
).subscribe(console.log);