// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const MaxAndMin = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  console.log(`O valor máximo dentro do Array é ${max}:`);
  console.log(`O valor mínimo dentro do Array é ${min}`);
};

MaxAndMin([1, 2, 3, 4, 10]);
