import { map, range, tap } from "rxjs";



const num$ = range(1,5);


num$.pipe(
    tap(x => console.log('antes:',x)),
    map(val => val * 10),
    tap({
        next: val => console.log('despues',val),
        complete: ()=> console.log('Termino todo')
    }),
)
.subscribe(val => console.log('val: ',val));





