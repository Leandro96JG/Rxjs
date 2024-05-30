import { fromEvent, interval, sample } from "rxjs";

// sample<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>


const interval$ = interval(500);

const click$ = fromEvent(document, 'click');

interval$
.pipe(
    sample(click$)
)
.subscribe(console.log)
