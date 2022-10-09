const XMLHttpRequest = require('xhr2');
const { ajax } = require('rxjs/ajax');
// const { interval } = require('rxjs');
const { map, concatAll, take, first } = require('rxjs/operators');
const { writeFileSync } = require('fs');
const path = require('path');

// interval(1000)
//   .pipe(
//     map((_) => [1, 2, 3]),
//     concatAll()
//   )
//   .subscribe(console.log);

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: 'https://api.github.com/users/cod3rcursos/repos',
})
  .pipe(
    map(({ response }) => {
      return response;
    }),
    concatAll(),
    map((repo) => repo.full_name)
  )
  .subscribe(console.log);
