import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';

const manejoErrores = (response:Response) =>{
    if (!response.ok){
        throw new Error(response.statusText);
    }
    return response;
}

//! error ajax

const atrapaError = (err:AjaxError) => {
    console.warn('error en: ',err.message);
    return of([]);
}


const fetchPromise = fetch(url);

// fetchPromise
//     .then( resp => resp.json())
//     .then(data => console.log('data: ',data))
//     .catch(err => console.warn('error: ',err))


// fetchPromise
//     .then(manejoErrores)   
//     .then( resp => resp.json())
//     .then(data => console.log('data: ',data))
//     .catch(err => console.warn('error: ',err))

ajax(url)
.pipe(
    map(resp => resp.response),
    catchError(atrapaError),
)
.subscribe(users => console.log('user: ',users));
