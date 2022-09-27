// Os dois tipos de operadores:

//  1. Operadores de Criação
const { from } = require('rxjs');

//  2. Operadores Encadeáveis (Pipeable operator)
const { last, map } = require('rxjs/operators');

const obs$ = of([1, 2, 3, 'ana', false, 'ultimo'])
  .pipe(
    last(),
    map((value) => value[0]),
    map((value) => `A letra encontrada foi ${value}`)
  )
  .subscribe((value) => {
    console.log(`O valor gerado foi: ${value}`);
  });
