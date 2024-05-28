import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

//ejemplo basico

const numbers = of(1, 2, 3, 4, 5);

const sum = numbers.pipe(
  reduce((acc, value) => acc + value, 0)
);

sum.subscribe({
  next: value => console.log(`Suma: ${value}`), // Output: Suma: 15
  complete: () => console.log('Complete')
});