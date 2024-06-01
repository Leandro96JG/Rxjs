//formulario 

import { Observable, catchError, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1',userPass)
 .pipe(
    map((resp) => resp.response['token']),
    catchError(err => of('xxx')
))
    

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');

const submitBtn = document.createElement('button');

//Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';


inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail,inputPass,submitBtn);

document.querySelector('body').append(form);


// Streams

const submitForm$ = fromEvent<SubmitEvent>(form,'submit');

submitForm$.pipe(
    tap(
        ev => ev.preventDefault()
    ),
    map(ev=> ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    switchMap(peticionHttpLogin),
    

).subscribe(token => console.log(token))