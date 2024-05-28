
import { fromEvent, map, range } from "rxjs";


// range(1,5).pipe(
//     //ojito con los {};
//     map<number,string>(val =>`${val * 10}`
//     // return val * 10;
//     )
// )
// .subscribe(val => {
//     console.log("val:", val)
//     return 
// })

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');
keyup$.pipe(
    map(
        event => event.code
    )
).subscribe(event => {
    console.log("event:", event);
})


//!ya no se usan

// const keyupPluck$ = keyup$.pipe(
//     pluck('key')
// );
// const keyupMapto$ = keyup$.pipe(
//     mapTo('tecla presionada')
// );

// keyupPluck$.pipe().subscribe(code =>console.log('pluk ', code) );
// keyupMapto$.pipe().subscribe(code =>console.log('mapto ', code) );