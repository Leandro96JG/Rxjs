
import { Observable, Observer, Subscriber } from 'rxjs'

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: err =>console.warn('error:',err),
    complete: ()=> console.info('completado')
}


const intervalo$ = new Observable<number>(subs =>{
    //Crear contador
    let counter:number=0;

    const interval = setInterval(()=>{
        counter++;
        //el subs es el que definimos para que emita valores 
        // en este caso usar este observable tendremos resp del counter
        subs.next(counter);
        console.log(counter);
    },1000);

    setTimeout(()=>{
        //deja de emitir valores el subs
        subs.complete()
    },2500);

    // para limpiar el setinteval
    return ()=>{
        clearInterval(interval);
        console.log('intervalo destruido');
    }

});

const subs1 = intervalo$.subscribe(
    resp => console.log(observer),
)
const subs2 = intervalo$.subscribe(
    resp => console.log(observer),
)
const subs3 = intervalo$.subscribe(
    resp => console.log(observer),
);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(()=>{
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.info('Completado')
},5000);