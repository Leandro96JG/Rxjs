import { range, startWith } from "rxjs";

const num$ = range(1,5)
.pipe(
    startWith(45),
);

num$.subscribe(console.log)