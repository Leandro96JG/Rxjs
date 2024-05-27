
import { Observable, Observer, Subject, Subscriber } from 'rxjs'

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: err =>console.warn('error:',err),
    complete: ()=> console.info('completado')
}

const intervalo$ = new Observable<number>(subs =>{
   const intervalID = setInterval(
    ()=>{
        subs.next(Math.random())
    },1000);


    return ()=>{
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});

//1- Casteo multiple: Para distribuir el mismo valor a todas las subscripciones 
//2- Tambien es un observer
//3- Next, error y complete.

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo.subscribe(valor => console.log('subs1: ', valor));
// const subs2 = intervalo.subscribe(valor => console.log('subs2: ', valor));

//tienen el mismo valor de subcripcion
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);



//data producida Fuera del observable(Hot observable)
setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500)