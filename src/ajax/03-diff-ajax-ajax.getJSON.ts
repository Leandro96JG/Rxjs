import { catchError, of, pipe } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'

const manejaError = (resp:AjaxError)=>{
    console.log('error: ',resp.message);
    return of('Ocurrio un error')
}

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

//otra forma de manejar errores

obs$.subscribe(
    {
        next: val => console.log(val),
        error: (err:AjaxError) => console.warn('error: ',err.message),
        complete: () => console.log('completado')
    }
)


// obs$
// .pipe(
//     catchError(manejaError),
// )
// .subscribe(data => console.log('getJson: ', data));


// obs2$
// .pipe(
//     catchError(manejaError),
// )
// .subscribe(data => console.log('ajax',data));