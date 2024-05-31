import { AjaxError, ajax } from 'rxjs/ajax'



const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url,{
    'Content-Type':'application/json',
});

obs$.subscribe(data => console.log('data: ', data));