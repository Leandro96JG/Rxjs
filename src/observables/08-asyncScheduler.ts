

// setTimeout(() => {

import { asyncScheduler } from "rxjs";

    
// }, 3000);


// setInterval(() => {
    
// }, 3000);


const saludar = () => console.log('Hola');
const saludar2 = nombre => console.log(` hola ${nombre}`);

//ejecuta la funcion despues de 2seg
// asyncScheduler.schedule( saludar, 2000 );

//para mandar un arg, solo se puede mandar un arg con este metedo pero para mandar muchos datos en un solo arg se puede usar un arreglo
// asyncScheduler.schedule( saludar2, 2000, 'Mundo' );


//no se puede usar una funcion de flecha
const subs = asyncScheduler.schedule( function(state){
    console.log('state:',state);

 //para que funcione como un intervalo
    this.schedule(state + 1,1000)

},3000,0 );


//para destruir el ciclo infinito
// setTimeout(()=>{
//     subs.unsubscribe();
// },6000);

//otra forma de terminar el ciclo
asyncScheduler.schedule(()=>subs.unsubscribe(),6000)