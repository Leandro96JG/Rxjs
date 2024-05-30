import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";


const click$ = fromEvent(document,'click');

click$.pipe(
    debounceTime(3000)
)
// .subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);
input.placeholder = 'Ingrese datos';

const input$ = fromEvent<KeyboardEvent>(input,'keyup');

input$
.pipe(
    debounceTime(1000),
    map((input)=>(<HTMLInputElement>input.target).value),
    distinctUntilChanged()
)
.subscribe(console.log);