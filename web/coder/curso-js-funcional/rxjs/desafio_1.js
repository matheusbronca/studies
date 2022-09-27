const { interval, map, take, noop } = require('rxjs');

const printBetween = (min, max) => {
  const interval$ = interval(500);

  return interval$.pipe(
    take(max - min + 1),
    map((num) => num + min)
  );
};

printBetween(3, 6).subscribe({
  next: (num) => console.log(num),
  error: noop,
  complete: () => console.log('Complete!'),
});
