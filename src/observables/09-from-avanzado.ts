import { from, of } from "rxjs"





const observer = {
    next: val => console.log('next: ',val),
    complete: ()=> console.log('complete'),
    
}
//funcion generadora el *
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

//! una forma de mostrar datos de la funcion generadora.
// for (let id of miIterable){
//      console.log("id:", id);
// }


//emite valor en forma secuencial de un arreglo
// const source$ = from([1,2,3,4,5]);

//hace lo mismo que el from con el operador spread
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('hola');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async(resp) =>{
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })

// source$.subscribe(observer);




