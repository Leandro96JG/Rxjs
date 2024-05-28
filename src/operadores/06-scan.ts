
// scan(accumulator: (acc: R, value: T, index: number) => R, seed: R): OperatorFunction<T, R>

//* Ejemplo basico 
import { from, of } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5);


setInterval(()=>{
    
})

const sum = numbers.pipe(
  scan((acc, value) => acc + value, 0)
);

sum.subscribe({
  next: value => console.log(`Suma acumulada: ${value}`), // Output: 1, 3, 6, 10, 15
  complete: () => console.log('Complete')
});

//! otro ejemplo

const num = [1, 2, 3, 4, 5];

// const totalAcum = (acc, cur) =>{
//     return acc + cur;
// }

const totalAcum = (acc,cur) => acc + cur;

//reduce

from(num)
.pipe(
    reduce(totalAcum,0)
)
.subscribe(console.log);


//scan
console.log('scan: ')
from(num)
.pipe(
    scan(totalAcum,0)
)
.subscribe(console.log);

//Redux

interface User{
    id?:string;
    isActive?: boolean;
    token?:string;
    edad?:number;
}

const user:User[] = [
    {
        id:'luka', isActive:false, token:null,
    },
    {
        id:'luka', isActive:true, token:'abc',
    },
    {
        id:'luka', isActive:true, token:'abc123',
    }
];

const state$ = from(user)
.pipe(
    scan<User,User>((acc:User,cur:User)=>{
        return{...acc,...cur}
        //acc inicial esta definido aca abajo.
    },{edad:33})
)

const id$ = state$.pipe(
    map(state => state)
);
id$.subscribe(console.log);