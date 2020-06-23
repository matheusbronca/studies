// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const formatter = Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
})

const calcAnuidade = (month, value) => {
  if (month === 1) {
    console.log(`Valor a ser recolhido: ${formatter.format(value)}`);
  } else {
    const newValue = (value * Math.pow(1 + 0.05, month));
    console.log(`Valor a ser recolhido: ${formatter.format(newValue)}`);
  }
};

calcAnuidade(1, 1000);
calcAnuidade(2, 1000);
calcAnuidade(3, 1000);
calcAnuidade(4, 1000);
calcAnuidade(10, 1000);
