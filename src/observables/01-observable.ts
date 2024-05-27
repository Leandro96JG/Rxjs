import { Observable, Observer } from 'rxjs'
//$ para identificatar un observable

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: err =>console.log('error:',err),
    complete: ()=> console.info('completado')
}




const obs$ = new Observable<string>(subs=>{
    subs.next('hola');
    subs.next('mundo');
    subs.next('mundo2');
    subs.complete();
});

obs$.subscribe(resp => console.log(resp))