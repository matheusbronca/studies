// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const calcCedulas = (value) => {
  const cedulas = [100, 50, 10, 5, 1];
  let total = 0;

  for (let i = 0; i < cedulas.length; i++) {
    const cedulasOut = [];
    let count = 0;

    if (total <= value) {
      while (total + cedulas[i] <= value) {
        count++;
        total += cedulas[i];
      }
      cedulasOut.push([cedulas[i], count]);
      count = 0;
    }

    cedulasOut.forEach((cedula) => {
      if (cedula[1] != 0) {
        console.log(`${cedula[1]} nota(s) de ${formatter.format(cedula[0])}`);
      }
    });
  }
};

calcCedulas(273);
