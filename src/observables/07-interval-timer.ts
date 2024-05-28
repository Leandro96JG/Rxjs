import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next', val),
    complete: () =>console.log('complete'),
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const interval$ = interval(1000);

// emite un valor a los 2 seg
// const timer$ = timer(2000);

//crea un interval a los 3 seg y emite valores cada 3seg
// const timer$ = timer(3000,3000);

const timer$ = timer(hoyEn5);




console.log('inicio')
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
//interval es async