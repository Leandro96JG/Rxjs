// throttleTime<T>(duration: number, scheduler: SchedulerLike = async, config: ThrottleConfig = defaultThrottleConfig): MonoTypeOperatorFunction<T>

import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, throttleTime } from "rxjs";


const click$ = fromEvent(document,'click');

click$.pipe(
    throttleTime(3000)
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);
input.placeholder = 'Ingrese datos';

const input$ = fromEvent<KeyboardEvent>(input,'keyup');

input$
.pipe(
    throttleTime(2000,asyncScheduler,{
        leading:true,
        trailing:true
    }),
    map((input)=>(<HTMLInputElement>input.target).value),
    distinctUntilChanged()
)
.subscribe(console.log);