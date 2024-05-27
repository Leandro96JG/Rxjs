import { Observable, of } from "rxjs";


const obs$:Observable<number> = of(1,2,3,4);
// const obs$ = of([1,2],{a:1,b:2},function(){}, true,Promise.resolve(true));

obs$.subscribe(
    next => console.log('next: ', next),
    null,
    ()=>console.log('terminamos')
)

console.log('Fin del obs');