
//Ejemplo basico
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source = interval(1000);

const firstFive = source.pipe(
  take(5)
);

firstFive.subscribe({
  next: value => console.log(`Valor: ${value}`), // Output: 0, 1, 2, 3, 4
  complete: () => console.log('Complete')
});