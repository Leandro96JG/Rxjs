import { Observable, debounceTime, fromEvent, map, mergeAll, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { Item, GitgubUserResp } from "../interfaces/gitHub.interfaces";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput,orderList);

//Helpers

const mostrarUsarios = (usuarios:Item[])=>{
    orderList.innerHTML='';
    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina...';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
        
    }
}

const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');

input$.pipe(
    debounceTime(500),
    map<KeyboardEvent,string>(input =>(<HTMLInputElement>input.target).value),
    map<string,Observable<GitgubUserResp>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll<Observable<any>>(),
    map<Observable<GitgubUserResp>,Item[]>(val => val['items']),
    // tap(value => console.log('valor : ',value))
    
).subscribe(mostrarUsarios);