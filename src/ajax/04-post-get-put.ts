import { AjaxError, ajax } from 'rxjs/ajax'


const url = 'https://httpbin.org/delay/1';

// ajax.post(url,{
//     id:1,
//     nombre:'Luka Modric'
// },
// {
//     'mi-token':'abc123'
// }).subscribe(console.log);

ajax({
    url,
    method:'POST',
    headers:{
        'mi-token':'XYZ-098'
    },
    body:{
        id:1,
        nombre:'Luka'
    }
}).subscribe(console.log)



