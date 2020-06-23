// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const printOdd = (val1 = 0, val2 = 100) => {
  if (val1 > val2) {
    for (let i = val2; i <= val1; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    for (let i = val1; i <= val2; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
};

printOdd(120, 5);
printOdd(0, 100);
